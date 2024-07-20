import { products } from "./data.js";

let cards = [
  {
    id: 2,
    title: "Nike",
    price: 22.49,
    imageUrl: "./assets/img/Frame(1).png",
    score: 2,
  },
];

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
                  class="by-now-btn btn bg-blue text-white hover:bg-blue-light hover:text-gray-100"
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

  addCardBtn() {
    const btnAddCard = document.querySelectorAll(".by-now-btn");
    const arrayAddCardBtn = [...btnAddCard];

    arrayAddCardBtn.forEach((btn) => {
      const id = Number(btn.dataset.id);
      const checkBtn = cards.find((item) => item.id === id);
      if (checkBtn) {
        btn.innerHTML = "In Card";
        btn.disabled = true;
      }
      btn.addEventListener("click", (e) => {
        console.log(e.target.dataset.id);
      });
    });
  }
}

// local storage
class Local {
  static setlLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const product = new Products();
  const datas = product.getproducts();
  const showItem = new UI();
  showItem.displayProducts(datas);
  Local.setlLocalStorage(datas);
  showItem.addCardBtn();
});
