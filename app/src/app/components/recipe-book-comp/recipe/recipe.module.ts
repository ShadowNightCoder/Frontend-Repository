import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { 

  public name: string;
  public description: string;
  public imagePath: string;

  constructor(@Inject(String) recivedName: string, @Inject(String) Rdescription: string, @Inject(String) RimagePath: string){
    this.name = recivedName;
    this.description = Rdescription;
    this.imagePath = RimagePath;
  }

}
