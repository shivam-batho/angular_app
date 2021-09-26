import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';

  switchValue = "add";

  users = [
    {userId:1 , firstName:'Shivam'},
    {userId:2 , firstName:'Mayank'},
    {userId:3 , firstName:'Little'},
    {userId:4 , firstName:'Shubham'},
    {userId:5 , firstName:'Rahul'}
  ];
  colorVal = 'green';

  loop1 = "loop1";
  loop2 = "loop2";
  firstName = "";
  para = "This is an Example of Inner Html Property Binding";
  placeholderVal = " Please Enter The Value";

  hrefVal = "https://www.google.com";
  updateLink = "https://www.facebook.com";

  user= {
    userId:1,
    firstName:"shivam",
    lastName:"Batho",
    dob:'01/03/1994',
    salary:12000.69,
    city:"Nagpur",
    pincode:440030
  }

  showAlert(){
    alert("this is an Example of show Alert");
  }
  consoleLog(){
    console.log("THis is an Example of Console Log");
  }

  readFirstName(){
    console.log("This is an Two ways Data Binding" + this.firstName)
  }

}
