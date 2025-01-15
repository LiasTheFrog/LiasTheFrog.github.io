function knapp(){
    const slideshow = document.querySelector("#carouselExampleIndicators");

    console.log("du har kommit till knapp funktionen!!!");
    var carousel = new bootstrap.Carousel(slideshow, {
        
        wrap: true
      })
    carousel.next();
}