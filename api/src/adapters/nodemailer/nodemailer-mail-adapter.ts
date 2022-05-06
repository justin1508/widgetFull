import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "5b51fc85bdd1d5",
		pass: "434946063509b3"
	}
});

export class NodemailerMailAdapter implements MailAdapter {

	async sendMail({ subject, body }: SendMailData) {

		await transport.sendMail({
			from: 'Equipe FeedGet <oi@feedget.com>',
			to: 'Helio Jr <helio@junior.com>',
			subject,
			html: body
		})
	}
}


