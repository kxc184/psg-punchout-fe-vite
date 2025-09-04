import { HttpError } from "@/api/HttpError";

export function defaultRetry(failureCount: number, error: HttpError) {
  // Only retry for network errors or 5xx, not for 401/403
  if (error?.status === 401 || error?.status === 403) return false;
  return failureCount < 3;
}
