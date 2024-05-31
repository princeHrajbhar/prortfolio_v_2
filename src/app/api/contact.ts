import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';




type Data = {
    success: boolean;
    message: string;
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        try {
            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: email,
                subject: `Message from ${name}`,
                text: message,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: `Email sent to ${email}` });
        } catch (error) {
            res.status(500).json({ success: false, message: `Error sending email: ${error}` });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
