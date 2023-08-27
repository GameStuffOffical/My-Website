// x = quereySelectorAll(div)

// function randInArray() {return arr[(Math.floor(Math.random() * arr.length))]}
// var element = randInArray(x)
// i = 10
// while (i >= 0){
//     const node = document.createElement(div)
//     element.appendChild(node)
//     i -= 1
// }


// Adds a div to a random div and inserts the specefied content.
function addDiv(input = "") {
    // Get all the div elements
    var divElements = document.getElementsByTagName("div");

    // Generate a random index
    var randomIndex = Math.floor(Math.random() * divElements.length);

    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.textContent = input;

    // Append the new div element to the randomly selected div
    divElements[randomIndex].appendChild(newDiv);
}

function deleteDivs() {
    // Get all elements with display set to none
    const elementsToDelete = document.querySelectorAll('[style*="display: none;"]')
    
    // Loop through each element and remove them
    elementsToDelete.forEach(element => {
      element.remove()
    })
}


// Repeats addDiv an amount of times
function addDivs(iterations = 1) {
    for (let i = 0; i < iterations; i++) {
        addDiv()
    }
}

// addDivs(1000)

// // Skips animation
// for (let i = 0; i < 100; i++) {
//     addDiv()
// }

function animateLoop(){
    addDivs()
    deleteDivs()
}

// Animates
setInterval(animateLoop,0.01)

// // Makes the divs random colors
// // Get all the div elements on the page
// const divElements = document.querySelectorAll('div');

// // Loop over each div element
// divElements.forEach((div) => {
//   // Generate random RGB values for background color
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   // Set random background color for the div
//   div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// });