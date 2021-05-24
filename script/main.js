const menu = [
    {
      id: 1,
      title: "BlackForest Cake",
      category: "Cake",
      price: 50,
      img: "images/blackForest1.jpg",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda?',
    },
    {
        id: 3,
        title: "Coffee Cake",
        category: "Cake",
        price: 15,
        img: "images/coffeeCake.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
     },
    {
        id: 4,
        title: "Carrot Cake",
        category: "Cake",
        price: 50,
        img: "images/carrotCake1.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 5,
        title: "Carrot Cake Slice",
        category: "Cake",
        price: 15,
        img: "images/carrotCake.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 6,
        title: "Orange Cake",
        category: "Cake",
        price: 50,
        img: "images/orangeCake2.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 7,
        title: "Birthday Cake",
        category: "Party-Cakes",
        price: 70,
        img: "images/birthday.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 8,
        title: "Baby Shower",
        category: "Party-Cakes",
        price: 100,
        img: "images/babyShower.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 9,
        title: "Vanilla cupcake",
        category: "CupCakes",
        price: 15,
        img: "images/Themed.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 10,
        title: "Chocolate Cupcake",
        category: "CupCakes",
        price: 15,
        img: "images/cupCake.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },

    {
        id: 11,
        title: 'Christmas CupCakes',
        category:"CupCakes",
        price: 15,
        img: "images/christmasThemed.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },

    {
        id: 12,
        title: "Poppy Seed Muffin",
        category: "Muffins",
        price: 15,
        img: "images/muffnCar.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },

    {
        id: 13,
        title: "Cinnamon muffin",
        category: "Muffins",
        price: 15,
        img: "images/cinnamon.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },

    {
        id: 14,
        title: "Sugar Coated Doughnut",
        category: "Doughnut",
        price: 15,
        img: "images/sugarDoughnut.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 15,
        title: "Traditional Doughnut",
        category: "Doughnut",
        price: 15,
        img: "images/traditionaldoughnut.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
    {
        id: 16,
        title: "Caramel Doughnut",
        category: "Doughnut",
        price: 15,
        img: "images/donutCaramel.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus unde, exercitationem eum voluptate dolor possimus aut impedit quae assumenda? `,
    },
  ];

const sectionDiv = document.querySelector(".sectionDiv");
const menuBtnDiv = document.querySelector(".menuBtnDiv");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayButtons();
});

function displayMenu(menuItems) {
  let displayMenu = menuItems.map(function(item) {
    // console.log(item);
    return `<article class="menuItem">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="itemInfo">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="itemDescription">
              ${item.desc}
            </p>
            <div class="cartbtn"><button type="button" class="addToCart">Add to Cart</button></div>
          </div>
         
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionDiv.innerHTML = displayMenu;
}
function displayButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      
      return values;
      
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type=" button" class="btn filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

    menuBtnDiv.innerHTML = categoryBtns;
  const filterBtns =  menuBtnDiv.querySelectorAll(".filter-btn");
  //console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
       // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          console.log(menuItem);
          return menuItem;
          
        }
      });
      if (category === "all") {
        displayMenu(menu);
      } else {
       
        displayMenu(menuCategory);
      }
    });
  });
}

/* Function for showing the cart */
(function (){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');
  cartInfo.addEventListener('click',function(){
    cart.classList.toggle('show-cart');
  })
})();
