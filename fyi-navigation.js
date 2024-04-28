const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu"); 

// hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// document.querySelectorAll("nav-link").forEach(n => n.
//     addEventListener("click" , () => {
//     })
// )

// javascript has different types of elements
// each element has different properties based on their type

// these are the basic ones:
// 'a'  --> string
// 1  ---> integer / numbers
// true ---> boolean


// ['a', 1, true] ---> array
// [0, 1]


// {a: 'a'; b: 'b'} ---> object

// reveal text
const divsToClick = document.querySelectorAll(".hover-area")

divsToClick.forEach(div => div.addEventListener("click", () => {
    console.log(`inside div`)
    // getting the second child of the div 
    toggleElementVisibility(div.children[1])
}))


function toggleElementVisibility(element) {
    element.toggleAttribute('hidden')
}

