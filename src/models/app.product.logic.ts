import { Product } from "./app.products.model";

export class ProductLogic {
   private products: Array<Product>;

   constructor(){
    this.products = new Array<Product>();

    this.products.push(new Product(101, 'Laptop', 'HP', 'Electronics', 12300));
    this.products.push(new Product(102, 'Bulb', 'Bajaj', 'Electrical', 30));
   }

   getProducts():Array<Product>{
    return this.products;
   }
   addProduct(prd:Product):Array<Product>{
    this.products.push(prd);
    return this.products;
   }

}
