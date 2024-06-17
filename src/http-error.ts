enum HttpStatusCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  InternalServerError = 500
}

enum HttpStatus {
  Success = "Success",
  BadRequest = "BadRequest",
  Unauthorized = "Unauthorized",
  InternalServerError = "InternalServerError"
}

const HttpStatusCodeMap = {
  [HttpStatusCode.Success]: HttpStatus.Success,
  [HttpStatusCode.BadRequest]: HttpStatus.BadRequest,
  [HttpStatusCode.Unauthorized]: HttpStatus.Unauthorized,
  [HttpStatusCode.InternalServerError]: HttpStatus.InternalServerError,
}

class HttpError extends Error {
  status: HttpStatusCode;
  name: HttpStatus;
  message: string;

  constructor(status: HttpStatusCode, message?: string) {
    super()
    this.status = status;
    this.name = HttpStatusCodeMap[status] ?? HttpStatus.InternalServerError
    this.message = message ?? this.name
  }
}
