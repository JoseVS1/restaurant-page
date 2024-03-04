export function aboutPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const h1 = document.createElement("h1");
    h1.textContent = "About";
    
    content.append(h1);
}