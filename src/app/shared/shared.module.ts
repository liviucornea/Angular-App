import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { CoinflipComponent } from './coinflip/coinflip.component'



@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
    TodoEditComponent,
    CoinflipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, TodosComponent, CoinflipComponent]
})
export class SharedModule { }
