const nodemailer = require('nodemailer')
const moment = require('moment')
let secret


// set secrets by trying dev file first, then defaulting to process.env
try {
  secret = require('../../secrets')
  console.log('Mailer info loaded from: secrets file')
}
catch (err) {
  console.log('Secrets not found... trying process.env')
  if (process.env.MAILER_ADDRESS && process.env.MAILER_PASS) {
    secret = {
      MAILER_ADDRESS: process.env.MAILER_ADDRESS,
      MAILER_PASS: process.env.MAILER_PASS
    }
    console.log('Mailer info loaded from : process.env')
  }
  else {
    console.error('Unable to find keys... Mailer will not function!')
  }
}


// create re-usable transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: secret.MAILER_ADDRESS,
    pass: secret.MAILER_PASS
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

  const mailOptions = {
    from: `${fname} ${lname} <${senderAddr}>`,
    to: secret.MAILER_ADDRESS,
    subject: `${fname} ${lname}:  ${msgSubject}`,
    text: msgText,
    html: msgText + emailFooter
  }

  console.log('SECRETS ARE: ', secret.MAILER_ADDRESS, secret.MAILER_PASS)

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
    from: secret.MAILER_ADDRESS,
    to: member.email,
    subject: 'Your TNABT Membership Verification',
    text: responseBody
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err)
    console.log('Account creation email sent: ', info.envelope, info.messageId)
  })
}

const sendPaymentConfirmation = (member) => {
  const responseBody =
    `Thanks for your payment ${member.fname}!\n\n
    You're now able to access the stuff that's only for members!\n\n
    Your account will expire on Dec 31st of this year.
    `

  const mailOptions = {
    from: secret.MAILER_ADDRESS,
    to: member.email,
    subject: 'Your TNABT Membership Verification',
    text: responseBody
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.error(err)
    console.log('Payment confirmation email sent: ', info.envelope, info.messageId)
  })
}

module.exports = {
  sendContactMail,
  sendAccountMail,
  sendPaymentConfirmation
}
