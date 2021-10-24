//parseá los argumentos que llegan por terminal con minimist.
//instanciá ProductController para invocar el método processOptions.
//mostrá el resultado por la terminal.

import { ProductController } from "./controllers";
import * as minimist from "minimist";

const parseArguments = (argv) => {
    const params = minimist(argv);
    return {
        search: params.search
    };
}

const main = () => {
    const controller = new ProductController();
    
    controller.productsJson.then(() => {
        const accionesTerminal = parseArguments(process.argv.slice(2));
        const result = controller.processOptions(accionesTerminal);
        console.log(result);
        
    });
};

main();