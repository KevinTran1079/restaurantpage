const createAbout = () => {
    const content = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");

    content.appendChild(menuContainer);

    const foodHeader = document.createElement("h2");
    foodHeader.classList.add("foodHeader");
    foodHeader.textContent = "Food and Drink";
    menuContainer.appendChild(foodHeader);

    const drinkMenuContainer = document.createElement("div");
    drinkMenuContainer.classList.add("drinkContainer");
    menuContainer.appendChild(drinkMenuContainer);

    const drinks = document.createElement("div");
    drinks.textContent = "Drinks";
    drinks.classList.add("drinks");

    const eveningSnacks = document.createElement("div");
    eveningSnacks.textContent = "Evening Snacks";
    eveningSnacks.classList.add("eveningSnacks");

    const eveningDrinks = document.createElement("div");
    eveningDrinks.textContent = "Evening Drinks"
    eveningDrinks.classList.add("eveningDrinks");


    drinkMenuContainer.appendChild(drinks);
    drinkMenuContainer.appendChild(eveningSnacks);
    drinkMenuContainer.appendChild(eveningDrinks);

    const drinkList = document.createElement("ul");
    drinkList.classList.add("drinkList");

    const eveningSnackList = document.createElement("ul");
    eveningSnackList.classList.add("eveningSnackList");

    const eveningDrinksList = document.createElement("ul");
    eveningDrinksList.classList.add("eveningDrinksList");
    
    const menuItems = [
        { name: "Drip Coffee", price: "$3.50" },
        { name: "Cold Brew", price: "$4.00" },
        { name: "Espresso", price: "$2.50" },
        { name: "Americano", price: "$3.00" },
        { name: "Latte", price: "$4.50" },
        { name: "Cappuccino", price: "$4.00" },
        { name: "Mocha", price: "$5.25"},
        { name: "Hot Chocolate", price: "$4"},
        { name: "Tea", price: "$3"},
        { name: "London Fog", price: "$4.75"},
        { name: "Matcha Latte", price: "$4.75"},
        { name: "Chai Latte", price: "$4.75"},
        { name: "Kombucha", price: "$6"},
    ];

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("menu-item");
        
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("item-name");
        nameSpan.textContent = item.name;
        
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("item-price");
        priceSpan.textContent = item.price;
        
        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        drinkList.appendChild(li);
    });

    drinks.appendChild(drinkList);

    const eveningSnackPriceList = [
        { name: "sweet & spicy roasted nuts", price: "$5" },
        { name: "HERBY marinated olives", price: "$10" },
        { name: "honey whipped goat cheese", price: "$12" },
        { name: "roasted tandoori chickpeas", price: "$12" },
        { name: "pulled pork sandwich", price: "$12" },
        { name: "DESSERTS (selection changes)", price: "$7" }
    ]

    eveningSnackPriceList.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("menu-item");
        
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("item-name");
        nameSpan.textContent = item.name;
        
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("item-price");
        priceSpan.textContent = item.price;
        
        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        eveningSnackList.appendChild(li);
    });

    eveningSnacks.appendChild(eveningSnackList);

    const eveningDrinksPriceList = [
        { name: "red wine 6oz", price: "$11.50" },
        { name: "white wine 6oz", price: "$11.50" },
        { name: "cocktails", price: "$12.50" },
        { name: "beer", price: "$7.50" },
        { name: "bottle of wine + corkage", price: "$10" }
    ]

        eveningSnackPriceList.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("menu-item");
        
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("item-name");
        nameSpan.textContent = item.name;
        
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("item-price");
        priceSpan.textContent = item.price;
        
        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        eveningDrinksList.appendChild(li);
    });

    eveningDrinks.appendChild(eveningDrinksList);

};

export default createAbout;
