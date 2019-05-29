$(document).ready(function(){
    
    
    $('.carousel-container').flickity({
      // options
      autoPlay: 2000,
      cellAlign: 'left',
      contain: true,
      setGallerySize: false,
      wrapAround: true
    });

    $('header h1').slideUp(8000);

  })