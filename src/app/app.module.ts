import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FetchService } from "./services/fetch.service";
import { LoggerService } from "./services/logger.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [FetchService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
