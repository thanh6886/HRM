export interface ISuccessResponse<Data> {
  message: string
  data: Data
}
export interface IErrorResponse<Data> {
  message: string
  data?: Data
}
