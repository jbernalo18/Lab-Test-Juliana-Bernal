/*## Tarea 2: Pruebas para los módulos de usuario

**Archivos:** `./js/user/user.js` y `./js/user/user-controller.js`

**Instrucciones:**
1. Implementar **1 prueba** para la función `add()` que verifique un usuario que **no está** en la lista de usuarios.
2. Implementar **1 prueba** para la función `remove()` que verifique un usuario que **no está** en la lista de usuarios.
3. Implementar **2 pruebas unitarias** para la función `findByEmail()`.
4. Implementar **2 pruebas unitarias** para la función `findById()`.

**Pistas:**
- Investiga cómo funciona cada función leyendo el código fuente.
- Cada prueba debe verificar un caso diferente.
- Para los casos de "usuario que no está en la lista", piensa qué debería devolver la función (por ejemplo, `null`, `undefined` o `false`).
- Usa `expect().toBe()` para valores primitivos y `expect().toEqual()` para objetos o arrays.
 */


const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //test add user not in the list
  test('add user not in the list',()=>{
    let user = new User(1238, "Pluto", "pluto@generation.org");
    userController.add(user);
    expect(userController.users).toContain(user);
  });

  //test remove user not in the list
  test('test remove user not in the list',()=>{
    let user = new User(1239, "Laura", "laura@generation.org")
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });








  //test find email
  test('find email to user',()=>{
    let user = new User(1235, "Juliana", "juliana@generation.org")
    userController.add(user);
    const resultado = userController.findByEmail("juliana@generation.org");
    expect(resultado).toEqual(user);
  });


  test('find email to user',()=>{
    let user = new User(1236,"Camila", "camila@generation.org");
    userController.add(user);
    const resultado = userController.findByEmail(user.email)
    expect(resultado).toEqual(user);
  });


  //test find id
  test('find Id to user',()=>{
    let user = new User(1235, "Juliana", "juliana@generation.org");
    userController.add(user);
    const resultado = userController.findById(user.id);
    expect(resultado).toEqual(user);
  });

  test('find Id to user',()=>{
    let user = new User(1236,"Camila", "camila@generation.org");
    userController.add(user);
    const resultado = userController.findById(1236);
    expect(resultado.id).toBe(1236);
  });


