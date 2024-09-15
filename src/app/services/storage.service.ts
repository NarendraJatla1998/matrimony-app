import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})


export class StorageService {
    constructor(private http: HttpClient) {}
    
    public setLocalStorage(profileDetails: any) {
        return localStorage.setItem('userdetails',JSON.stringify(profileDetails))
    };

    public getLocalStorage() {
        return localStorage.getItem('userdetails');
    }

    public getUserDetails() {
        return this.http.get('../../assets/profile-list.json');
    }

}