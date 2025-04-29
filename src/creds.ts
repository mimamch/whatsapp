import { createClient } from "./client";
import "dotenv/config";

const accessToken = process.env.ACCESS_TOKEN!;
const waBusinessAccountid = process.env.WA_BUSINESS_ACCOUNT_ID!;
const phoneNumberId = process.env.PHONE_NUMBER_ID!;
const receiverPhoneNumber = process.env.RECEIVER_PHONE_NUMBER!;

export const creds = {
  accessToken,
  waBusinessAccountid,
  phoneNumberId,
  receiverPhoneNumber,
  async getClient() {
    return createClient({
      accessToken: accessToken,
      waBusinessAccountid: waBusinessAccountid,
    });
  },
};
