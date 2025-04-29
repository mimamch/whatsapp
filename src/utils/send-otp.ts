import { sendMessageWithTemplate } from "../message";
import {
  SendMessageMandatoryFields,
  SendMessageWithTemplateRequest,
} from "../types/message";
import { Options } from "../types/options";

type SendOTPProps = SendMessageMandatoryFields & {
  code: string;
} & Omit<SendMessageWithTemplateRequest, "templateParameters">;

export const sendOtpWithCopyCode =
  (options: Options) => async (props: SendOTPProps) => {
    return sendMessageWithTemplate(options)({
      to: props.to,
      phoneNumberId: props.phoneNumberId,
      templateLanguageCode: props.templateLanguageCode,
      templateName: props.templateName,
      templateParameters: [
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: props.code,
            },
          ],
        },
        {
          type: "button",
          sub_type: "url",
          index: 0,
          parameters: [
            {
              type: "text",
              text: props.code,
            },
          ],
        },
      ],
    });
  };
