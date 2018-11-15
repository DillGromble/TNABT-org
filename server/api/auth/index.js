const router = require('express').Router();
const passport = require('passport');
const Member = require('../../../db/Members');
const generator = require('generate-password');
const sendAccountMail = require('../../services/mailer').sendAccountMail;

router
  .get('/me', (req, res, next) => { res.json(req.user) })


  .post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err)
      if (!user) return res.status(401).send({ success: false, message: info.name })

      req.login(user, loginErr => {
        if (loginErr) return next(loginErr)
        return res.send({
          success: true,
          message: 'authentication success',
          changeRequired: user.password_change_required
        })
      })
    })(req, res, next)
  })


  .post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).send(req.user);
  })


  .post('/update', (req, res, next) => {
    Member.findOne({ email: req.body.username }, (findErr, member) => {
      if (findErr) return next(findErr);
      member.changePassword(req.body.oldPassword, req.body.newPassword, (error, updatedMember) => {
        if (error) return next(error);
        updatedMember.password_change_required = false;
        updatedMember.save((err, user) => {
          if (err) return next(err);
          res.status(200).send(user);
        })
      })
    })
  })



  .post('/resetPassword', (req, res, next) => {
    const memberToReset = req.body.username;
    const adminEmail = req.session.passport.user;
    if (!memberToReset) {
      return res.status(400).send('You must specify a member!');
    }
    console.log(adminEmail + 'initiated reset of password for member: ' + memberToReset);

    return Member.findOne({ email: adminEmail })
      .then(admin => {
        if (!admin.is_admin) {
          return res.status(403).send('Only administrators can reset passwords');
        }
        return Member.findOne({ email: memberToReset });
      })
      .then(member => {
        const tempPassword = generator.generate({ length: 10, numbers: true });
        member.setPassword(tempPassword, (err, thisModel, passErr) => {
          sendAccountMail(thisModel, tempPassword);
          thisModel.set({ "password_change_required": true });
          thisModel.save();
          res.sendStatus(204);
        })
      })
      .catch(next);
  })

  .use('/facebook', require('./facebook-auth'))
  .use('/paypal-auth', require('../../services/paypal-auth'))


module.exports = router
