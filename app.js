// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
var patty = document.getElementById("patty");
var cheese = document.getElementById("cheese")
var tomato  = document.getElementById("tomato")  
var onion = document.getElementById("onion")
var lettuce = document.getElementById("lettuce")    
var btnPatty = document.querySelector(".btn-patty")
var btncheese = document.querySelector(".btn-cheese")
var btntomato = document.querySelector(".btn-tomatoes")
var btnonion = document.querySelector(".btn-onions")
var btnlettuce = document.querySelector(".btn-lettuce")
var items = document.getElementsByClassName("items")
var cost1 = document.getElementsByClassName("price-details")[0]
var cost = 0

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}


  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
function renderCheese() {
  var cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}



  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  function renderTomatoes() {
    var tomato = document.querySelector("#tomato");
    if (state.Tomatoes) {
      tomato.style.display = "inherit";
    } else {
      tomato.style.display = "none";
    }
  }



function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  var onion = document.querySelector("#onion");
    if (state.Onions) {
      onion.style.display = "inherit";
    } else {
      onion.style.display = "none";
    }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  var lettuce = document.querySelector("#lettuce");
    if (state.Lettuce) {
      lettuce.style.display = "inherit";
    } else {
      lettuce.style.display = "none";
    }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  if (state.Patty) {
    btnPatty.classList.add("active")
  } else {
    btnPatty.classList.remove("active")
  }
  if (state.Cheese) {
    btncheese.classList.add("active")
  } else {
    btncheese.classList.remove("active")
  }
  if (state.Tomatoes) {
    btntomato.classList.add("active")
  } else {
    btntomato.classList.remove("active")
  }
  if (state.Onions) {
    btnonion.classList.add("active")
  } else {
    btnonion.classList.remove("active")
  }
  if (state.Lettuce) {
    btnlettuce.classList.add("active")
  } else {
    btnlettuce.classList.remove("active")
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  if (state.Patty) {
    items[0].textContent="Patty"
  } else {
    items[0].textContent=""
  }
  if (state.Cheese) {
    items[1].textContent="Cheese"
  } else {
    items[1].textContent=""
  }
  if (state.Tomatoes) {
    items[2].textContent="Tomatoes"
  } else {
    items[2].textContent=""
  }
  if (state.Onions) {
    items[3].textContent="Onions"
  } else {
    items[3].textContent=""
  }
  if (state.Lettuce) {
    items[4].textContent="Lettuce"
  } else {
    items[4].textContent=""
  }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  cost=0
  if (state.Patty) {
    cost+=80
  }
  if (state.Cheese) {
    cost+=70
  }
  if (state.Tomatoes) {
    cost+=20
  }
  if (state.Onions) {
    cost+=15
  }
  if (state.Lettuce) {
    cost+=10
  }
  cost1.textContent=`INR ${cost+20}`
}
