var chai = require('chai');
var assert = chai.assert;
var homebanking = require('../homebanking');

describe('Testing assert function: ', function() {
    describe('Check addCash Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         result = homebanking.addCash(100);
         assert.equal(result, 3000);
      });
    });
  })

  describe('Testing assert function: ', function() {
    describe('Check subtractCash Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         result = homebanking.subtractCash(100);
         assert.equal(result, 2900);
      });
    });
  })

  describe('Testing assert function: ', function() {
    describe('Check limitExtraction Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         response = homebanking.limitExtraction(20000);
         assert.equal(response, "El límite de extracción se actualizó correctamente: 20000");
      });
    });
  })

  describe('Testing assert function: ', function() {
    describe('Check limitExtraction Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         response = homebanking.limitExtraction(0);
         assert.equal(response, "El monto ingresado no es válido.");
      });
    });
  })

  describe('Testing assert function: ', function() {
    describe('Check extracCash Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         response = homebanking.extracCash(100);
         assert.equal(response, "El saldo actual es: 2800");
      });
    });
  })

  describe('Testing assert function: ', function() {
    describe('Check depositCash Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         response = homebanking.depositCash(100);
         assert.equal(response, "Depositaste: 100 Tu saldo actual es: 3000" );
      });
    });
  })