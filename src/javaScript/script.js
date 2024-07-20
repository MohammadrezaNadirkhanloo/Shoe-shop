import { products } from "./data.js";

// get data
class Products {
  getproducts() {
    return products;
  }
}

// show data ui
class UI {
  displayProducts(products) {
    let html = "";
    products.forEach((element) => {
      html += `
                  <div class="card bg-base-100 shadow-xl">
            <figure class="bg-gray-200 h-1/2">
              <img src=${element.imageUrl} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${element.title}</h2>
              <p>HAVIT HV-G92 Gamepad</p>
              <p><span>${element.price}</span> $</p>
              <div class="card-actions justify-between items-center">
                <div>
                  <div class="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-${element.id}"
                      class="mask mask-star-2 bg-orange-400"
                      ${element.score === 1 ? `checked="checked"` : ""}
                      
                    />
                    <input
                      type="radio"
                      name="rating-${element.id}"
                      class="mask mask-star-2 bg-orange-400"
                      ${element.score === 2 ? `checked="checked"` : ""}
                    />
                    <input
                      type="radio"
                      name="rating-${element.id}"
                      class="mask mask-star-2 bg-orange-400"
                      ${element.score === 3 ? `checked="checked"` : ""}
                    />
                    <input
                      type="radio"
                      name="rating-${element.id}"
                      class="mask mask-star-2 bg-orange-400"
                      ${element.score === 4 ? `checked="checked"` : ""}
                    />
                    <input
                      type="radio"
                      name="rating-${element.id}"
                      class="mask mask-star-2 bg-orange-400"
                      ${element.score === 5 ? `checked="checked"` : ""}
                    />
                  </div>
                </div>
                <button
                data-id = ${element.id}
                  class="btn bg-blue text-white hover:bg-blue-light hover:text-gray-100"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        `;
      document.getElementById("box_item").innerHTML = html;
    });
  }
}

// local storage
class Local {}

document.addEventListener("DOMContentLoaded", () => {
  const product = new Products();
  const datas = product.getproducts();
  const showItem = new UI();
  showItem.displayProducts(datas);
  console.log(datas);
});
