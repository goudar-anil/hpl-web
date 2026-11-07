const baseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");

export class ApiError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly data: unknown;

  constructor(
    message: string,
    status: number,
    statusText: string,
    data: unknown,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
}

function buildUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${baseUrl}/${path.replace(/^\/+/, "")}`;
}

async function readResponse(response: Response): Promise<unknown> {
  const text = await response.text();

  if (!text) {
    return undefined;
  }

  if (response.headers.get("content-type")?.includes("json")) {
    return JSON.parse(text) as unknown;
  }

  return text;
}

function getErrorMessage(data: unknown, fallback: string): string {
  if (typeof data === "string" && data) {
    return data;
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "message" in data &&
    typeof data.message === "string"
  ) {
    return data.message;
  }

  return fallback;
}

async function request<TResponse>(
  path: string,
  options: RequestInit = {},
): Promise<TResponse> {
  const headers = new Headers(options.headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  const response = await fetch(buildUrl(path), { ...options, headers });
  const data = await readResponse(response);

  if (!response.ok) {
    throw new ApiError(
      getErrorMessage(data, response.statusText || "Request failed"),
      response.status,
      response.statusText,
      data,
    );
  }

  return data as TResponse;
}

type JsonRequestOptions = Omit<RequestInit, "body" | "method">;

function sendJson<TResponse>(
  method: string,
  path: string,
  body: unknown,
  options?: JsonRequestOptions,
): Promise<TResponse> {
  const headers = new Headers(options?.headers);
  let requestBody: BodyInit;

  if (body instanceof FormData) {
    requestBody = body;
  } else {
    headers.set("Content-Type", "application/json");
    requestBody = JSON.stringify(body);
  }

  return request<TResponse>(path, {
    ...options,
    method,
    headers,
    body: requestBody,
  });
}

export const api = {
  request,

  get<TResponse>(
    path: string,
    options?: Omit<RequestInit, "body" | "method">,
  ): Promise<TResponse> {
    return request<TResponse>(path, { ...options, method: "GET" });
  },

  post<TResponse, TBody = unknown>(
    path: string,
    body: TBody,
    options?: JsonRequestOptions,
  ): Promise<TResponse> {
    return sendJson<TResponse>("POST", path, body, options);
  },

  put<TResponse, TBody = unknown>(
    path: string,
    body: TBody,
    options?: JsonRequestOptions,
  ): Promise<TResponse> {
    return sendJson<TResponse>("PUT", path, body, options);
  },

  patch<TResponse, TBody = unknown>(
    path: string,
    body: TBody,
    options?: JsonRequestOptions,
  ): Promise<TResponse> {
    return sendJson<TResponse>("PATCH", path, body, options);
  },

  delete<TResponse>(
    path: string,
    options?: Omit<RequestInit, "body" | "method">,
  ): Promise<TResponse> {
    return request<TResponse>(path, { ...options, method: "DELETE" });
  },
};
