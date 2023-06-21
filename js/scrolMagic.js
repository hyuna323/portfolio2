// project scrollmagic
(function() {
    
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".project_inner",
    triggerHook: 0.8
  })

  var revealElements = document.getElementsByClassName("project");
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

})


// clone scrollmagic
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
