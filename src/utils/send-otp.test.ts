import { creds } from "../creds";

const main = async () => {
  const client = await creds.getClient();

  const response = await client.utils.sendOtpWithCopyCode({
    phoneNumberId: creds.phoneNumberId,
    to: creds.receiverPhoneNumber,
    templateName: "otp",
    templateLanguageCode: "id",
    code: "123456",
  });
  console.log(response);
};

main();
