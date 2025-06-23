import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Products as ProductsService } from '../../services/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Productos {
  productos: Product[] = [];
  terminoBusqueda: string = '';

  constructor(private productsService: ProductsService) {
    this.productos = this.productsService.getProducts();
  }

  get productosFiltrados(): Product[] {
    if (!this.terminoBusqueda) return this.productos;
    const termino = this.terminoBusqueda.toLowerCase();
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino) ||
      producto.descripcion.toLowerCase().includes(termino)
    );
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
