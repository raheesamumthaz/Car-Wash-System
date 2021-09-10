const nodemailer = require('nodemailer');
const mailConfig = require('../config')

/* Send rejected mail to washer */
const rejectedMailToWasher = function(email){
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
           auth: {
                user: mailConfig.emailId,
                pass: mailConfig.password,
             },
        secure: true,
    });
    
    
    const mailData = {
          from: mailConfig.emailId,  // sender address
          to: email,   // reciever
          subject: 'ACCOUNT DECLINED',
          text: 'Hey, sorry to inform you, but your registration as washer is declined by the Admin. Good luck for future endeavours!'   
    };
    
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
}


/* Send accepted mail to washer */
const acceptedMailToWasher = function(email){

  const transporter = nodemailer.createTransport({
      service: 'gmail',
         auth: {
              user: mailConfig.emailId,
              pass: mailConfig.password,
           },
      
  });
  
  
  const mailData = {
        from: mailConfig.emailId,  // sender address
        to: email,   // reciever
        subject: 'ACCOUNT APPROVED',
        text: 'Congratulations, your registration request as washer has been accepted '   
         };

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  });
}

module.exports = { rejectedMailToWasher, acceptedMailToWasher };