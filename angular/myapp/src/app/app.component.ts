 import { Component } from '@angular/core';

 import {Product} from './models/product.model';


 interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}


 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hola a esta primera clase';
  name = 'jose';

  rockbands = ['nirvana', 'ac/dc'];
  users: User[] = [
   {
    name: 'Jose',
    age: 24,
    isSingle: false,
    avatar: 'assets/images/avatar.jpg',
   },
   {
   name: 'Julian',
   age: 30,
   isSingle: true,
   avatar: 'assets/images/user-avatar-icon-sign-profile-260nw-1145752283.webp',
   }
  ];
  nombrebanda = '';




  changeTitle() {
    this.title = 'nuevo título';
  }
  empty() {
    this.rockbands = [];
  }

  deleteItem(index: number) {
    this.rockbands.splice(index, 1);
  }
  updateItem(index: number) {
    this.rockbands[index] = 'se cambio';
  }

  addRockBand() {
    this.rockbands.push(this.nombrebanda);
    this.nombrebanda = '';
  }
}
