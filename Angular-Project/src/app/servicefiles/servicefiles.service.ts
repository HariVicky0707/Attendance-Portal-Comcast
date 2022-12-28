import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefilesService {
  constructor(private http:HttpClient) {
    }
    getEmployeeList(){
      return this.http.get("http://localhost:8080/api/v1/getLogin")
    }
    postEmployee(body:any){
      return this.http.post("http://localhost:8080/api/v1/signup",body)
    }
    postLogin(body:any){
      console.log(body);
            return this.http.post("http://localhost:8080/api/v1/login",body)
          }
    }