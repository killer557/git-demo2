//Tour object
function Tour(name, description, price, durationInDays, imageUrl) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.durationInDays = durationInDays;
  this.imageUrl = imageUrl;
}
const tourDescr = [
  "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
  "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
  "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
  "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
  "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.",
  "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
];
let tour1 = new Tour(
  "Mystical Bali Adventure",
  tourDescr[0],
  3400.99,
  14,
  "./img/bali.jpg"
);
let tour2 = new Tour(
  "Mystical Machu Picchu Trek",
  tourDescr[1],
  959.99,
  12,
  "./img/Machu_Picchu.jpg"
);
let tour3 = new Tour(
  "Vibrant Rio de Janeiro Carnival",
  tourDescr[2],
  1000,
  8,
  "./img/Rio_Carnival.jpg"
);
let tour4 = new Tour(
  "Majestic African Safari",
  tourDescr[3],
  1900,
  20,
  "./img/African_safari.jpg"
);
let tour5 = new Tour(
  "Scenic New Zealand Adventure",
  tourDescr[4],
  2500,
  18,
  "./img/New_Zealand.jpg"
);
let tour6 = new Tour(
  "Enigmatic Egyptian Odyssey",
  tourDescr[5],
  2880,
  10,
  "./img/Egypt_pyramids.jpg"
);

const tours = [tour1, tour2, tour3, tour4, tour5, tour6];



// const toursFilter=tours=>tours.filter(item=>item.price<=2500)

// const filteredTours=tours.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(filteredTours)
const toursContainer = document.getElementById("order_tour");
toursContainer.innerHTML = "";
tours.forEach((tour) => {
  const card = document.createElement("div");
  card.classList.add("section--3__tour-card");
  const img = document.createElement("img");
  img.classList.add("section--3__tour-img");
  img.setAttribute("src", tour.imageUrl);
  img.setAttribute("alt", tour.name);
  const cardHeading = document.createElement("h3");
  cardHeading.classList.add("section--3__tour-title");
  cardHeading.textContent = tour.name;
  const cardDescr = document.createElement("p");
  cardDescr.classList.add("section--3__tour-descr");
  cardDescr.textContent = tour.description;
  const cardButtonContainer = document.createElement("div");
  cardButtonContainer.classList.add("section--3__tour-buy");
  const cardButtonBuy = document.createElement("button");
  cardButtonBuy.classList.add("section__button", "section--3__tour-button-buy");
  cardButtonBuy.textContent = "Buy Tour";
  const cardButtonInfo = document.createElement("button");
  cardButtonInfo.classList.add(
    "section__button",
    "section--3__tour-button-info"
  );
  cardButtonInfo.textContent = "More Info";

  toursContainer.appendChild(card);
  const arr = [img, cardHeading, cardDescr, cardButtonContainer];
  arr.forEach((item) => card.appendChild(item));
  cardButtonContainer.appendChild(cardButtonBuy);
  cardButtonContainer.appendChild(cardButtonInfo);
});

document.addEventListener("DOMContentLoaded", function () {
  const infoButtons = document.querySelectorAll(
    ".section--3__tour-button-info"
  );
  
  
  const modal = document.getElementById("tourModal");
  const closeModal = document.querySelector(".close");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalPrice = document.getElementById("modalPrice");
  const modalDuration = document.getElementById("modalDuration");
  infoButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const tour = tours[index];
      modalTitle.textContent = tour.name;
      modalDescription.textContent = tour.description;
      modalPrice.textContent = tour.price+"$";
      modalDuration.textContent = tour.durationInDays;
      modal.style.display = "block";
    });
  });
  const buyButtons = document.querySelectorAll(".section--3__tour-button-buy");
  const confrimationButton=document.querySelector(".confirmation-button");
  const modal2 = document.getElementById("tourModal2");

  buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const tour = tours[index];
      modalTitle.textContent = tour.name;
      modalPrice.textContent = tour.price+"$";
      modalDuration.textContent = tour.durationInDays;
      modal2.style.display = "block";
      confrimationButton.addEventListener("click", ()=>{
        confrimationButton.style.backgroundColor="limegreen"
        confrimationButton.style.width="80%"
        document.getElementById("confirm").textContent="Purchase confirmed! Have a nice trip!"
      })
    });
  });
  function reset(){
    confrimationButton.style.backgroundColor="#bc241edd"
    confrimationButton.style.width="31%"
    document.getElementById("confirm").textContent="Confirm purchase"
  }
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    reset()
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    if(event.target===modal2){
      modal2.style.display="none";
      reset()
    }
  });
});
