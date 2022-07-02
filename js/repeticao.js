document.querySelector('#btn-resultado').addEventListener('click', ()=>{
    let InputValue = document.querySelector('#inp-number').value
    let Value = parseInt(InputValue)
    let option = document.querySelector('#option')
    let optionSelect = option.options[option.selectedIndex].value
    let resultado = document.querySelector('#resultado')
    let tabuada = ``

    if(Value == 0 || Value >= 11 || Value == '' ||optionSelect == "value0"){
        alert('[ERRO] Insira valores entre 1 e 10')
    }else if(optionSelect != "value0" && InputValue == ''){
        alert('[ERRO] Preencha todos os campos obrigatórios')
    }
    
    if(optionSelect == "value1" && InputValue != ''){
        for(var number = 1; number <= 10; number++){
            tabuada += `${number} + ${Value} = ${number+Value} <br/>`
            resultado.innerHTML = tabuada
        }
    }else if(optionSelect == "value2"){
        if(Value == 1){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 2){
            for(var number = 2; number <= 10; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 3){
            for(var number = 3; number <= 13; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 4){
            for(var number = 4; number <= 14; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 5){
            for(var number = 5; number <= 15; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 6){
            for(var number = 6; number <= 16; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 7){
            for(var number = 7; number <= 17; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 8){
            for(var number = 8; number <= 18; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 9){
            for(var number = 9; number <= 19; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(Value == 10){
            for(var number = 10; number <= 20; number++){
                tabuada += `${number} - ${Value} = ${number-Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }else if(optionSelect == "value3"){
            for(var number = 2; number <= 10; number++){
                tabuada += `${number} x ${Value} = ${number*Value} <br/>`
                resultado.innerHTML = tabuada
            }
        }
        
    }else if(optionSelect == "value3" && InputValue != ''){
        for(var number = 2; number <= 10; number++){
            tabuada += `${number} x ${Value} = ${number*Value} <br/>`
            resultado.innerHTML = tabuada
        }
    }else if(optionSelect == "value4"){
        if(Value == 1){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number} / ${Value} = ${number/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 2){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*2} / ${Value} = ${number*2/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 3){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*3} / ${Value} = ${number*3/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 4){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*4} / ${Value} = ${number*4/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 5){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*5} / ${Value} = ${number*5/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 6){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*6} / ${Value} = ${number*6/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 7){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*7} / ${Value} = ${number*7/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 8){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*8} / ${Value} = ${number*8/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 9){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*9} / ${Value} = ${number*9/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }else if(Value == 10){
            for(var number = 1; number <= 10; number++){
                tabuada += `${number*10} / ${Value} = ${number*10/Value} <br/>`
                resultado.innerHTML = tabuada
        }
        }
    }    
})

