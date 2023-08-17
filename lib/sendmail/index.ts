import { connectMongo } from "lib/mongodb";
import { AppConfigModel } from "lib/mongodb/entities/app_config";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

let mail_receivers: Array<string> = [];

export const sendEmail = async (option: Mail.Options) => {
  if (!process.env.ENABLE_SENDING_EMAIL) {
    return false;
  }

  const senderMail = `${process.env.SENDER_MAIL_ACCOUNT}`;

  try {
    if (mail_receivers.length == 0) {
      if (process.env.ENV === "production") {
        await connectMongo();
        const configs = await AppConfigModel.find({});
        mail_receivers.push(...(configs?.[0]?.mail_receivers || []));
      } else {
        mail_receivers.push(`${process.env.RECEIVER_EMAIL}`);
      }
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: senderMail,
        pass: `${process.env.SENDER_EMAIL_PASSWORD}`,
      },
    });

    await transporter.sendMail({
      from: senderMail,
      to: mail_receivers,
      subject: "bestpos",
      ...option,
    });
    return true;
  } catch (error) {
    console.log("error ", error);
    return false;
  }
};
