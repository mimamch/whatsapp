import axios from "axios";
import { Options, ExposedOptions } from "./types/options";
import { sendMessage, sendMessageWithTemplate } from "./message";
import { createUtils } from "./utils";

/**
 * Creating client instance
 * @param options
 * @returns client
 */
export const createClient = (options: ExposedOptions) => {
  const a = axios.create({
    baseURL: options.baseUrl ?? "https://graph.facebook.com/v22.0",
    headers: {
      Authorization: `Bearer ${options.accessToken}`,
    },
  });
  const opt: Options = {
    ...options,
    axios: a,
  };

  return {
    utils: createUtils(opt),
    sendMessageWithTemplate: sendMessageWithTemplate(opt),
    sendMessage: sendMessage(opt),
  };
};
