// write your code here
let number = 1;
let arr = [];
let itemsContainer = document.querySelector(".items-container");
let showAllBadge = document.querySelector(".showAll-badge");
let showAll = document.querySelector(".show-all");
let filterItem = document.querySelectorAll(".filter-perent");
let bikesFilters = document.querySelectorAll(".bikes");
let greyBadge = document.querySelectorAll(".badge-grey");
let brandBikes = document.querySelectorAll(".brandBikes");

function createCard(product) {
  let col4 = document.createElement("div");
  col4.classList.add("col-4", "mb-5");
  let divCard = document.createElement("div");
  divCard.classList.add("card", "h-100");
  let image = document.createElement("img");
  image.setAttribute("src", `./img/${number}.png`);
  image.classList.add("card-image-top", "bike-image", "h-100", "p-5");
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let p1 = document.createElement("p");
  p1.classList.add("card-title", "brand-bike-name", "m-0", "p-0");
  p1.textContent = product.name;

  let p2 = document.createElement("p");
  p2.classList.add("card-text", "price", "m-0", "p-0");
  p2.textContent = product.price;
  itemsContainer.appendChild(col4);
  col4.appendChild(divCard);
  divCard.appendChild(image);
  divCard.appendChild(cardBody);
  cardBody.appendChild(p1);
  cardBody.appendChild(p2);

  number++;
  if (number === 20) {
    number = 1;
  }
}

const response = fetch("https://challenges.brainster.tech/ajax_data/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const products = data.products;

    for (i = 0; i < products.length; i++) {
      arr.push(products[i].brand);
      arr.push(products[i].gender);
    }

    const brandFilters = document.querySelectorAll(".brandBikes");
    function countingNames() {
      const counts = {};

      arr.forEach((brand) => {
        counts[brand] = (counts[brand] || 0) + 1;
      });

      const countArr = Object.keys(counts);

      brandBikes.forEach((name) => {
        countArr.forEach((e, i) => {
          if (name.innerText.toUpperCase() === countArr[i]) {
            name.firstElementChild.innerText = counts[e];
          }
        });
      });
    }
    countingNames();

    products.forEach((product) => {
      arr.push(product.brand);
      createCard(product);
    });
    showAll.addEventListener("click", function () {
      itemsContainer.innerHTML = "";
      products.forEach((product) => {
        createCard(product);
      });
    });

    // filtering
    showAllBadge.textContent = products.length;

    filterItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        
        e.preventDefault();
    
        itemsContainer.innerHTML = "";
       

        const targetText = e.target.firstChild.data.toUpperCase();
      
        products.forEach((product) => {
          if (product.gender === targetText) {
            createCard(product);
          } else if (product.brand === targetText) {
            arr.push(product);

            createCard(product);
          }
        });
      });
      showAllBadge.textContent = products.length;
      showAllBadge.addEventListener("click", function () {
        itemsContainer.innerHTML = "";
        createCard(product);
      });
    });
  });
