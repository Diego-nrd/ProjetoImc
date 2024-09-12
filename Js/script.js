function sepAlt(input) {
    let nums = input.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
        .replace(/\B(?=(\d{2})+(?!\d))/g, '.')

    input.value = nums
}

function sepPeso(input) {

    //transforma valor do input em uma variavel
    let nums = input.value;

    //remove caracters não numericos
    nums = nums.replace(/\D/g, '')

    //se tiver apenas dois um ponto apos o primeiro numero
    if (nums.length <= 2) {
        nums = nums.replace(/(\d{1})(?=\d)/g, "$1.");
        // se tiver 3 numeros um ponto apos o segundo numero 
    } else if (nums.length <= 3) {
        nums = nums.replace(/(\d{2})(?=\d)/g, "$1.")

        // acima de 3 numeros um ponto apos o terceiro numero
    } else {
        nums = nums.replace(/(\d{3})(?=\d)/g, "$1.")

    }
    //atualiza o valor do input com a formatação 
    input.value = nums

}

function imc(tipo, op) {
    if (tipo === 'acao' && op === 'btn') {
        const v_altura = parseFloat(document.getElementById("altura").value);
        const v_peso = parseFloat(document.getElementById("peso").value);
        const resutImc = document.getElementById("calculo_imc");
        const resutTextImc = document.getElementById("texto_imc");
        const text_dica = document.getElementById("texto_dica");

        const imc = parseFloat(v_peso / (v_altura * v_altura)).toFixed(2)

        const resultSections = ['baixo', 'normal', 'sobre_pes', 'obesidade', 'obesidade2'];
        resultSections.forEach(id => document.getElementById(id).style.display = "none");
        document.getElementById('col_img').style.display = "none";

        let backgroundColor = "";
        let backgroundColor2 = "";
        let text = "";
        let displayId = "";
        let dica = "";

        if (imc <= 18.49) {
            displayId = 'baixo';
            backgroundColor = "#74b6d8";
            backgroundColor2 = '#74b6d845'
            text = "Abaixo do peso!";
            dica = "O seu peso não está combinando com sua altura " +
                "está muito baixo. Aqui vai umas dicas," +
                "para aumentar o peso de forma saudável.<br>" +
                "1º Se alimente corretamente com alimentos saudáveis.<br>" +
                "2º Pratique Exercicios físico para o aumento da massa muscular.<br>" +
                "O Mais recomendado seria a procura de um médico, para um auxilio correto."

        } else if (imc >= 18.50 && imc <= 24.99) {
            displayId = 'normal';
            backgroundColor = "#26c7a4";
            backgroundColor2 = "#26c7a461"
            text = "Peso Ideal!";
            dica = "O seu peso está ideal com sua altura " +
                "continue assim o seu peso está normal " +
                "a dica é mantenha seu peso, e seu estilo de vida " +
                "com alimentação equilibrada e exercicios físicos!"

        } else if (imc >= 25 && imc <= 29.99) {
            displayId = 'sobre_pes';
            backgroundColor = "#ffd900";
            backgroundColor2 = "#ffd90057";
            text = "Sobre Peso!";
            dica = "O seu peso está um pouco acima do ideal! " +
                "Pessoas acima do peso, pode apresentar doenças " +
                "como diabetes e hipertensão, Aqui vai umas dicas," +
                "para a perca de peso de forma saudável.<br>" +
                "1º Se alimentar corretamente, evitar alimentos de alto sódio e gorduras.<br>" +
                "2º Praticar exercicios físicos para a perca de gordura.<br>" +
                "O Mais recomendado seria a procura de um nutricionista, para um auxilio correto."


        } else if (imc >= 30 && imc <= 39.99) {
            displayId = 'obesidade';
            backgroundColor = "#fea04a";
            backgroundColor2 = "#fea04a80";
            text = "Obesidade!";
            dica = "O seu peso está acima do Ideal!<br>" +
                "Pessoas com esse nivel de imc, " +
                "tem que se cuida melhor, mesmo que os exames estejam normais.<br> " +
                "Cuide de sua alimentação, e pratique exercicios físicos.<br> " +
                "Recomendamos que procure um nutricionista, para um auxilio correto.";

        } else {
            displayId = 'obesidade2';
            backgroundColor = "#ff454d";
            backgroundColor2 = "#ff454f85"
            text = "Obesidade Grave!";
            dica = "Sinal vermelho!!!<br>" +
                "Possibilidade de existirem doenças graves<br>" +
                "O tratamento deve ser o mais urgente.";

        }

        document.getElementById(displayId).style.display = "block";
        document.getElementById('col_img').style.display = "block";
        document.getElementById('dados_p').style.backgroundColor = backgroundColor;
        document.getElementById('dica_imc').style.backgroundColor = backgroundColor2;
        resutImc.innerHTML = imc
        resutTextImc.innerHTML = text;
        text_dica.innerHTML = dica;
    }
}