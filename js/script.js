$(document).ready(function(){
    $('.img-box').slick({
      slidesToShow: 3, // 화면에 보일 이미지 개수
      slidesToScroll: 1, // 한 번에 스크롤할 이미지 개수
      arrows: true, // 이전/다음 화살표 버튼
      prevArrow: $('.prev'), // 이전 버튼
      nextArrow: $('.next'), // 다음 버튼
      infinite: true, // 무한 루프
      speed: 200, // 애니메이션 속도 (밀리초 단위)
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2 // 작은 화면에서는 2개로 변경
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1 // 더 작은 화면에서는 1개로 변경
          }
        }
      ]
    });
  });





  //hidden button
  $(document).ready(function() {
    $('.button').click(function(event) {
      event.preventDefault(); // 기본 동작 방지
  
      var $relatedSites = $('#related-sites');
      var $icon = $('#toggle-icon');
  
      // height: 0으로 애니메이션을 사용하여 숨기기/보이기
      if ($relatedSites.is(':visible')) {
        $relatedSites.slideUp(300, function() {
          $icon.removeClass('down').addClass('up');
        });
      } else {
        $relatedSites.slideDown(300, function() {
          $icon.removeClass('up').addClass('down');
        });
      }
    });
  });






