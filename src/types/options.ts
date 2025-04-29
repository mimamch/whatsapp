import { AxiosInstance } from "axios";
import { AuthProps } from "../auth";

export type ExposedOptions = Omit<AuthProps, "axios"> & {
  baseUrl?: string;
};

export type Options = ExposedOptions & {
  axios: AxiosInstance;
};
