import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    }

    //Authencation functions
    login(email: any, password: any) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    }
 
    logout() {
        this.afAuth.auth.signOut().then((success) => {
            this.router.navigateByUrl('provider/auth/signin');
        })
    }
}