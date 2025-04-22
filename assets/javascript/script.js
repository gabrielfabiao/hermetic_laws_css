let mind = document.querySelector('.mind')
let whatsAbove = document.querySelector('#whats_above')

let leftBall = document.querySelector('.small_left-ball')
let rightBall = document.querySelector('.small_right-ball')

//---------CAUSE(bindings)----------

let causeBallOne = document.querySelector('#cause_ball_one')
let causeBallTwo = document.querySelector('#cause_ball_two')
let causeBallThree = document.querySelector('#cause_ball_three')
let causeBallFour = document.querySelector('#cause_ball_four')

//----------------------------------

mind.addEventListener('click', mindExpansion)

function mindExpansion() {
    mind.style.width = '100%'
    mind.style.height = '100%'
    mind.style.borderRadius = '0'
    mind.style.marginTop = '0'
    whatsAbove.style.background = 'white'
}

setInterval(infiniteRythm, 1000)

function infiniteRythm() { 
    let leftBallTracker = leftBall.getBoundingClientRect()
    let rightBallTracker = rightBall.getBoundingClientRect()
    
    
    if(!(leftBallTracker.right < rightBallTracker.left ||
        leftBallTracker.left > rightBallTracker.right ||
        leftBallTracker.bottom < rightBallTracker.top ||
        leftBallTracker.top > rightBallTracker.bottom)) {
        
        if(leftBall.style.visibility == 'visible') {
            leftBall.style.visibility = 'hidden'
            rightBall.style.visibility = 'visible'
        } else {
            leftBall.style.visibility = 'visible'
            rightBall.style.visibility = 'hidden'
        }
    }
}

//------------------CAUSE(function)-------------------------

causeSpinOne()
setInterval(causeSpinTwo, 500)
setInterval(causeSpinThree, 1000)
setInterval(causeSpinFour, 1500)

function causeSpinOne () {
    causeBallOne.style.animation = 'causeEffect 2s infinite ease-out'
}

function causeSpinTwo () {
    causeBallTwo.style.animation = 'causeEffect 2s infinite ease-out'
}

function causeSpinThree () {
    causeBallThree.style.animation = 'causeEffect 2s infinite ease-out'
}

function causeSpinFour () {
    causeBallFour.style.animation = 'causeEffect 2s infinite ease-out'
}