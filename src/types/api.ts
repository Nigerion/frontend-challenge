import type { AxiosRequestConfig } from "axios";

export interface AxiosBaseQueryArgs {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
}

export interface AxiosBaseQueryError {
  status?: number;
  data: any;
}
