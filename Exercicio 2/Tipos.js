let variaveis = {Nome : "Luiz", 
                 idade : 18,
                 peso : 60
}

console.log(typeof variaveis.Nome);
console.log(typeof variaveis.idade);
console.log(typeof variaveis.peso);

variaveis.Nome = parseInt(variaveis.Nome)   
variaveis.idade = variaveis.idade.toString() 
variaveis.peso = Boolean(variaveis.peso)     

console.log(typeof variaveis.Nome);
console.log(typeof variaveis.idade);
console.log(typeof variaveis.peso);

