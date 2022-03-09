import { ResponseError } from "./response-error.model";

export class ResponsePage<T> {
    totalElements: number = 0
    content: T[] = []
    erro: ResponseError = new ResponseError()
}