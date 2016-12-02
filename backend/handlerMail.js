var url = environment.customerFrontEnd +'sendMail';
	
			// send prepared html mail to customer via Mandrill
		    $.ajax({
				url: url,
				type: 'POST',
				// ATTENTION: synchronous is needed since sometimes pages reload after calling this funciton
				async: false,
				contentType: 'application/json',
				data: JSON.stringify({
					'mailOptions':
						{
			                'from' : 'hallo@frag-aaron.de',
			                'to' :customer['contactInfo']['eMail'],
			                
			                'subject' : 'Willkommen bei Aaron | Ihr Helfer rund um Computer & Co',
			                'html' : mailContent