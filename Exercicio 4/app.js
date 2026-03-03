
function Idade() {
    let Idade = prompt("Qual a sua idade?")

    if(Idade < 12){
        console.log("Você é uma criança");
    }
    else if (Idade > 12 && Idade < 18) {
        console.log("Você é adolescente");
        
    } 
    else if(Idade > 17 && Idade < 60) {
        console.log("Você é adulto");
        
    }
    else{
        console.log("Você é Idoso");
        
    }

}
Idade()

function Mes() {
    
    let mes = prompt("Você esta em qual mes")

    switch (mes) {
        case 1:
        console.log("Janeiro");    
            
        break;
        
        case 2:
        console.log("Fevereiro");    
        
        break;
        case 3:
        console.log("Março");

        break;
        
        case 4:
        console.log("Abril");
        break;
        
        case 5:
        console.log("Maio");
        
        break;
        
        case 6:
        console.log("Junho");
        
        break;
        
        case 7:
        console.log("Julho")  
        
        break;
        
        case 8:
        console.log("Agosto");
        
        break;
        
        case 9:
        console.log("Setembro");
        
        break;
        
        case 10:
        console.log("Outubro");
        
        break;
        
        case 11:
        console.log("Novembro");
        
        break;
        
        case 12:                                            
        console.log("Dezembro");

        break;
        
        default:
        break;
    }
}

Mes()

function Nota() {
    
    let nota = prompt("Qual a sua nota")

    if (nota >= 9) {
        console.log("Excelente");
    }
    else if(nota >= 7 && nota < 5){
        console.log("Bom");
    }
    else if(nota >= 5){
        console.log("Regular");
    }
    else{
        console.log("Reprovado");       
    }
}

Nota()