const nodemailer = require('nodemailer');

let mailTransporter =
	nodemailer.createTransport(
		{
			service: 'gmail',
			auth: {
				user: '###@gmail.com',
				pass: '##### ### ### ###'
			}
		}
	);

let mailDetails = {
	from: '###@gmail.com',
	to: '####@gmai.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for Nutan Bhoyar'
};

mailTransporter
	.sendMail(mailDetails,
		function (err, data) {
			if (err) {
				console.log('Error Occurs');
			} else {
				console.log('Email sent successfully');
			}
		});
