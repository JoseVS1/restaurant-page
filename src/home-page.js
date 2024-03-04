export function homePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Restaurant Name";

    const img = document.createElement("img");
    
    const p = document.createElement("p");
    p.textContent = "Restaurant description";
    
    content.append(h1, img, p);
}