var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var keys = require('../config/keys')

router.get('/contact', function(req, res) {
  res.send('Server is working.')
});

router.post('/contact', (req, res) => {
  const {from = req.body.from, name = req.body.name, subject = req.body.subject, text = req.body.text } = req.body
  var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: 'OAuth2',
              user: "sushimillbay@gmail.com",
              clientId: keys.googleClientID,
              clientSecret: keys.googleClientSecret,
              refreshToken: keys.refreshToken,
              accessToken: keys.accessToken
            },
    });

      var message = {
          from: 'sushimillbay@gmail.com',
          to: 'pwhtpsc@gmail.com',
          subject,
          text: "You got an Email from: " + name + '\n' + 'Email: ' + from + '\n' + '\n'+ "Message: " + '\n' +  text
      }
      console.log(message)
      return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
          error ? reject(error) : console.log("Email Sent")
        )
      })
});

module.exports = router;
