import { Component } from '@angular/core';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  ingredients : IngredientsModule[] = [
    new IngredientsModule('suger', '100 gram'),
    new IngredientsModule('apple', '1')
  ];
}
