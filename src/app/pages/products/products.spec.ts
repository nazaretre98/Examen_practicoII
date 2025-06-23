import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa esto
import { Product } from '../../services/products';
import { Products } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // 👈 agrega CommonModule aquí
  templateUrl: './products.html',
  styleUrls: ['./products.css'] // nota: debería ser style**s**Urls
})
export class Productos {
  productos: Product[] = [];

  constructor(private product: Products) {
    this.productos = this.product.getProducts();
  }

  toggleMostrarMas(producto: Product) {
    producto.mostrarMas = !producto.mostrarMas;
  }
}
