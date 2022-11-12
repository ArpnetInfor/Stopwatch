"use strict"

var corpo = document.getElementById('corpo')
var iniciar = document.getElementById('iniciar')
var pausa = document.getElementById('pausa')
var parar = document.getElementById('parar')

var hh = 0
var mm = 0
var ss = 0

var tempo = 20
var cron


iniciar.addEventListener('click', ()=>{
    cron = setInterval(time, tempo)
    corpo.style.backgroundColor = "green"
    document.getElementById('conter').style.color = "white"
})

pausa.addEventListener('click', ()=>{
    clearInterval(cron)
    corpo.style.backgroundColor = "orange"
    document.getElementById('conter').style.color = "black"
})

parar.addEventListener('click', ()=>{
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0

    document.getElementById('conter').innerText = '00:00:00'
    corpo.style.backgroundColor = "white"
    document.getElementById('conter').style.color = "black"
})

function time(){
    ss++

    if (ss == 60) {
       ss = 0
       mm++ 

       if (mm == 60) {
        mm = 0
        hh++
       }
    }


    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById('conter').innerHTML = format
}