import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }

  warn(message: string) {
    console.warn(message);
  }

  info(message: string) {
    console.info(message);
  }

  table(object: any) {
    console.table(object);
  }
}
