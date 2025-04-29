import {
  SendMessageRequest,
  SendMessageWithTemplateRequest,
} from "./types/message";
import { Options } from "./types/options";

/**
 * Send a message with a template to a WhatsApp number.
 */
export const sendMessageWithTemplate =
  (options: Options) => async (props: SendMessageWithTemplateRequest) => {
    const response = await options.axios.post(
      `/${props.phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        to: props.to,
        type: "template",
        template: {
          name: props.templateName,
          language: {
            code: props.templateLanguageCode,
          },
          components: props.templateParameters
            ? props.templateParameters.map((component) => ({
                type: component.type,
                sub_type: component.sub_type,
                index: component.index,
                parameters: component.parameters.map((parameter) => ({
                  type: parameter.type,
                  text: parameter.text,
                  payload: parameter.payload,
                })),
              }))
            : undefined,
        },
      }
    );
    return response.data as {
      messaging_product: "whatsapp";
      contacts: Array<{ input: string; wa_id: string }>;
      messages: Array<{
        id: string;
        message_status: string;
      }>;
    };
  };

/**
 * Send a message - only work if receiver has already messaged the sender first for last 24 hours
 */
export const sendMessage =
  (options: Options) => async (props: SendMessageRequest) => {
    const response = await options.axios.post(
      `/${props.phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        to: props.to,
        text: {
          body: props.text,
        },
        context: props.context_message_id
          ? {
              message_id: props.context_message_id,
            }
          : undefined,
      }
    );
    return response.data as {
      messaging_product: "whatsapp";
      contacts: Array<{ input: string; wa_id: string }>;
      messages: Array<{
        id: string;
        message_status: string;
      }>;
    };
  };
