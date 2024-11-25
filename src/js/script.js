
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')


playSemaforo()

// ---------------------------

function playSemaforo(){
    timeGreen()

    setTimeout(()=>{
        colorVanila(green)
        timeYellow()
        setTimeout(()=>{
            colorVanila(yellow)
            timeRed()
            setTimeout(()=>{
                colorVanila(red)
                playSemaforo()
            },4000)
        },2000)
    },10000)


}



function timeRed(){
    red.style.backgroundColor = 'red'
}

function timeYellow(){
    yellow.style.backgroundColor = 'yellow'
}

function timeGreen(){
    green.style.backgroundColor = 'green'
}

function colorVanila(vanila){
    vanila.style.backgroundColor = '#241311'
}




