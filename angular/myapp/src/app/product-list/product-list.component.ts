import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'avatar1',
      image: 'assets/images/avatar.jpg',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 100,
      text: 'avatar2',
      image: 'assets/images/user-avatar-icon-sign-profile-260nw-1145752283.webp',
    },
  ];


  constructor() { }

  ngOnInit() {

  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
  }

}
