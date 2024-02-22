var valor = document.querySelector("div.container input")
var tabuada = document.querySelector("div.container div.tabuada")
const calcular = document.querySelector("div.container button")


calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 || Number(valor.value) > 9){        

        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 9"

    }else{

        for(i = 1; i <= 9; i++){

            var calc = valor.value + " x " + String(i) + " = " + Number(valor.value) * i;

            var resultado = document.createElement("p")

            resultado.innerText = calc

            tabuada.appendChild(resultado)

        }

    }

})