let contas = Array();
    contas[0] = [1, "Sheldon Cooper", "01/05/1990", "81987654321", 1000];
    contas[1] = [2, "Leonard Hofstadder", "02/06/1995", "81321654987", 1000];
    contas[2] = [3, "Kurt Cobain", "05/05/1978", "81456789123", 1000];
    contas[3] = [4, "Courtney Love", "06/06/1986", "81789456123", 1000];
let contador = contas.length;

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

function verificacaoConta(a) {
    let verificador = false;
    for (i = 0; i < contas.length; i++){
        if (a == contas[i][0]) {
            verificador = true;
        }
    }
    return verificador;
}

function validarSaldo(a,b) {
    let verificador2 = false;
    if (a > contas[b-1][4]) {
        verificador2 = true;
    }
    return verificador2;
}

function transferir() {
    let contaOrigem = parseInt(prompt("Informe o codigo sua conta"));
    let contaDestino = parseInt(prompt("Informe o código da conta que deseja transferir!"));
    let valorTransferencia = parseFloat(prompt("Informe o valor que deseja transferir"));
    
    if (verificacaoConta(contaOrigem) == false) {
        alert("TRANSFERÊNCIA NÃO CONCLUÍDA! Conta de origem inválida, favor verificar e refazer a transferência");
    } else if (verificacaoConta(contaDestino) == false) {
        alert("TRANSFERÊNCIA NÃO CONCLUÍDA! Conta de destino inválida, favor verificar e refazer a transferência")
    } else if (validarSaldo(valorTransferencia, contaOrigem) == true) {
        alert("TRANSFERÊNCIA NÃO CONCLUÍDA! Saldo insuficiente, favor verificar e refazer a transferência")
    } else {
        contas[contaOrigem-1][4] -= valorTransferencia;
        console.log(contas[contaOrigem-1]);
        contas[contaDestino-1][4] += valorTransferencia;
        console.log(contas[contaDestino-1]);
        alert("Transferência de R$ "+ valorTransferencia +" concluída com sucesso para o usuário " + contas[contaDestino-1][1])
    }

    //console.log(verificacaoConta(contaOrigem));
    //console.log(verificacaoConta(contaDestino));
}