import { Component } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeModule } from '../recipe/recipe.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: RecipeModule[] = [
    new RecipeModule('caramel apple', 'a sweat apple with caramel syrup covering it', 'https://preppykitchen.com/wp-content/uploads/2017/10/Caramel-apples-feature.jpg'),
    new RecipeModule('cupcake', 'easy cupcake to make from box of chocolate cake mix and a can of Coke', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cupcake_with_sugar_hearts_and_nonpareils.jpg/1200px-Cupcake_with_sugar_hearts_and_nonpareils.jpg?20090901020302')
  ];

}
