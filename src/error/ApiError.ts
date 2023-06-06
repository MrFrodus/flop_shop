export class ApiErr {
    code: number;
    message: string;
  
    constructor(code: number, message: string) {
      this.code = code;
      this.message = message;
    }
  
    static badRequest(msg: string) {
      return new ApiErr(400, msg);
    }
  
    static internal(msg: string) {
      return new ApiErr(500, msg);
    }
  
    static notFound(msg: string) {
      return new ApiErr(404, msg);
    }
  
    static notAllowed(msg: string) {
      return new ApiErr(401, msg);
    }
  
    static forbidden(msg: string) {
      return new ApiErr(403, msg);
    }
  }
  