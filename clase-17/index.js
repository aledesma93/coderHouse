const express = require("express");
const app = express();
const port = process.env.PORT ||8080;
const fs= require("fs");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//envia mails y sms

// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   service:'gmail',
//   port: 587,
//   auth: {
//     user: 'alejandroledesmahernan@gmail.com',
//     pass: 'iqxqkpgbgwwupkcp'
//   }
// });

//   const mailOptions={
//     from:'alejandroledesmahernan@gmail.com',
//     to:'alejandroledesmahernan@gmail.com',
//     subject:'mail de prueba',
//     html:'<h1>contenido de prueba</h1>',
//     attachments:[{
//       path:'foto.png'
//     }
     
//     ]
//   };


// try{
//   const info=  transporter.sendMail(mailOptions)
//   console.log(info)

// }catch(err){
//   console.log(err)
// }

// const accountSid = 'ACb3431e4c8684f49da9424c0fc2d70bfa'; 
// const authToken = 'b470d7a3339d22e82faa3e4f17642389'; 
// const client = require('twilio')(accountSid, authToken); 
 
// client.messages 
//       .create({ 
//          body: 'hola guille nuevo mensaje 3',  
//          messagingServiceSid: 'MG3c7b47941b49762ba67823954e8ff844',      
//          to: '+59897076870' 
//        }) 
//       .then(message => console.log(message)) 
//       .done();
/////////////////////////////////////////////////////////////////
const accountSid = 'ACb3431e4c8684f49da9424c0fc2d70bfa'; 
const authToken = 'b470d7a3339d22e82faa3e4f17642389'; 
const client = require('twilio')(accountSid, authToken); 
 ///////////////////////envia whatsap desde el codigo pero no responde//////////////
// client.messages 
//       .create({ 
//          body: 'desde el codigo', 
//          from: 'whatsapp:+14155238886',       
//          to: 'whatsapp:+5491134566483'  
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();

/////////////////////////////////////////////////////////////////
      app.post("/", (req, res) => {
        if (req.body.Body == "hola") {
          client.messages
            .create({
              body: "Gracias por saludar",
              from: "whatsapp:+14155238886",
              to: "whatsapp:+5491134566483",
            })
            .then((message) => console.log("la respuesta es" + message.body))
            .done();
        } else {
          client.messages
            .create({
              body: "Saludame primero",
              from: "whatsapp:+14155238886",
              to: "whatsapp:+5491134566483",
            })
            .then((message) => console.log("la respuesta es" + message.body))
            .done();
        }
        console.log(req.body);
        res.json(req.body);
      });
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });