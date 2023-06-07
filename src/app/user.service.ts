import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable, map } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService {
    loggedInUser?: string;

    constructor(private http: HttpClient){      
    }

    login(login: string, password: string): Observable<boolean> {
        const login1 = encodeURIComponent(login);
        const password1 = encodeURIComponent(password);

        return this.http.get<any[]>('http://localhost:3000/users?login=' + login1 + '&password=' + password1)
        .pipe(map(tablica => {
        if (login === 'student' && password === 'password'){
            this.loggedInUser = login;
            return true;            
        } else {
            this.logout();
            return false;
        }
    }));
    }

    logout(){
        this.loggedInUser = undefined;
    }

    
}