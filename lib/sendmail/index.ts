import { connectMongo } from "lib/mongodb";
import { AppConfigModel } from "lib/mongodb/entities/app_config";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const sendEmail = async (
  option: Mail.Options,
  prefix = "BestPOS lead"
) => {
  let mail_receivers: Array<string> = [];

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

    const res = await transporter.sendMail({
      from: `${prefix} <${senderMail}>`,
      to: "salesx@googlegroups.com",
      subject: "bestpos",
      ...option,
    });
    console.log(res);
    return true;
  } catch (error) {
    console.log("error ", error);
    return false;
  }
};

export const sendMailToAdmin = async (option: Mail.Options) =>
  sendEmail(option, "BestPOS lead");

export const sendMailToCustomer = async (option: Mail.Options) =>
  sendEmail(option, "BestPOS");
