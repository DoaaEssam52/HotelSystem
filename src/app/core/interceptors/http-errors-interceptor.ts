import { Injectable } from '@angular/core';

import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(private _message: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((httpError: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (httpError.error?.message) {
          errorMessage = Array.isArray(httpError.error.message)
            ? httpError.error.message[0]
            : httpError.error.message;
        }

        errorMessage;
        debugger;

        // Handle error response
        this._message.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
        });

        // Ensure error is propagated to the next level
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
