﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    getAll() {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"GET",
            "Access-Control-Allow-Credentials": "true"
        });

        return this.http.get(this.config.apiUrl + '/users', { headers });
    }

    getById(id: number) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"GET",
            "Access-Control-Allow-Credentials": "true"
        });

        return this.http.get(this.config.apiUrl + '/users/' + id, { headers });
    }

    create(user: User) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"POST",
            "Access-Control-Allow-Credentials": "true"
        });

        return this.http.post(this.config.apiUrl + '/users', user, { headers });
    }

    update(user: User) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"PUT",
            "Access-Control-Allow-Credentials": "true"
        });

        return this.http.put(this.config.apiUrl + '/users/' + user.id, user, { headers });
    }

    delete(id: number) {
        let headers = new HttpHeaders({
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Access-Control-Allow-Methods":"DELETE",
            "Access-Control-Allow-Credentials": "true"
        });

        return this.http.delete(this.config.apiUrl + '/users/' + id, { headers });
    }  
}