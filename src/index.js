import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  const price = faker.commerce.price();
  products += `<div><strong>${name}</strong> ($${price})</div>`;
}

document.querySelector(`#my-products`).innerHTML = products;
