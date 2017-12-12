$(document).ready(function(){
    var joyeuseDrawing = anime({
    targets: '#joyeuse path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 10000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
});
var poneyAnimated = anime({
  targets: '.poney',
  translateX: 70,
  rotate: 7,
  easing: 'linear',
  direction: 'alternate',
  duration: 2000,
  loop: true,
});
var soulierAnimated = anime({
  targets: '.soulier .one, .soulier .two, .soulier .three, .soulier .four',
  rotate: 0.5,
  easing: 'linear',
  direction: 'alternate',
  duration: 2000,
  loop: true,
  delay: function(el, i, l) {
    return i * 400;
  }
});
    if(!joyeuseDrawing.completed){
        setTimeout(function(){
        $('.fete').attr('fill-opacity', '0.7');
        }, 2400);
    }
});
    
    var santa = document.querySelector('#jseyeslayer');
    var santas = santa.getBoundingClientRect();
    if(santas.bottom == 0){
       $('.claus').html('');
    }
    var rudolph = document.querySelector('.rudolph');
    var rudolphNose = document.querySelector('.red_nose');
    var cerf = document.querySelector('.cerf');
    
    function animatedRudolph(scale, duration, elasticity, color){
        console.log('oui');
    anime.remove(rudolph);
    anime({
    targets: rudolph,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    direction: 'alternate',
});
        anime({
            targets: rudolphNose,
            backgroundColor: {
                value: '#E50027',
            },
            direction: 'alternate',
        });
    }
function clickRudolph () { animatedRudolph(1.1, 500, 400); }
 rudolph.addEventListener('click', clickRudolph);
$('.grelot').click(function(){
    var gling = document.querySelector('.gling');
    var cloche = document.querySelector('.cloche');
    anime({
        targets: gling,
        translateX: 10,
        translateX: -10,
        duration: 300,
        elasticity: 300,
        direction: 'alternate',
        
    });
    $('#grelot')[0].play();
});