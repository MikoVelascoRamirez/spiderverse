describe("Unit Tests for spiderman class", () => {
    test("Create an spiderman object", () =>{
        //Código a utilizar
        //Busco instanciar un objeto con esta información.
        //¿Qué debo hacer para obtener dicho resultado?

        const TobeyMcGuire = new Spiderman("Spiderman original", 40, "Tobey Mc. Guire", 2, "Sony");

        //Valido que el código funcione como espero
        expect(TobeyMcGuire.name).toBe("Spiderman original");
        expect(TobeyMcGuire.age).toBe(46);
        expect(TobeyMcGuire.actor).toBe("Tobey Mc. Guire");
        expect(TobeyMcGuire.movies).toBe(4);
        expect(TobeyMcGuire.studio).toBe("Sony");
    });
});