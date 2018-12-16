var $star = $('.star')
var $circle = $('.circle')
var $square = $('.square')

var animateDuration = {
    opening:5
}
var ans = []
function opening(){
    TweenLite.to($star, animateDuration.opening, { rotation: 360, ease: Power2.easeOut })
    TweenLite.to($circle, animateDuration.opening, { rotation: 360, ease: Power2.easeOut })
    TweenLite.to($square, animateDuration.opening, { rotation: -360, ease: Power2.easeOut })
    TweenLite.to($circle, animateDuration.opening / 2, { css: { scale: 1.1 } })
    TweenLite.to($circle, animateDuration.opening / 2, { css: { scale: 1 }, delay: animateDuration.opening / 2 })

    TweenLite.to($square, 1.6, { css: { scale: 7 }, delay: animateDuration.opening - 1, ease: Power2.easeOut })
    TweenLite.to($circle, 1.6, { css: { scale: 7 }, delay: animateDuration.opening - 0.7, ease: Power2.easeOut })
    TweenLite.to($star, 0.6, {
        css: { scale: 8 }, delay: animateDuration.opening, ease: Power2.easeOut, onComplete: function () {
            $('.opening').remove()
            question1()
        }
    })
}

function question1(){
    $('.question1 .leftBlock .questionContainer ul').click(function(e){
        let value = $(e.target).attr('data-value')
        if(!value) return 
        ans.push(value)
        alert(value)
    })
}

question1()