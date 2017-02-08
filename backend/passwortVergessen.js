var nodemailer = require('nodemailer')

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

function sendingPassword(req, res, next){

                //creating Transporter Object

        /*var transporter = nodemailer.createTransport({name:'localhost',tls: {
        rejectUnauthorized: false}})*/


        var smtpConfig = {
                    host: 'smtp.googlemail.com',
                    port: 587,
                    secure: false, // use SSL
                    auth: {
                        user: 'webshophtw@gmail.com',
                        pass: 'silvia+lisa'
                    }
                };

                //creating Transporter Object

        var transporter = nodemailer.createTransport(smtpConfig)

        var irgendwas = db.any("SELECT password FROM employee WHERE name='"+req.params.nutzer+"';").then( function(status){

            /*var coder = {code :status[0].createinvitecode};
            console.log(coder.code);*/
        
            var mailOptions = {
                from: 'Onurs Bastelecke',
                to: req.params.nutzer, // list of receivers
                subject: 'Passwort vergessen', // Subject line
                html: '<div>Lieber Mitarbeiter, <br><br> du hast dein Passwort vergessen, kein Problem! Hier schicken wir es dir gerne noch einmal zu:</div>' 
                //</br>'+' <p>'+coder.code+'</p>' 
                // html body
            };

            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                return console.log(error);
                }
                console.log('PasswortVergessen sent: ' + info.response);

	       });
	
	       res.sendStatus(200)

        } ) 
    };
     
/**
 * Export to other node scripts
 */
   module.exports = {
	sendingPassword: sendingPassword
}