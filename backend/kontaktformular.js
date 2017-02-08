var nodemailer = require('nodemailer')

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://webshopuser:nele+sarah@projektwebshop.f4.htw-berlin.de:5432/webshopdatabase");

function sendingKontaktformular(req, res, next){

    //creating Transporter Object on Server:
    /*var transporter = nodemailer.createTransport({name:'localhost',tls: {
        rejectUnauthorized: false}})*/


    //creating Transporter Object local with gmail:
    var smtpConfig = {
                    host: 'smtp.googlemail.com',
                    port: 587,
                    secure: false, // use SSL
                    auth: {
                        user: 'webshophtw@gmail.com',
                        pass: 'silvia+lisa'
                    }
                };

    var transporter = nodemailer.createTransport(smtpConfig)


        

 var irgendwas = db.any("SELECT hallo();").then( function(status){

        var coder = {code :status[0].createinvitecode};
        
        
        var mailOptions = {
    //from: '"Onurs Bastelecke" <webshophtw@gmail.com>', // sender address
    from: 'Onurs Bastelecke',
    to: req.params.nutzer, // list of receivers
    subject: 'Ihre Nachricht an uns', // Subject line
    //text: 'Hier kannst du dich registrieren ', // plaintext body
    //text: 'Hier kannst du dich registrieren ', // plaintext body
    html: '<div>Hallo '+req.params.nachricht+' Vielen Dank für deine Nachricht! <br>'+
    '<br> Wir werden dir so schnell wie möglich antworten. <br><br> Dein Team von Onurs Bastelshop</div></br>' // html body
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Kontaktformular sent');

	});
	
 	// say it's OK to the customer in any case
	// Even in case of failure we can reconstruct the info from the logs  
	res.sendStatus(200)

} ) };
     
/**
 * Export to other node scripts
 */
   module.exports = {
	sendingKontaktformular: sendingKontaktformular
}