import { EMPTY, Observable, OperatorFunction, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

export class Util {
    static apiUri: string;

    static getUrl(apiRoute: string): string {
        return this.apiUri + '/' + apiRoute;
    }

    static throwStringError<T>(error: any): Observable<T> {
        if (error?.error instanceof Blob) {
            return getErrorFromBlob(error.error);
        }

        let errorMessage = (typeof error === 'string' && error) || error?.message
            || (typeof error?.error === 'string' && error.error) || 'Server Error';

        return throwError(errorMessage) || EMPTY;

        function getErrorFromBlob(blobError: any): Observable<any> {
            const fileAsTextObservable = new Observable<string>(observer => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const responseText = e.target?.result as string;
                    observer.next(responseText);
                    observer.complete();
                };
                reader.readAsText(blobError);
            });

            return fileAsTextObservable.pipe(switchMap(errMsgJsonAsText => throwError(errMsgJsonAsText)));
        }
    }
}