
// skill 그래프
$(function(){
  const charts = $('.charts');
  const chart = $('.chart');
  const  chartOST = chart.offset().top - 700;
  const excuted = false;



  $(window).scroll(function(){
    const currentSCT = $(this).scrollTop();
    if(currentSCT >= chartOST){
      if(!charts.hasClass('active')){
        animateChart();
        charts.addClass('active');
      }
      console.log(excuted);

    }
  });

  function animateChart(){
    chart.each(function(){
      const item = $(this);
      const title = item.find('h4');
      const targetNum = title.attr('data-num');
      const circle = item.find('circle');
      var strokeWidth = 0;

    //  debugger;

    if(screen.width < 320){
      // debugger;
      strokeWidth = 331;
    } else if(screen.width < 768) {
      strokeWidth = 325;
    }
    else {
      strokeWidth = 409;
    }
      
  
      $({rate:0}).animate({rate:targetNum},
        {
          duration: 1500,

          progress: function(){
            const now = this.rate;
            const amount = strokeWidth - (strokeWidth*now/100);
            console.log(now);
            title.text(Math.floor(now));
            circle.css({strokeDashoffset:amount});
          }
      });
    }); // chart each
  }
});


// 이력서 다운로드
document.contect_info = '../download/publisher_ohhyuna.pdf';

// loading page
const loader = document.querySelector('.loader');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{

    setTimeout(() => { 
    
    loader.style.opacity = '0';
		html.style.overflow = 'auto'; //스크롤 방지 해제

    setTimeout(() => {
    loader.style.display = 'none';
  }, 400);
        
  }, 1000);

})
