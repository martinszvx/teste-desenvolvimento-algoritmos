import readline from 'readline-sync';

// =================================================================
// DESAFIO: TOTEM MEGALODON
// Escreva seu algoritmo de validação e regras de negócio abaixo.
// =================================================================

function iniciarTotem() {
    console.log("\x1b[1m======== BEM-VINDO AO TECHPARK ========\x1b[0m");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)
    let nome = readline.question("Digite o nome do cliente: \x1b[1m");

    // 1. FAÇA AQUI A VALIDAÇÃO DO NOME (Se está vazio ou contém números)
    if (!nome || nome.trim().length === 0) {
        console.log("\x1b[0mNome inválido: o nome não pode ficar vazio.");
        return;
    }
    if (/[0-9]/.test(nome)) {
        console.log("\x1b[0mNome inválido: o nome não pode conter números.");
        return;
    }

    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE
    let idadeEntrada = readline.question(`\x1b[0mDigite a idade de \x1b[1m${nome}\x1b[0m: `);
    let idade = Number(idadeEntrada);

    if (idade < 0 || idade > 120 || isNaN(idade)) {
        console.log("Idade \x1b[31minválida\x1b[0m. Por favor, digite uma idade inteira válida entre 0 e 120.");
        return;
    }

    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA
    let alturaEntrada = readline.question(`Digite a altura de \x1b[1m${nome}\x1b[0m (em metros): `);
    // let altura = Number(alturaEntrada);
    let altura = alturaEntrada.replace(',', '.'); // Substitui vírgula por ponto, se necessário

    if (altura < 0.50 || altura > 2.50 || isNaN(altura)) {
        console.log("Altura \x1b[31minválida\x1b[0m. Por favor, digite uma altura válida entre 0.50m e 2.50m.");
        return;
    }

    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA
    if(idade < 12 && altura >= 1.50){
        console.log(`\x1b[31m[ACESSO NEGADO]\x1b[0m - ${nome}, você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.`);
    }
    else if(idade >= 12 && altura < 1.50){
        console.log(`\x1b[31m[ACESSO NEGADO]\x1b[0m - ${nome}, você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.`);
    } 
    else if(idade < 12 && altura < 1.50){
        console.log(`\x1b[31m[ACESSO NEGADO]\x1b[0m - ${nome}, infelizmente você não atingiu a idade mínima de 12 anos e a altura mínima de 1.50m.`);
    }
    else {
        console.log(`Olá, ${nome}! Cadastro validado com sucesso. Seu acesso foi \x1b[32mPERMITIDO\x1b[0m. Divirta-se na MegaloDon!`);
    }
}

// Executa o sistema do totem
iniciarTotem();