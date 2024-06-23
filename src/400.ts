import { HttpError, HttpStatusCode } from "./http-error";

export class BadRequestError extends HttpError {
  constructor(code: string, message?: string, data?: unknown) {
    super(HttpStatusCode.BadRequest, code, message, data)
  }
}

export class MissingQueryParameterError extends BadRequestError {
  constructor(parameter: string) {
    super("b", `Missing query parameter ${parameter}`)
  }
}

export class InvalidQueryParameterError extends BadRequestError {
  constructor(parameter: string, reason: string) {
    super("c", `Invalid query parameter ${parameter}, ${reason}`)
  }
}

export class MissingHeaderError extends BadRequestError {
  constructor(header: string) {
    super("d", `Missing header ${header}`)
  }
}

export class InvalidHeaderError extends BadRequestError {
  constructor(header: string, reason: string) {
    super("e", `Invalid header ${header}, ${reason}`)
  }
}

export class MissingBodyError extends BadRequestError {
  constructor() {
    super("f", "Missing body")
  }
}

export class MissingBodyPropertyError extends BadRequestError {
  constructor(property: string) {
    super("g", `Missing body property ${property}`)
  }
}

export class InvalidBodyPropertyError extends BadRequestError {
  constructor(property: string, reason: string) {
    super("h", `Invalid body property ${property}, ${reason}`)
  }
}