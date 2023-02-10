'use strict'

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')

function correcaoNota(){
    let situacaoAluno;
    situacaoAluno = Number(numero1.value) + Number(numero2.value);

    if (situacaoAluno >= 7){
        document.getElementById('resultado').value = 'Aprovado'
        formulario.classList.add('sombraAzul')
    }else{
        document.getElementById('resultado').value = 'Reprovado'
        formulario.classList.add('sombraVermelha')

    }

}

calcular.addEventListener('click', correcaoNota);


