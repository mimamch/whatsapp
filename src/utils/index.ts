import { Options } from "../types/options";
import { sendOtpWithCopyCode } from "./send-otp";

export const createUtils = (options: Options) => {
  return {
    sendOtpWithCopyCode: sendOtpWithCopyCode(options),
  };
};
