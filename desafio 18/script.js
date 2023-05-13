var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  initialSlide: 0,
  direction: 'horizontal',
  effect: 'coverflow',
  centeredSlides: true,
  spaceBetween: -30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect:{
    rotate: 0,
    stretch:0,
    depth: 100,
    modifier: 2.5,
  },
  on: {
    slideChange: function () {
      // Seleciona todos os slides
      var slides = this.el.querySelectorAll('.swiper-slide');
      // Seleciona o slide anterior ao slide ativo
      var prevSlide = slides[this.activeIndex - 1];
      // Seleciona o próximo slide após o slide ativo
      var nextSlide = slides[this.activeIndex + 1];
      // Percorre todos os slides e adiciona a classe "swiper-slide-hidden" a todos que não são o slide ativo, o slide anterior ou o próximo slide
      for (var i = 0; i < slides.length; i++) {
        if (slides[i] !== prevSlide && slides[i] !== this.slides[this.activeIndex] && slides[i] !== nextSlide) {
          slides[i].classList.add('swiper-slide-hidden');
        } else {
          slides[i].classList.remove('swiper-slide-hidden');
        }
      }
    },

  },
});