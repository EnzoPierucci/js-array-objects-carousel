document.addEventListener('DOMContentLoaded', function () {
  const carouselData = [
    { 
    
    url: 'img/jojo1.jpg', 
    title: 'Titolo 1', 
    description: 'Descrizione 1' 
  },

  { 
    
    url: 'img/jojo2.jpg', 
    title: 'Titolo 2', 
    description: 'Descrizione 2' 
  },
  { 
    
    url: 'img/jojo3.jpg', 
    title: 'Titolo 3', 
    description: 'Descrizione 3' 
  },
  { 
    
    url: 'img/jojo4.jpg', 
    title: 'Titolo 4', 
    description: 'Descrizione 4' 
  },
  { 
    
    url: 'img/jojo5.jpg', 
    title: 'Titolo 5', 
    description: 'Descrizione 5' 
  },
  { 
    
    url: 'img/jojo6.jpg', 
    title: 'Titolo 6', 
    description: 'Descrizione 6' 
  },
    
  ];

  let currentIndex = 0;

  function updateCarousel(index) {
    const imageData = carouselData[index];
    document.getElementById('mainImage').src = imageData.url;
    document.getElementById('mainImage').alt = imageData.title;
    document.getElementById('imageTitle').textContent = imageData.title;
    document.getElementById('imageDescription').textContent = imageData.description;
  }

 
  updateCarousel(currentIndex);

  // bottoni
  document.getElementById('prevButton').addEventListener('click', function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselData.length - 1;
    updateCarousel(currentIndex);
  });

  document.getElementById('nextButton').addEventListener('click', function () {
    currentIndex = currentIndex < carouselData.length - 1 ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });
});




