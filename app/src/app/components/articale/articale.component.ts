import { Component } from '@angular/core';

@Component({
  selector: 'app-articale',
  templateUrl: './articale.component.html',
  styleUrls: ['./articale.component.scss']
})
export class ArticaleComponent {
  bottonText = "Display Details";
  pStatus = true;
  timeStampArray : Date[] = []

  paragrphStatus(){
    const now = new Date();
    this.pStatus = !this.pStatus;
    this.timeStampArray.push(now)
  }

  colorFunc(){
    return this.timeStampArray.length >= 5 ? 'backgroundColor' : '';
  }

}
