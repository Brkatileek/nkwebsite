document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
     <div class="carousel-nav">
       ${ buttonsHtml.join("") }
     </div>  
     `);

     const buttons = carousel.querySelectorAll(".carousel-button");

     buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            console.log(`inside button click`)
            //unselect all the items
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(item => item.classList.remove("carousel-button-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-button-selected");

        }); 
     });   

     items[0].classList.add("carousel-item-selected");
     buttons[0].classList.add("carousel-button-selected");
     
}); 





document.addEventListener("DOMContentLoaded", function() {
  // Function to randomize the order of sentences
  function randomizeSentences() {
      var textWrapper = document.querySelector('.text-content');
      var sentences = [
          "We are one serious company.",
          "Eight hours of sleep, eight hours of work, eight hours of being tired.",
          "Free days are overrated.",
          "W=F*d.",
          "Feel free to hold back.",
          "I am the boss you are Bosnians.",
          "9-11=-2.",
          "A deficiency of intelligence manifests as an excess of benefit to others.",
          "It is only a matter of time before the problems will be solved in the worst possible way.",
          "Pain is lust, trust through pain.",
          "Your art can harm you, your family, and your friends.",
          "Pornopessimism & Turbofolk.",
          "Less truth, more trust.",
          "Kurzarbeit, Mother!",
          "I love my coal mine.",
          "Just exciting, just fast life, going to the supermarket and back home.",
          "Your freedom is my cage.",
          "Try to see the bright side of your horrible job.",
          "We are few, but we are shit.",
          "„Lifting heavy boxes do cost.“ (My Hump).",
          "Unhealthy body unhealthy spirit.",
          "Beauty is fleeting, failure remains.",
          "To be, or B2B is always the question.",
          "This war will never change.",
          "Unhealthy body unhealthy spirit.",
          "All paths lead to Economy & Death.",
          "Yes Pain, No Gain.",
          "YUGOslaveIA.",
          "SHIT! I HAVE LOST MY TRAIN TICKET!"
      ];

      // Shuffle the sentences and update the content
      sentences.sort(function() {
          return 0.5 - Math.random();
      }).forEach(function(sentence) {
          var h1 = document.createElement('h1');
          h1.textContent = sentence;
          textWrapper.appendChild(h1);
      });
  }

  // Call the function to randomize the order on page load
  randomizeSentences();
});

