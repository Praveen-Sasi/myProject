import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Api/apiservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  user :any [] =[];

  constructor(private apiservice : ApiserviceService){

  }

  SaveData(){
    let url:any="https://retoolapi.dev/W72n6T/data?email="+this.email+"&password="+this.password
    this.apiservice.getdata(url).subscribe((message:any)=>{
      console.log(message);
      this.user=message
      if(this.user.length==0){
        alert("login failed")
      }
      else{
        alert("login success")
  }
  })
}
}
  
