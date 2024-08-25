let contas = Array();
let contador = 0;

function inserirConta() {
    contas.push(Array());
    contas[contador][0] = contador+1;
    contas[contador].push(prompt("Informe seu nome completo!"));
    contas[contador].push(prompt("Informe sua data de nascimento!"));
    contas[contador].push(prompt("Informe o seu número de telefone!"));
    contas[contador].push(1000);
    contador++;

    console.log(contas);
}

function exibirConta(){ 
        
    let numConta = parseInt(prompt("Digite o número da conta:"))
   
    alert(contas[numConta -1])
        
   }