import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  buttonStatus = true
  newName = 'bar'
  familyName = ''

  username = ''
  usernameStatus = ''
  userNamesList = ['bambi', 'mikel']


  constructor(){
    setTimeout(() => {
      this.buttonStatus = false
    }, 2000)

    this.usernameStatus = Math.random() < 0.5 ? "being used already" : "not being used you can use it"
  }

  eventsBindingFamilyName(inputEvent: Event){
    this.familyName = (<HTMLInputElement>event?.target).value;
  }

  eventsBindingConsole(){
    console.log("your full name is: " + this.newName + ' ' + this.familyName)
  }

  eventUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  restartUsername(){
    this.userNamesList.push(this.username);
    this.username = ''
  }



  colorNow(){
    return this.usernameStatus === "being used already" ? "pink" : "yellow";
  }

}
