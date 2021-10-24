# desafio-promesas-extra-mod2

Este es un ejercicio extra para practicar los temas del módulo 2 de la carrera de Desarrollo Web Fullstack de apx.school

En un archivo models.ts, creá:
- Una clase Product que tenga id y name (puede tener más propiedades)
- Una clase ProductCollection con dos métodos:
  - getAll() que devuelve todos los productos
  - getById(id:number) que devuelve el producto con el id ingresado.
  
En un archivo controllers.ts, creá:
- Una clase ProductController, que deberá tener:
    - un constructor donde se va a instanciar la clase ProductCollection.
    - un método processOptions(option) que, si tiene la propiedad search devuelva el método getById(id:number), sino tiene que devolver getAll().

En un archivo index.ts:
- parseá los argumentos que llegan por terminal con minimist.
- instanciá ProductController para invocar el método processOptions.
- mostrá el resultado por la terminal.
