import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class FetchService {
  private data: any[] = [];
  constructor(private logger: LoggerService) {}

  goFetch(url: string) {
    fetch(url)
      .then(res => res.json())
      .then(data => (this.data = data))
      .catch(err => this.logger.error(err));
    return this.data;
  }
}
