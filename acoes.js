function insert(num){
    document.querySelector('#resultado').innerHTML += num
}

function clean(){
    document.querySelector('#resultado').innerHTML = ""
}

function back(){
    let res = document.querySelector('#resultado') 
    document.querySelector('#resultado').innerHTML = res.substring(0, res.length -1)
}

function calcular(){
    let res = document.querySelector('#resultado')
    if(res){
        document.querySelector('#resultado').innerHTML = eval(res)
    } else{
        alert('Impossível Calcular')
    }
}