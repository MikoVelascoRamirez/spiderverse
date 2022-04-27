const Spiderman = require('../app/spiderman');

describe("Unit Tests for spiderman class", () => {
    test("Create an spiderman object", () =>{
        //Código a utilizar
        //Busco instanciar un objeto con esta información.
        //¿Qué debo hacer para obtener dicho resultado?

        const TobeyMcGuire = new Spiderman("Spiderman original", 40, "Tobey Mc. Guire", 2, "Sony");

        //Valido que el código funcione como espero
        expect(TobeyMcGuire.name).toBe("Spiderman original");
        expect(TobeyMcGuire.age).toBe(40);
        expect(TobeyMcGuire.actor).toBe("Tobey Mc. Guire");
        expect(TobeyMcGuire.movies).toBe(2);
        expect(TobeyMcGuire.studio).toBe("Sony");
    });

    test("Testing method getInfo()", () => {
        const TobeyMcGuire = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
        expect(TobeyMcGuire.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio");;
    });
});