import { homePage } from "./home-page";
import { menuPage } from "./menu-page";
import { aboutPage } from "./about-page";

homePage();

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    let page;

    switch(button.textContent) {
        case "Home":
            page = homePage;
            break;
        case "Menu":
            page = menuPage;
            break;
        case "About":
            page = aboutPage;
            break;
        default:
            page = homePage;
            break;
    }

    button.addEventListener("click", () => {
        page();
    })

})