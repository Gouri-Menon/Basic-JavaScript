/*Task 1 Select and Change Text
Use document.querySelector to grab the #title element.
Change its textContent to "Hello, <your name>!".
Change its inline style.color to "crimson".
Bonus: also change its style.fontFamily to "Georgia, serif".*/

const title = document.querySelector("#title");

// Direct style — quick and dirty
title.textContent = "Hello, Gouri!";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";  

/*Task 2 Toggle Dark Theme Class
Grab the #theme-btn button (we'll wire it up properly tomorrow — for now, run the toggle once at the bottom of your script).
Use document.body.classList.toggle("dark") to add/remove the dark class on the body.
Run it twice in your script and observe the page flip.
Bonus: log whether the class is currently present using contains.*/

const theme = document.querySelector("#theme-btn");
document.body.classList.toggle("dark");
document.body.classList.toggle("dark");
console.log(document.body.classList.contains("dark"));
