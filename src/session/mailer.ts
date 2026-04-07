const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: String(process.env.SMTP_SERVER),
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: String(process.env.SMTP_USER),
    pass: String(process.env.SMTP_PASSWORD),
  }
});

/* Here come the templates */

export const sendNoPasswordAuthCode = ({ email, token }: any) => {
  return new Promise<void>((resolve, reject) => {
    // if (process.env.NODE_ENV === 'production') {
      //
      transporter.sendMail({
        from: `devxk login <${String(process.env.SMTP_USER)}>`,
        to: email, subject: 'Someone is trying to log in',
        text: `Use the code ${token} to confirm your login`,
        html: `
          <p>Someone is trying to login to devxk using this email. Use the following code to confirm the login or ignore this message.</p>
          <h1><a href="http://localhost:8000/auth/${token}">Перейти</a></h1>
        `
      }, (err: Error) => err ? reject(err) : resolve());
    // } else {
    //   //
    //   console.log('Mock send code email ', { email, code });
    //   resolve();
    // }
  });
};