//Tour object
function Tour(name, description, price, durationInDays) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.durationInDays = durationInDays;
  }
  const tourDescr = [
    "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
    "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
    "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
    "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.",
    "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
  ];
  
  let tour1 = new Tour("Mystical Bali Adventure", tourDescr[0], 3400.99, 14);
  let tour2 = new Tour("Mystical Machu Picchu Trek", tourDescr[1], 959.99, 12);
  let tour3 = new Tour("Vibrant Rio de Janeiro Carnival", tourDescr[2], 1000, 8);
  let tour4 = new Tour("Majestic African Safari", tourDescr[3], 1900, 20);
  let tour5 = new Tour("Scenic New Zealand Adventure", tourDescr[4], 2500, 18);
  let tour6 = new Tour("Enigmatic Egyptian Odyssey", tourDescr[5], 1880, 10);
  
  const tours = [tour1, tour2, tour3, tour4, tour5, tour6];
  let tourCalc = (price, amountOfPeople) => {
    let sum;
    sum = price * amountOfPeople;
    return sum;
  };
  const tour1Event = (number) => {
    let qAboutAmountOfPeople = parseInt(
      prompt("For how much people are you buying the tour(write just the number)")
    );
    if (qAboutAmountOfPeople>0) {
      function totalSumFunc(i){
        let totalSum = tourCalc(tours[i].price, qAboutAmountOfPeople);
        return totalSum;
      }
      switch (number) {
        case 1:
          console.log(`The total price for ${qAboutAmountOfPeople} people of the tour is ${totalSumFunc(0)}`);
          break;
        case 2:
          console.log(`The total price for ${qAboutAmountOfPeople} people of the tour is ${totalSumFunc(1)}`);
          break;
        case 3:
          console.log(`The total price for ${qAboutAmountOfPeople} people of the tour is ${totalSumFunc(2)}`);
          break;
        case 4:
          console.log(`The total price for ${qAboutAmountOfPeople} people of the tour is ${totalSumFunc(3)}`);
          break;
        case 5:
          console.log(`The total price for ${qAboutAmountOfPeople} people of the tour is ${totalSumFunc(4)}`);
          break;
        case 6:
          console.log(`The total price for ${qAboutAmountOfPeople} people of the tour is ${totalSumFunc(5)}`);
          break;
      }
    } else alert("Nice try) or you are fool and missing opportunity");
  };