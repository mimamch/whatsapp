export type SendMessageMandatoryFields = {
  phoneNumberId: string;
  to: string;
};

type SendMessageTemplateComponents = {
  type: "body" | "button";
  sub_type?: string;
  index?: number;
  parameters: Array<{
    type: "text" | "payload";
    text: string;
    payload?: string;
  }>;
};

export type SendMessageWithTemplateRequest = SendMessageMandatoryFields & {
  templateName: string;
  templateLanguageCode: string;
  templateParameters?: Array<SendMessageTemplateComponents>;
};
