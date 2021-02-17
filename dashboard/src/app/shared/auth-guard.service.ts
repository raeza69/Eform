import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth-service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    isLoggedIn: Observable<boolean>;

    constructor(private authService: AuthService, private router: Router) {
        this.isLoggedIn = this.authService.isLoggedIn();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.isLoggedIn.pipe(
            take(1),
            map((loginStatus: boolean) => {
                // To check if user is not logged in
                if (!loginStatus) {
                    this.router.navigate(['/login']);
                    return false;
                } else {
                    return true;
                }

            })
        );
    }
}
