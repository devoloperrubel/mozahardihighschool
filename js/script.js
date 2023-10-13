$(document).ready(function () {
 // herro slider Plugin start 
  $(".herro-slide").bxSlider({
    auto: true,
    captions:true,
    mode: 'horizontal',
    speed:1000,
    pager:false,
  });

  // herro slider Plugin end
//   typing plugin start
let typingWord = ['২৭/১০/২০২৩ইং তারিখে স্কুল বন্ধ থাকবে ।', '০১/১১/২০২৩ইং তারিখে সবাইকে করে বউ দেওয়া হবে ।','এবং যারা বিয়ে করেতে চাইবে না তাদেরকে একটা করে প্রেমিকা দেওয়া হবে ।'];
let typed = new Typed('.typing', {
    strings:typingWord,
    typeSpeed: 100,
    backSpeed : 20,
    loop :true,
  });
//   typing plugin end

// notice icon hover animaton start
$(".icon-box").hover(function(){
  $(this).addClass("fa-beat , clss");
  }, function(){
  $(this).removeClass("fa-beat , clss");
});
// notice icon hover animaton end
// school history slider start 
$(".history-slider").bxSlider({
  auto: true,
  captions:true,
  mode: 'fade',
  speed:1000,
  pager:false,
  controls:false,
  wrapperClass:'.history-slider>.bx-wrapper'
});
// school history slider end
// teacher slider start 
$('.teacher-single-img').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 2,
  prevArrow:'<button type="button" class="slick-prev"> < </button>',
  nextArrow:'<button type="button" class="slick-prev slick-right"> > </button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
// teacher slider end
// our achievement start 
$('.achievement-img-slider').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button type="button" class="slick-prev"> < </button>',
  nextArrow:'<button type="button" class="slick-prev slick-right"> > </button>',

});
// our achievement end









});
