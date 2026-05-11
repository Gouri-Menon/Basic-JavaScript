/*Add a <p> to a page and change its text three times — once with textContent, once with innerHTML adding a <strong> tag, then back to plain text.*/

const para = document.querySelector('p');

para.textContent = "This is the first change to the paragraph.";
para.innerHTML = "This para has a <strong>strong</strong> tag now.";
para.textContent = "This is the final change to the paragraph.";

//Build a list of 5 items in HTML. Use a JS loop to add the class even to even-indexed items.

const fruits = document.querySelectorAll('li');

fruits.forEach((fruit, index) => {
    if(index % 2 ===0){
        fruit.classList.add("even");
        console.log("even class added");
    }
})
