// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const list = document.querySelector(".js-list");

// *******Варіант-1******* \\

// function createMarkup(arr) {
//   const markup = arr.map(({ id, model, type, price, img }) => {
//     const liEl = document.createElement("li");
//     const h2El = document.createElement("h2");
//     const h3El = document.createElement("h3");
//     const spanEl = document.createElement("span");
//     const imgEl = document.createElement("img");

//     liEl.dataset.carId = id;

//     h2El.textContent = model;
//     h3El.textContent = type;
//     spanEl.textContent = price;

//     imgEl.src = img;
//     imgEl.alt = type;
//     imgEl.width = 300;

//     liEl.append(imgEl, h2El, h3El, spanEl);
//     return liEl;
//   });

//   list.append(...markup);
// }

// createMarkup(cars);

//*******Варіант-2******* \\

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, model, type, price, img }) =>
        `<li data-car-id="${id}">
      <img src="${img}" alt="${type}" width="300">
      <h2>${model}</h2>
      <h3>${type}</h3>
      <span>${price}</span>
      </li>`
    )
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
}

createMarkup(cars);

//! ==============================

// const container = document.querySelector("#categories");
// console.log("Кількість li.item = ", container.children.length); // Кількість li.item =  3
// console.dir("Кількість li.item = ", container.children.length); // Кількість li.item =

// console.log(typeof container.children.length);
