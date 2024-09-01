/** @format */

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const useMailService = async (config) => {
  try {
    await transporter.sendMail(config);
    return {};
  } catch (err) {
    console.log(err);
  }
};

export default useMailService;
