class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.limpar()
    }

    limpar(){
        this.operacao = ''
        this.posOperacao = ''
        this.operation = undefined

    }

    deletar(){
        this.operacao = this.posOperacao.toString().slice(0,-1)
    }

    concatenar(number){

    }

    chooseOperation(operation){

    }

    compute(){
        
    }

    updateDisplay(){
         
    }
}

const botoesNumeros = document.querySelectorAll('[numeros]');
const botoesOperacoes = document.querySelectorAll('[operacoes]');
const botaoigual = document.querySelector('[igual]');
const botaolimpar = document.querySelector('[limpar]');
const botaoLimparTudo= document.querySelector('[limpar-tudo]');
const operacao= document.querySelector('[operacao]');
const posOperacao= document.querySelector('[pos-operacao]');

