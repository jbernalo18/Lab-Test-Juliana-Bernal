
/* ## Tarea 1: Pruebas para el módulo `calculator.js`

**Archivo:** `./js/calculator/calculator.js`

**Instrucciones:**

1. Implementar **2 pruebas unitarias** para la función `divide()`.
2. Implementar **2 pruebas unitarias** para la función `multiply()`.

**Pistas:**

- Cada prueba debe verificar un caso diferente (por ejemplo, números positivos, negativos, decimales).
- Usa el formato de Jest: `test('nombre descriptivo', () => { expect(...).toBe(...); })`.
- El nombre de cada prueba debe ser descriptivo: incluir la función, los parámetros y el resultado esperado.
*/

const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}


//refactorizacion 
function divide(a, b){
  let resultado;
  if (b===0){
    resultado = "Error, no se puede dividir por 0"
  }else{
    resultado = a/b;
  }
   return resultado;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};