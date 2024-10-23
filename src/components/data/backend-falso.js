const baseDeDatos = [
    {
        id:1,
        nombre:"adidas",
        tamaño: 42,
        precio: 8000,
    },
    {
        id:2,
        nombre:"nike",
        tamaño: 43,
        precio: 2000,
    },
    {
        id:3,
        nombre:"puma",
        tamaño: 41,
        precio: 3000,
    },

]


export const getProducts = () => {
    return new Promise((res, reject) => {
        setTimeout(() => {
          res(baseDeDatos);
          reject("error")
        }, 0);
      });
}