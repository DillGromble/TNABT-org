const nodemailer = require('nodemailer')
const moment = require('moment')


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailer.tnabt@gmail.com',
    pass: process.env.MAILER_PASS
  }
})

const getDate = () => moment().format('MMMM Do YYYY')

const sendContactMail = (fname, lname, senderAddr, msgSubject, msgText) => {
  const responseSubject = encodeURIComponent(`Response to: ${msgSubject}`)
  const responseBody = encodeURIComponent(
    `\n\n\n\nOn ${getDate()},  ${fname} sent: \n\n ${msgText}`
  )
  const emailFooter = `
    <br /><br /><hr />
    <a href="mailto:${senderAddr}?subject=${responseSubject}&body=${responseBody}">Reply to ${fname}</a>
  `

  let mailOptions = {
    from: `${fname} ${lname} <${senderAddr}>`,
    to: 'mailer.tnabt@gmail.com',
    subject: `${fname} ${lname}:  ${msgSubject}`,
    text: msgText,
    html: msgText + emailFooter
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error)
    console.log('Contact Us message sent:', info.envelope, info.messageId)
  })
}


const sendAccountMail = (member, tempPass) => {
  console.log('SENDING ACCOUNT MAIL TO NEW MEMBER at: ', member.email)

  const responseBody =
    `Welcome ${member.fname}!\n\n
    Your TNABT account has been created with the following credentials:\n\n
    E-mail: ${member.email}
    Temporary Password: ${tempPass}\n\n
    Until payment verification is received from PayPal for your membership,
    you will be unable to view member content.  You'll receive an e-mail as
    soon as we get verification from PayPal, letting you know that you're a
    bonafide member and can log in.\n\n
    Upon your first login you'll be prompted to update your temporary password
    to one of your choosing.\n\n
    Thank you for joining us!
    `
  const mailOptions = {
    from: 'mailer.tnabt@gmail.com',
    to: member.email,
    subject: 'Your TNABT Membership Verification',
    text: responseBody
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err)
    console.log('Account creation email sent: ', info.envelope, info.messageId)
  })
}


module.exports = {
  sendContactMail,
  sendAccountMail
}
