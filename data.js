window.data[
     {
        name: "Krishika",
        rate: "4",
        review: "It was difficult in the starting to learn it but later on it become very interesting and easy"
     },

     {
        name: "Bhavika",
        rate: "5",
        review: "I like to try new and interesting things and it was one of my best decision to learn to play this game"
     },

     {
        name:  "Ritik",
        rate: "4.5",
        review: "It is hard at starting but worth it"
     },

     {
        name: "krishna",
        rate: "5",
        review: "It give me some new experience"
     },

     {
        name: "Alen",
        rate: "3.5",
        review: "I love Indian culture and because of this I tried to play this game and I was able to learn something different"
     }
]

function createReviewCard(review) {
   return `<article class="card">
     
     <div >
     <header>
       <h4>${review.title}</h4>
       
     </header>
     <p class="card-text">${review.data}</p>
     </div>
   </article>`;
 }