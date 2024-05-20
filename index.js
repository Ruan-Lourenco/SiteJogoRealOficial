let i = document.getElementById('pjs')
let pDif = document.getElementById('numDif')
let num

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pegardificuldade(){
    let facil = document.getElementById('facil')
    let medio = document.getElementById('medio')
    let dificil = document.getElementById('dificil')
    
    if(facil.checked){
        pDif.textContent = 'O numero está entre 0 e 10'
        num = getRandonInt(0, 10)
    }
    else if(medio.checked){
        pDif.textContent = 'O numero está entre 0 e 30'
        num = getRandomInt(0, 30)
    }
    else if(dificil.checked){
        pDif.textContent = 'O numero está entre 0 e 50'
        num = getRandomInt(0, 50)
    }
    else{
        pDif.textContent = "Selecione uma dificuldade"
    }
    

}



function envioNum(){
    let numSend = document.getElementById('writeNum').value

    console.log(numSend)
    console.log(Number(num))
    
    
    if(num != Number(num)){
        i.textContent = "Dificuldade não selecionada"
    }
    else{
        if (numSend != Number(numSend)){
            i.textContent = "Digite um número!"
            return false
        }
        if(numSend == num){
            i.textContent = 'Você acertou!\nO numero era ' + num
        }
        else if(numSend > num){
            i.textContent = 'O número que estou pensando é menor do que o que você digitou'
        }
        else{
            i.textContent = 'O número que estou pensando é maior do que o que você digitou'
        }
    }
}