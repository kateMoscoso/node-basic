const reverseString2 = (str) => {
    return new Promise( (resolve, reject) => {
        if(!str || str == ''){
            reject(new Error('no existe el texto'));
        }else{
            resolve(str.split("").reverse().join(""));
        }
    });
}

test('probando promesas', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH');
        });
});

test("Probar async/await", async () => {
    const string = await reverseString2("hola");
    expect(string).toBe("aloh");
  });
  
  afterEach(() => {
    console.log("Despues de cada prueba");
  });
  
  afterAll(() => {
    console.log("Despues de todas las pruebas");
  });
  
  beforeEach(() => {
    console.log("Antes de cada prueba");
  });
  
  beforeAll(() => {
    console.log("Antes de todas las pruebas");
  });