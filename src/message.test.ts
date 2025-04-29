import { creds } from "./creds";

const main = async () => {
  const client = await creds.getClient();

  // const response = await client.sendMessageWithTemplate({
  //   phoneNumberId: creds.phoneNumberId,
  //   to: creds.receiverPhoneNumber,
  //   templateName: "otp",
  //   templateLanguageCode: "id",
  //   templateParameters: [
  //     {
  //       type: "body",
  //       parameters: [
  //         {
  //           type: "text",
  //           text: "123456",
  //         },
  //       ],
  //     },
  //     {
  //       type: "button",
  //       sub_type: "url",
  //       index: 0,
  //       parameters: [
  //         {
  //           type: "text",
  //           text: "123456",
  //         },
  //       ],
  //     },
  //   ],
  // });

  const response = await client.sendMessage({
    phoneNumberId: creds.phoneNumberId,
    to: creds.receiverPhoneNumber,
    text: "Hello, this is a test message",
  });
  console.log(response);
};

main();
