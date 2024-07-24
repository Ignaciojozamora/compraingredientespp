const recetas = [
  {
    id: 1,
    title: "Pizza",
    detail: "Deliciosa pizza casera con ingredientes frescos.",
    porciones: 1,
    imgurl: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRoeUqD7lgiXavof_C8DW2QeI-BHIzGPLKRPCWinurLGGMBT7GSml0le6bQro8yWjAa",
    ingredientes: [
      { nombre: "harina", cantidad: 300, unidad: "gramos" },
      { nombre: "Salsa de tomate", cantidad: 1, unidad: "caja" },
      { nombre: "Queso mozzarella", cantidad: 200, unidad: "gramos" },
      { nombre: "toppings", cantidad: 0, unidad: "al gusto" }
    ]
  },
  {
    id: 2,
    title: "Tarta de zapallitos",
    detail: "Tarta casera de zapallitos con un toque de cebolla y queso.",
    porciones: 1,
    imgurl: "https://www.lasaltena.com.ar/wp-content/uploads/2020/03/Tarta-de-zapallitos_banner-400x196.png.webp",
    ingredientes: [
      { nombre: "Zapallitos", cantidad: 1, unidad: "kilos" },
      { nombre: "Cebolla", cantidad: 1, unidad: "unidad" },
      { nombre: "Huevos", cantidad: 2, unidad: "unidades" },
      { nombre: "Queso", cantidad: 100, unidad: "gramos" },
      { nombre: "Masa para tarta", cantidad: 1, unidad: "unidad" }
    ]
  },
  {
    id: 3,
    title: "Fajitas",
    detail: "Coloridas fajitas con pollo, pimientos y cebolla, servidas con tortillas calientes.",
    porciones: 8,
    imgurl: "https://www.paulinacocina.net/wp-content/uploads/2023/07/fajitas-de-pollo-y-verduras-800x450.jpg",
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 200, unidad: "gramos" },
      { nombre: "Pimientos (varios colores)", cantidad: 200, unidad: "gramos" },
      { nombre: "Cebolla", cantidad: 1, unidad: "unidad" },
      { nombre: "Tortillas de harina", cantidad: 8, unidad: "unidades" },
      { nombre: "Salsas", cantidad: 0, unidad: "al gusto" }
    ]
  },
  {
    id: 4,
    title: "Sándwich",
    detail: "Sándwich clásico con fiambre, queso y rodajas de tomate.",
    porciones: 1,
    imgurl: "https://www.paulinacocina.net/wp-content/uploads/2022/12/recetario-de-sandwiches-800x534.jpg",
    ingredientes: [
      { nombre: "Rebanadas de pan", cantidad: 2, unidad: "unidades" },
      { nombre: "Fiambre en feta (por ejemplo, pavo, jamón, roast beef)", cantidad: 0, unidad: "gramos" },
      { nombre: "Queso en lonchas (por ejemplo, cheddar, suizo, provolone)", cantidad: 0, unidad: "gramos" },
      { nombre: "Rodajas de tomate", cantidad: 4, unidad: "rodajas" }
    ]
  },
  {
    id: 5,
    title: "Milanesas con ensalada de tomate",
    detail: "Milanesas de carne con una fresca ensalada de tomate y cebolla morada.",
    porciones: 1,
    imgurl: "https://img-global.cpcdn.com/recipes/2aff3863bdcc6c30/680x482cq70/milanesas-de-pollo-al-horno-foto-principal.webp",
    ingredientes: [
      { nombre: "Milanesas", cantidad: 1, unidad: "unidades" },
      { nombre: "Huevos", cantidad: 2, unidad: "unidades" },
      { nombre: "Tomates", cantidad: 200, unidad: "gramos" },
      { nombre: "Cebolla morada", cantidad: 1, unidad: "unidad" }
    ]
  }
];

    
    export default recetas;

/*     {
      id: 1,
      category: "smartphones",
      stock: 2,
      title: "iPhone 9",
      price: 649,
      imgurl: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      detail: "An apple mobile which is nothing like apple",
      discount: 50,
    }, */