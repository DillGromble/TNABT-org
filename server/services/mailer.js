const nodemailer = require('nodemailer')
const moment = require('moment')
const generator = require('generate-password')


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


const sendAccountMail = (member) => {
  console.log('SENDING ACCOUNT MAIL TO NEW MEMBER at: ', member.email)

  const mailOptions = {
    from: 'mailer.tnabt@gmail.com',
    to: member.email,
    subject: 'Your TNABT Membership Verification',
    text: member
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
