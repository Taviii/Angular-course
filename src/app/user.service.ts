import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class UserService {
    loggedInUser?: string;

    login(login: string, password: string): boolean {
        if (login === 'student' && password === 'password'){
            this.loggedInUser = login;
            return true;            
        } else {
            this.logout();
            return false;
        }
    }

    logout(){
        this.loggedInUser = undefined;
    }

    
}