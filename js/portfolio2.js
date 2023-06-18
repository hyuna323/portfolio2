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




// scrollmagic
(function() {
    
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".clone_inner",
    triggerHook: 0.8
  })

  var revealElements = document.getElementsByClassName("clone");
  for (var i = 0; i < revealElements.length; i++) {

    var scene2 = new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: -150,
      triggerHook: 0.3
    })
    .setClassToggle(revealElements[i], "visible")
    .addTo(controller)
    // .addIndicators({name: "(box) " + (i+1), colorStart:"#F6B352", colorTrigger:"#F6B352"});

  }

}())


// page move -----------------------------
// function home(){
//   let url = "";
//   window.location = url;
// }

function ohou(){
  window.open("https://hyuna323.github.io/ohou_project/html/01_prototype_1280_main.html", "_blank");
}

function ediya(){
  window.open("https://hyuna323.github.io/ediya_project/html/01_ediya_main.html", "_blank");
}

function portfolio1(){
  window.open("https://hyuna323.github.io/portfolio/html/portfolio_ver2.html", "_blank");
}

function interactive(){
  window.open("https://hyuna323.github.io/interactive_learning/html/interactive_main.html", "_blank");
}

// function portfolio2(){
//   window.open("", "_blank");
// }

// notion으로 이동
function ohouplan(){
  window.open("https://www.notion.so/01-71c60410f5c74f69b8b49065891e48e6?pvs=4", "_blank");
}

function ediyaplan(){
  window.open("https://www.notion.so/02-3d5c4a90ba414e3da535fa7a8317be6d?pvs=4", "_blank");
}

function portfoilo1plan(){
  window.open("https://www.notion.so/03-1ace6e61c74a4a8aa76c130b1b3e4007?pvs=4", "_blank");
}

function interactiveplan(){
  window.open("https://www.notion.so/05-Interactive-learning-de57dfa3643c470dbfcef449f1f2003e?pvs=4", "_blank");
}

// function portfolio2plan(){
//   window.open("", "_blank");
// }

// 이력서 다운로드
document.contect_info.href = '../download/publisher.pdf';
