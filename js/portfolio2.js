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
  
      $({rate:0}).animate({rate:targetNum},
        {
          duration: 1500,
          progress: function(){
            const now = this.rate;
            const amount = 409 - (409*now/100);
            console.log(now);
            title.text(Math.floor(now));
            circle.css({strokeDashoffset:amount});
          }
      });
    }); // chart each
  }
});
