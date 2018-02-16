//Esta es la forma en la que se importan las librerias, pero lo hacemos con require, no con (ES2015)
const expect = require('chai').expect;
const platzom = require('..').default; //Con .. le decimos que busque en una carpeta antes ya que esta en /dist/src/platzom.js

//Cuando ejecutemos el comando mocha podemos ejecutar estas funciones:
describe('Mi test platzom', function(){ //Describir los tests, qué es lo que tienen que hacer y qué es lo que tienen que devolver
   it('Si la palabra termina con "ar", se le quitan esos dos caracteres', function(){
      const translation = platzom("Programar");
      expect(translation).to.equal("Program");
   });
   it('Si la palabra inicia con z, se le añade "pe" al final', function(){
      const translation = platzom("Zorro");
      const translation2 = platzom("Zarpar");

      expect(translation).to.equal("Zorrope");
      expect(translation2).to.equal("Zarppe");
   });
   it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión de en medio.', function(){
      const translation = platzom("abecedario");
      expect(translation).to.equal("abece-dario");
   });
   it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra', function(){
      const translation = platzom("sometemos");
      expect(translation).to.equal("SoMeTeMoS");
   });
});
