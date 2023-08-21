const currentSlide = (slideIndex, mySlidesGroup, dotIndicator) => {
  let slides = document.getElementsByClassName(mySlidesGroup);
  let dots = document.getElementsByClassName(dotIndicator);

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" displayBlock", "");
  }

  return (
    (dots[slideIndex - 1].className += " active"),
    (slides[slideIndex - 1].className += " displayBlock")
  );
};

export default currentSlide;
