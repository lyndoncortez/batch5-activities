let store = {
    name: "Regional Book Store",
    inventory: undefined,
    earnings: undefined
  };
  
  let book = {
    title: undefined,
    quantity: undefined,
    value: undefined
  };
  
  function addBook(title, quantity, value) {
    book = {};
    book.title = title;
    book.quantity = quantity;
    book.value = value;
  
    let bookArray = [];
  
    if (store.inventory === undefined) {
      store.inventory = [book];
    } else {
      for (let i = 0; i < store.inventory.length; i++) {
        bookArray.push(store.inventory[i].title);
      }
      if (bookArray.includes(book.title)) {
        console.log("Book is already in the Inventory");
      } else {
        store.inventory.push(book);
      }
    }
  }
  
  function restockBook(title, quantity) {
    let bookArray = [];
    for (let i = 0; i < store.inventory.length; i++) {
      if (store.inventory[i].title === title) {
        store.inventory[i].quantity += quantity;
        console.log(`Sucessfully added stocks of ${title}!`);
      }
      bookArray.push(store.inventory[i].title);
    }
  
    if (!bookArray.includes(title)) {
      console.log(
        "You dont have that Book in your Inventory, Please add it first!"
      );
    }
  }
  
  function sellBook(title, quantity) {
    let bookArray = [];
    for (let i = 0; i < store.inventory.length; i++) {
      if (store.inventory[i].title === title) {
        if (store.inventory[i].quantity < quantity) {
          console.log(`only ${store.inventory[i].quantity} stocks left!`);
        } else {
          store.inventory[i].quantity -= quantity;
          store.inventory[i].value += quantity * store.inventory[i].value;
          console.log("Sucessful Transaction!");
        }
      }
      bookArray.push(store.inventory[i].title);
    }
  
    if (!bookArray.includes(title)) {
      console.log(`${title} out of stock!`);
    }
  }
  
  function totalEarnings() {
    let totalEarnings = [];
    for (let i = 0; i < store.inventory.length; i++) {
      totalEarnings.push(store.inventory[i].value);
    }
  
    store.earnings = totalEarnings.reduce(function (accumulator, currentNumber) {
      return accumulator + currentNumber;
    });
  
    console.log(`${store.name} earns a total of P${store.earnings}`);
  }
  
  function listInventory() {
    for (let i = 0; i < store.inventory.length; i++) {
      console.log(
        `Title: ${store.inventory[i].title}, Quantity: ${store.inventory[i].quantity}, Value: ${store.inventory[i].value} `
      );
    }
  }
  
  // addBook("hello", 1, 20);
  // addBook("Hello World", 1, 1);
  // restockBook("hello", 10);
  // sellBook("hello", 5);
  // totalEarnings();
  // listInventory();
  // console.log(store);
  