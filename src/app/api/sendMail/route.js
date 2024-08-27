import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Create a transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP server details
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Replace with your email
      pass: process.env.EMAIL_PASS, // Replace with your email password
    },
  });

  // Send mail
  try {
    await transporter.sendMail({
      from: '"Your Name" <your-email@example.com>', // Replace with your name and email
      to: 'your-email@example.com', // Replace with the recipient email
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
