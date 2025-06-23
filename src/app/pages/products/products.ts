import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Products as ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Productos {
  productos: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.productos = this.productsService.getProducts();
  }

  toggleMostrarMas(producto: Product): void {
    producto.mostrarMas = !producto.mostrarMas;
  }

  toggleFavorito(producto: Product): void {
    producto.favorito = !producto.favorito;
  }

  addToCart(producto: Product): void {
    alert(`Agregado al carrito: ${producto.nombre}`);
  }

  abrirResenas(producto: Product): void {
    alert(`Mostrando reseñas para: ${producto.nombre}`);
  }

  comprarAhora(producto: Product): void {
    alert(`Ir a comprar: ${producto.nombre}`);
  }

  trackById(index: number, producto: Product): number {
    return producto.id;
  }
}
