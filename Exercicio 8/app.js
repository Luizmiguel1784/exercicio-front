let pessoa = {
    nome : "Luiz miguel",
    idade: 18,
    profissao: "jogador de xadrez",
    apresentar: function () {
        console.log("Olá, meu nome é " + this.nome + " eu tenho " + this.idade + " anos e eu sou "+ this.profissao );
}
}
        pessoa.apresentar();


let carro = {
    marca : "renault",
    modelo: "kwid",
    ano: 2017,
    ligar: function(){
        console.log("Carro ligou");
}
}
        carro.ligar();
        

let Produtos = { 
    loja : {
        Nome: "Casas Bahia",
        produtos :['Televisao' ,'Airfreyer','Cadeira','Mesa','Geladeira' ]
}
}
    console.log(Object.entries(Produtos.loja.produtos));

