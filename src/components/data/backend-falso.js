const baseDeDatos = [
    {
        id:1,
        nombre:"Zapatillas Nike Dunk Low Retro",
        marca: "Nike",
        precio: 239.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbd8bb332/products/NIFQ8249-100/NIFQ8249-100-1.JPG"
    },
    {
        id:2,
        nombre:"Zapatillas adidas Ozmillen",
        marca: "Adidas",
        precio: 160.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0457b4f5/products/ADIF9597/ADIF9597-1.JPG",
    },
    {
        id:3,
        nombre:"Zapatillas Puma Slipstream Reclaim ",
        marca: "Puma",
        precio: 179.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw37c07f2d/products/PU398165-01/PU398165-01-1.JPG"
    },
    {
        id:4,
        nombre:"Zapatillas Air Jordan 4 Retro",
        marca: "Jordan",
        precio: 369.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw626b0c60/products/NIFV5029-141/NIFV5029-141-1.JPG"
    },
    {
        id:5,
        nombre:"Zapatillas adidas Samba OG",
        marca: "Adidas",
        precio:183.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa7cb705c/products/ADIH4879/ADIH4879-1.JPG",
    },
    {
        id:6,
        nombre:"Zapatillas Nike Air Max Pulse",
        marca: "Nike",
        precio: 269.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8e8c3277/products/NIDR0453-005/NIDR0453-005-1.JPG"
    },
    {
        id:7,
        nombre:"Zapatillas Jordan 1 Low",
        marca: "Nike",
        precio: 209.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa823956c/products/NI553558-161/NI553558-161-1.JPG"
    },
    {
        id:8,
        nombre:"Zapatillas adidas Campus 00s",
        marca: "Adidas",
        precio: 171.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5454ff5e/products/ADJH8998/ADJH8998-1.JPG"
    },
    {
        id:9,
        nombre:"Zapatillas adidas Campus 00s",
        marca: "Adidas",
        precio: 171.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9f29b22d/products/ADH03471/ADH03471-1.JPG"
    },
    {
        id:10,
        nombre:"Zapatillas Jordan Air 1 Low Se Craft",
        marca: "Nike",
        precio: 219.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6d48ba7d/products/NIFD6819-300/NIFD6819-300-1.JPG"
    },
    {
        id:11,
        nombre:"Zapatillas adidas Superstar Rm",
        marca: "Adidas",
        precio: 171.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6a526747/products/ADID7493/ADID7493-1.JPG"
    },
    {
        id:12,
        nombre:"Zapatillas adidas Nizza Hi",
        marca: "Adidas",
        precio: 89.599,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw70327740/products/ADHQ8531/ADHQ8531-1.JPG"
    },
    {
        id:13,
        nombre:"Zapatillas adidas Adi2000",
        marca: "Adidas",
        precio: 189.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5dd9dc2e/products/ADIF8832/ADIF8832-1.JPG"
    },
    {
        id:14,
        nombre:"Zapatillas Nike Air Max Plus Drift",
        marca: "Nike",
        precio: 319.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw99eeeb22/products/NIFD4290-004/NIFD4290-004-1.JPG"
    },
    {
        id:15,
        nombre:"Zapatillas Nike Dunk Low Retro",
        marca: "Nike",
        precio: 239.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6d8e772f/products/NIHF2874-001/NIHF2874-001-1.JPG"
    },
    {
        id:16,
        nombre:"Zapatillas adidas SL 72 RS",
        marca: "Adidas",
        precio: 171.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw54eb3a57/products/ADIH4823/ADIH4823-1.JPG"
    },
    {
        id:17,
        nombre:"Zapatillas Jordan Spizike Low",
        marca: "Jordan",
        precio: 289.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa7c7c25f/products/NIFQ1759-100/NIFQ1759-100-1.JPG"
    },
    {
        id:18,
        nombre:"Zapatillas adidas Yeezy Boost 350",
        marca: "Adidas",
        precio: 299.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw80e2f6fd/products/ADHQ6316/ADHQ6316-1.JPG"
    },
    {
        id:19,
        nombre:"Zapatillas Fila Uproot",
        marca: "Fila",
        precio: 139.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw874917c3/products/FI1BM00643-161/FI1BM00643-161-1.JPG"
    },
    {
        id:20,
        nombre:"Zapatillas Puma Suede Classic",
        marca: "Puma",
        precio: 119.999,
        img:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf951059f/products/PU388981-99/PU388981-99-1.JPG"
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