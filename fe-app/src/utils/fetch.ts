import { uuid } from "uuidv4";

const endpoint: string = "www.example.com";

export type FetchOptions = RequestInit;

const parse = (json: string) => {
  if (!json) return null;

  try {
    return JSON.parse(json);
  } catch (e) {
    throw new Error(`Failed to parse unexpected JSON response: ${json}`);
  }
};

const getPayload = (res: Response) => {
  const contentType = res.headers.get("content-type");

  return contentType && contentType.includes("json")
    ? res.text().then(parse)
    : res.text();
};

export const fetchy = <T>(
  url: string,
  options: FetchOptions = { method: "GET" }
): Promise<Response> => {
  return fetch(`${endpoint}/${url}`, {
    ...options,
    headers: { "correlation-id": uuid(), ...options.headers }
  });
};
