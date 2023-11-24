import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) {
    
  }
  getdata(url:any){
  return this.http.get(url)
  }
  postdata(data:any){
   return this.http.post("https://retoolapi.dev/W72n6T/data",data)
  }
}
