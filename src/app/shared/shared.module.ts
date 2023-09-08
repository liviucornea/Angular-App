import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserErrorComponent } from './user-error/user-error.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
    TodoEditComponent,
    CoinflipComponent,
    UserComponent,
    UserErrorComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent, TodosComponent, CoinflipComponent]
})
export class SharedModule { }
