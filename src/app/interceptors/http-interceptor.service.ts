import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Globals } from "../app.globals";

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(private globals: Globals) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        params: req.params.append("token", this.globals.finnhubToken),
      })
    );
  }
}
