import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IngredientsModule {

  public name : string;
  public amount : string;

  constructor(@Inject(String) Rname: string, @Inject(String)Ramount: string){
    this.name = Rname;
    this.amount = Ramount;
  }

 }
