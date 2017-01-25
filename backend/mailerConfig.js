var nodemailer = require('nodemailer')

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

function sendingMail(req, res, next){





                //creating Transporter Object

        var transporter = nodemailer.createTransport({name:'localhost',tls: {
        rejectUnauthorized: false}})


        /* var smtpConfig = {
                    host: 'smtp.googlemail.com',
                    port: 587,
                    secure: false, // use SSL
                    auth: {
                        user: 'webshophtw@gmail.com',
                        pass: 'silvia+lisa'
                    }
                };

                //creating Transporter Object

        var transporter = nodemailer.createTransport(smtpConfig)*/

 var irgendwas = db.any("SELECT createInvitecode();").then( function(status){

        var coder = {code :status[0].createinvitecode};
        console.log(coder.code);
        /*var inhalt = <div>
Herzlich Wilkommen neuer Mitarbeiter!</br>
mit dem unten stehenden Link kannst du dich in unserer Bastelecke als Mitarbeiter registrieren.</div>*/
        //var mailOptions = req.body.mailOptions;
        var mailOptions = {
    //from: '"Onurs Bastelecke" <webshophtw@gmail.com>', // sender address
    from: 'Onurs Bastelecke',
    to: req.params.nutzer, // list of receivers
    subject: 'Registrierung✔', // Subject line
    //text: 'Hier kannst du dich registrieren ', // plaintext body
    html: '<div>Herzlich Wilkommen neuer Mitarbeiter!mit dem unten stehenden Link kannst du dich in unserer Bastelecke als Mitarbeiter registrieren</div></br>'+' <a href="http://projektwebshop.f4.htw-berlin.de:4200/registrierung/'+coder.code+'">registrieren</a>' // html body
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

	});
	
 	// say it's OK to the customer in any case
	// Even in case of failure we can reconstruct the info from the logs  
	res.sendStatus(200)

} ) };
     
/**
 * Export to other node scripts
 */
   module.exports = {
	sendingMail: sendingMail
}