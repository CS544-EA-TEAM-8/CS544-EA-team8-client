import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Util } from "../utility/Util";
import { catchError, take, tap } from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";
import jwt_decode from "jwt-decode";

@Injectable({ providedIn: 'root' })
export class AuthService {

    loggedIn: BehaviorSubject<boolean>;


    constructor(private http: HttpClient) {
        this.loggedIn = new BehaviorSubject(false);
    }

    login(username: string, password: string) {
        return this.http?.post<any>(Util.getUrl('login'), { username, password }).pipe(take(1), tap(t => {

        }), catchError(err => Util.throwStringError(err)));

    }

}
