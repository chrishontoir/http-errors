export enum HttpStatusCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  InternalServerError = 500
}

export enum HttpStatus {
  Success = "Success",
  BadRequest = "BadRequest",
  Unauthorized = "Unauthorized",
  InternalServerError = "InternalServerError"
}

const HttpStatusCodeMap: Record<HttpStatusCode, HttpStatus> = {
  [HttpStatusCode.Success]: HttpStatus.Success,
  [HttpStatusCode.BadRequest]: HttpStatus.BadRequest,
  [HttpStatusCode.Unauthorized]: HttpStatus.Unauthorized,
  [HttpStatusCode.InternalServerError]: HttpStatus.InternalServerError,
}

export class HttpError extends Error {
  status: HttpStatusCode;
  name: HttpStatus;
  message: string;
  code: string;
  data: unknown;

  constructor(status: HttpStatusCode, code?: string, message?: string, data?: unknown) {
    super(message)
    this.status = status;
    this.name = HttpStatusCodeMap[status] ?? HttpStatus.InternalServerError
    this.message = message ?? this.name
    this.code = code || "a";
    this.data = data;
  }
}
