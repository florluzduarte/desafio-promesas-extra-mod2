//una clase Product que tenga id y name (puede tener más propiedades)
//una clase ProductCollection con dos métodos:
//getAll() que devuelve todos los productos
//getById(id:number) que devuelve el producto con el id ingresado.

import * as jsonfile from "jsonfile";

class Product {
    id: number;
    name: string
};

class ProductCollection {
    
    productList: Product[];

    loadProducts(){
        //necesito poder acceder al JSON donde tengo los productos
        //para eso uso jsonfile para leer el archivo
        const productsJson = jsonfile.readFile("./products.json");
        productsJson.then(data => this.productList = data);
        return productsJson;
        //esto genera una promesa y la vincula con la propiedad
        //interna llamada productList. La retorno para poder agarrarla más adelante en el index
    }

    getAll(){
        return this.productList;
    }

    getById(id:number){
        const resultado = this.productList.find(producto => producto.id == id);
        return resultado;
    }
}

export { ProductCollection };