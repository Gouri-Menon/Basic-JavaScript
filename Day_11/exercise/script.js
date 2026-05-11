const btn = document.querySelector("#my-btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});

// You can attach multiple listeners — all run
btn.addEventListener("click", () => {
  console.log("Second handler also fires");
});

btn.addEventListener("click", (e) => {
  console.log(e.type);            // "click"
  console.log(e.target);          // the <button> element
  console.log(e.target.textContent);   // its text
  console.log(e.clientX, e.clientY);   // mouse coordinates
});

const input = document.querySelector("#name-input");
input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

document.addEventListener("keydown", (e) => {
  console.log("Pressed:", e.key);   // "a", "Enter", "ArrowUp"
});

// WITHOUT delegation — one listener per item, repeated work
document.querySelectorAll("#todo-list li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});


