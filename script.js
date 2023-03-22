// Get elements from HTML
const capitalBtn = document.getElementById("capital");
const lowercaseBtn = document.getElementById("lowercase");
const combinedBtn = document.getElementById("combined");
const shuffleBtn = document.getElementById("shuffle");
const showAllBtn = document.getElementById("show-all");
const hideAllBtn = document.getElementById("hide-all");
const cardContainer = document.querySelector(".card-container");

// Create an array of cards with letters and words
// You can add more cards to this array as you wish
const cards = [
    { letter : "A", word : "Apple" },
    { letter : "B", word : "Banana" },
    { letter : "C", word : "Cat" }
];

// Create a variable to store current mode (capital or lowercase or combined)
let mode = "capital";

// Create a function to display cards on the website
function displayCards() {
    // Clear any existing cards from previous display
    cardContainer.innerHTML = "";

    // Loop through each card in the array
    for (let i=0; i<cards.length; i++) {
        // Get the letter and word from each card object
        let letter = cards[i].letter;
        let word = cards[i].word;

        // Create a div element for each card container
        let cardDiv = document.createElement("div");
        // Add a class name to the div element for styling purpose
        cardDiv.className = "card";

        // Create another div element for each front side of the card
        let frontDiv = document.createElement("div");
        // Add a class name to the div element for styling purpose
        frontDiv.className ="front";
        
        // Check which mode is currently active and display letter accordingly (capital or lowercase or combined)
        if (mode === "capital") {
            frontDiv.textContent=letter.toUpperCase();
          } else if (mode === "lowercase") {
            frontDiv.textContent=letter.toLowerCase();
          } else if (mode === "combined") {
            frontDiv.textContent=letter.toUpperCase() + "\n" + letter.toLowerCase();
          }

          // Create another div element for each back side of the card
          let backDiv=document.createElement("div");
          // Add a class name to the div element for styling purpose 
          backDiv.className="back";
          // Display word on back side of card 
          backDiv.textContent=word;

          // Append front and back divs to card div 
          cardDiv.appendChild(frontDiv); 
          cardDiv.appendChild(backDiv);

          // Append card div to main container
      cardContainer.appendChild(cardDiv);

// Add an event listener to each card div to flip it when clicked
cardDiv.addEventListener("click", function() {
  // Toggle the active class to the card div
  cardDiv.classList.toggle("active");
});
}

}

// Call the displayCards function when the website loads for the first time
displayCards();

// Add an event listener to capital button to switch mode to capital
capitalBtn.addEventListener("click", function() {
  // Change mode variable to capital
  mode = "capital";
  // Call displayCards function again to update cards
  displayCards();
});

// Add an event listener to lowercase button to switch mode to lowercase
lowercaseBtn.addEventListener("click", function() {
  // Change mode variable to lowercase
  mode = "lowercase";
  // Call displayCards function again to update cards
  displayCards();
});

// Add an event listener to combined button to switch mode to combined
combinedBtn.addEventListener("click", function() {
  // Change mode variable to combined
  mode = "combined";
  // Call displayCards function again to update cards
  displayCards();
});

// Add an event listener to shuffle button to shuffle cards randomly 
shuffleBtn.addEventListener("click", function() {
    // Use a loop and a random number generator 
    //to swap each card with another random card in the array 
    for (let i=0; i<cards.length; i++) {
        // Generate a random index between 0 and cards.length-1 
        let randomIndex=Math.floor(Math.random()*cards.length); 
        // Swap cards[i] with cards[randomIndex] 
        let temp=cards[i]; 
        cards[i]=cards[randomIndex]; 
        cards[randomIndex]=temp; 

    }

    // Call displayCards function again to update cards 
    displayCards(); 

});

// Add an event listener to show all button 
showAllBtn.addEventListener("click",function(){
    // Get all card divs from HTML using querySelectorAll method 
    let allCards=document.querySelectorAll(".card-container .card"); 

    // Loop through each card div and add active class if not present already  
    for (let i=0; i<allCards.length; i++) {  
        if (!allCards[i].classList.contains("active")) {  
            allCards[i].classList.add("active");  
        }  

    }

});

// Add an event listener to hide all button  
hideAllBtn.addEventListener("click",function(){  
    // Get all card divs from HTML using querySelectorAll method   
    let allCards=document.querySelectorAll(".card-container .card");   

    // Loop through each card div and remove active class if present already    
    for (let i=0; i<allCards.length; i++) {    
        if (allCards[i].classList.contains("active")) {    
            allCards[i].classList.remove("active");    
        }    

    }

});
