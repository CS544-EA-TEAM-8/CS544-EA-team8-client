import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkLoggedIn(state.url);
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.checkLoggedIn(segments.join('/'));
    }

    private checkLoggedIn(url: string) {
        return this.authService.loggedIn.pipe(
            catchError(e => of(false)),
            first(),
            map((isLoggedIn: boolean) => {
                if (!isLoggedIn) {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
                    return false;
                }
                return true;
            })
        );
    }
}