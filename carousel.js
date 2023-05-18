// JavaScript for Carousel
document.addEventListener("DOMContentLoaded", function() {
    var carouselItems = document.querySelectorAll(".carousel-item");
    var currentIndex = 0;
    var totalItems = carouselItems.length;
    var interval = 2500; // Set the interval in milliseconds (2 seconds in this example)
  
    function showItem(index) {
      // Hide all items
      for (var i = 0; i < totalItems; i++) {
        carouselItems[i].classList.remove("active");
      }
  
      // Show the selected item
      carouselItems[index].classList.add("active");
    }
  
    function nextItem() {
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      showItem(currentIndex);
    }
  
    // Start the carousel
    setInterval(nextItem, interval);
  
    // Show the initial item
    showItem(currentIndex);
  });
  