var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var keys = require('../config/keys')

router.get('/contact', (req, res) => {
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

    const send = ({ from, name, subject, text }) => {
      var message = {
          from: 'Mill Bay Sushi <sushimillbay@gmail.com>',
          to: 'millbay.sushi@gmail.com',
          subject,
          text: ">> Mill Bay Sushi got a new message for you. <<" + '\n' + "• NAME: " + name + '\n' + '• EMAIL: ' + from + '\n' + '\n'+ "• MESSAGE: " + '\n' +  text + '\n' + '\n' + '\n' + "* Click the Email link to reply."
      }
      console.log(message)
      return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
          error ? reject(error) : res.send(info)
        )
      })
    }
    send({from, name, subject, text})
});

module.exports = router;
