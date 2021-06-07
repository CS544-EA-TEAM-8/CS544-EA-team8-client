import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, first, map } from "rxjs/operators";
import { AuthService } from "../service/auth.service";

@Injectable({
    providedIn: 'root'
})
export class NoneAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.authService.loggedIn.pipe(
            catchError(e => of(false)),
            first(),
            map((isLoggedIn: boolean) => {
                if (isLoggedIn) {
                    this.router.navigate(['./']);
                    return false;
                }
                return true;
            })
        );
    }
}