import { products } from "./data.js";

const btnCart = document.getElementById("btnCart");
const cartEmpty = document.getElementById("cartEmpty");
const listCart = document.getElementById("listCart");
const totalCart = document.getElementById("totalCart");
const inputSearch = document.getElementById("inputFilter");
const btnSearch = document.getElementById("btnSearch");
let valueInput;
// get data backend
class Products {
  getproducts() {
    return products;
  }
}

// show data ui
class UI {
  //Show products
  static displayProducts(products) {
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

  //Add product to cart
  static addCartItem() {
    const btnAddCart = document.querySelectorAll(".by-now-btn");
    const arrayAddCartBtn = [...btnAddCart];
    let carts = Local.getCart() || [];

    arrayAddCartBtn.forEach((btn) => {
      const id = Number(btn.dataset.id);
      const checkBtn = carts.find((item) => item.id === id);
      if (checkBtn) {
        btn.innerHTML = "In Cart";
        btn.disabled = true;
      } else {
        btn.innerHTML = "Buy Now";
        btn.disabled = false;
      }
      btn.addEventListener("click", (e) => {
        e.target.innerHTML = "In Cart";
        e.target.disabled = true;

        const product = Local.getproduct(e.target.dataset.id);
        carts.push({ ...product, number: 1 });
        Local.setCart(carts);
        this.displayCart();
      });
    });
  }

  //Show the products in the shopping cart
  static displayCart() {
    const products = Local.getCart() || [];
    if (products.length === 0) {
      cartEmpty.classList.remove("hidden");
      cartEmpty.classList.add("flex");
      listCart.classList.add("hidden");

      return;
    }
    cartEmpty.classList.add("hidden");
    listCart.classList.remove("hidden");
    listCart.classList.add("flex");

    let html = "";
    products.forEach((item) => {
      html += `<div class="flex items-center justify-around my-2">
                        <div>
                          <img
                            src=${item.imageUrl}
                            class="md:w-28 sm:w-20 w-16"
                            alt="shoes"
                          />
                        </div>
                        <div class="flex flex-col items-start">
                          <p class="font-semibold text-lg">${item.title}</p>
                          <p class="font-medium">${item.price} $</p>
                        </div>
                        <div class="flex flex-col items-center">
                          <button data-up= ${item.id} class="changeNumber ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-green-500"
                              style="pointer-events: none;"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                              />
                            </svg>
                          </button>
                          <p class="number">${item.number}</p>
                          <button data-down= ${item.id} class="changeNumber ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-5 text-red-500"
                              style="pointer-events: none;"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </button>
                        </div>
                        <div>
                          <button class="btn btn-ghost btn-delete" data-delete= ${item.id}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="size-6 "
                              style="pointer-events: none;"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
        `;
      document.getElementById("listCart").innerHTML = html;
    });
  }

  //Remove the product from the shopping cart
  static eventDelete() {
    let dataItem = Local.getCart();
    if (!dataItem) return;
    const itemCart = document.querySelectorAll(".btn-delete");
    const arrItemCart = [...itemCart];
    arrItemCart.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (!dataItem) return;
        dataItem = dataItem.filter((data) => {
          return data.id !== Number(e.target.dataset.delete);
        });
        Local.setCart(dataItem);
        this.showTotal();
        this.displayCart();
        this.addCartItem();
        this.eventChangeNumber();
        this.eventDelete();
      });
    });
  }

  //Changing the number of products in the shopping cart
  static eventChangeNumber() {
    const elementNumber = document.querySelectorAll(".changeNumber");
    let dataItem = Local.getCart();
    elementNumber.forEach((item) => {
      item.addEventListener("click", (e) => {
        const typeOfOperation = Object.keys(e.target.dataset).join("");
        if (typeOfOperation === "up") {
          const newData = dataItem.map((item) => {
            if (item.id === Number(e.target.dataset.up)) {
              item.number += 1;
            }
            return item;
          });
          Local.setCart(newData);
        } else {
          const newData = dataItem.map((item) => {
            if (item.id === Number(e.target.dataset.down)) {
              if (item.number >= 2) {
                item.number -= 1;
              } else {
                alert("Error");
              }
            }
            return item;
          });
          Local.setCart(newData);
        }

        this.showTotal();
        this.displayCart();
        this.eventDelete();
        this.eventChangeNumber();
      });
    });
  }

  //Calculate the price of the products in the shopping cart
  static showTotal() {
    let productsCart = Local.getCart() || [];
    if (productsCart.length === 0) {
      return (totalCart.innerText = 0);
    }
    const total = productsCart.reduce((acc, item) => {
      return acc + item.price * item.number;
    }, 0);
    totalCart.innerText = total.toFixed(2);
  }
}

// local storage
class Local {
  static setlLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getproduct(id) {
    const data = JSON.parse(localStorage.getItem("products"));
    return data.find((item) => item.id === Number(id));
  }

  static setCart(data) {
    localStorage.setItem("carts", JSON.stringify(data));
  }

  static getCart() {
    const datas = JSON.parse(localStorage.getItem("carts"));
    return datas;
  }
}

class Filter {
  static searchInput(datas, value) {
    let dataFilter = datas;
    if (value) {
      dataFilter = datas.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      });
      UI.displayProducts(dataFilter);
    } else {
      alert("Please fill in the search amount");
      UI.displayProducts(dataFilter);
    }

    console.log(dataFilter);
  }
}

//When the page loads
document.addEventListener("DOMContentLoaded", () => {
  const product = new Products();
  const datas = product.getproducts();
  UI.displayProducts(datas);
  Local.setlLocalStorage(datas);
  UI.addCartItem();
  UI.displayCart();
});

//When he clicked on the shopping cart button
btnCart.addEventListener("click", () => {
  UI.showTotal();
  UI.eventDelete();
  UI.eventChangeNumber();
});

inputSearch.addEventListener("input", (e) => {
  valueInput = e.target.value;
  if (!valueInput) {
    const products = new Products();
    const datas = products.getproducts();
    UI.displayProducts(datas);
  }
});

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  const products = new Products();
  const datasSearch = products.getproducts();
  Filter.searchInput(datasSearch, valueInput);
  console.log(valueInput);
});
