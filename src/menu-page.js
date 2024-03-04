export function menuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const beverages = ["Honey Tea", "Beary Tea"];
    const sides = ["Toast and Jam", "Fresh Fruit"];
    const mainDishes = ["Pancakes", "French Toast", "Beary Veggie Sandwich", "BLT"];

    const beveragesH2 = document.createElement("h2");
    beveragesH2.textContent = "Beverages";
    const sidesH2 = document.createElement("h2");
    sidesH2.textContent = "Sides";
    const mainDishesH2 = document.createElement("h2");
    mainDishesH2.textContent = "Main Dishes";

    const beveragesList = document.createElement("ul");
    const sidesList = document.createElement("ul");
    const mainDishesList = document.createElement("ul");

    beverages.forEach(beverage => {
        const li = document.createElement("li");
        li.textContent = beverage;

        beveragesList.appendChild(li);
    })

    sides.forEach(side => {
        const li = document.createElement("li");
        li.textContent = side;

        sidesList.appendChild(li);
    })

    mainDishes.forEach(mainDish => {
        const li = document.createElement("li");
        li.textContent = mainDish;

        mainDishesList.appendChild(li);
    })

    content.append(beveragesH2, beveragesList, sidesH2, sidesList, mainDishesH2, mainDishesList);    
}