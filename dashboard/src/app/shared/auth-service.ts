import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public loginStatus = new BehaviorSubject<boolean>(false);

    constructor(
    ) {
    }

    logout() {
        this.loginStatus.next(false);
    }


    isLoggedIn(): Observable<boolean> {
        return this.loginStatus.asObservable();
    }


}
