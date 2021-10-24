//Una clase ProductController, que deberá tener:
//un constructor donde se va a instanciar la clase ProductCollection.
//un método processOptions(option) que, si tiene la propiedad search devuelva el
//método getById(id:number), sino tiene que devolver getAll().

import { ProductCollection } from "./models";


class ProductController {

    productCollection: ProductCollection;
    productsJson: Promise<any>

    constructor(){
        this.productCollection = new ProductCollection();
        const productsJson = this.productCollection.loadProducts();
        this.productsJson = productsJson;
    }

    processOptions(option){
        if(option.search){
           return this.productCollection.getById(option.search);
        } else {
            return this.productCollection.getAll();
        }
    }
}

export { ProductController };