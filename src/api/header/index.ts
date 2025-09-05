import { HEADER_ENDPOINT } from "../../lib/constants";
import { transformHeader } from "./transform";
import { HttpError } from "../HttpError";
import {
  ISuccessfulHeaderResponseApi,
  ITransformedSuccessfulHeaderResponseApi,
} from "./types";

export const fetchHeader =
  async (): Promise<ITransformedSuccessfulHeaderResponseApi> => {
    const res = await fetch(HEADER_ENDPOINT, {
      credentials: "include",
    });
    if (!res.ok) {
      throw new HttpError("Failed to fetch Header information", res.status);
    }
    const data: ISuccessfulHeaderResponseApi = await res.json();
    return transformHeader(data);
  };
