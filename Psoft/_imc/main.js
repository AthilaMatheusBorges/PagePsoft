function calcimc(){

    altura = document.getElementById("$altura").value;
    peso = document.getElementById("$peso").value;

    if (peso > 0 && altura > 0) {
        imc = peso / (altura ** 2);
        document.getElementById("$imc").value = "Seu IMC é: " + imc.toFixed(2);
        document.getElementById("$saude").value = recomendations(imc);

    }
}

function recomendations(imc) {
    health = "";

    if (imc < 17) {
        health += "Estar abaixo do peso é uma condição em que a pessoa pesa menos do que é considerado adequado para aquela altura, idade e sexo. Uma pessoa nestas condições pode estar com alguma doença que a está emagrecendo ou sua nutrição não está boa o suficiente. Normalmente estas pessoas podem ter deficiências de nutrientes como vitaminas, sais minerais, proteínas, gorduras ou sob o risco de estar com anorexia.";
        document.getElementById("$img").setAttribute("src","_imagens/IMC17.png");
    }
    else if (imc <= 18.49) {
        health += " ";
        document.getElementById("$img").setAttribute("src","_imagens/IMC18.png");
    }
    else if (imc <= 24.99) {
        health += "Estar dentro da faixa de peso normal significa ter um peso considerado adequado para sua altura, idade e sexo, de acordo com as faixas do IMC - momento de fazer a manutenção do peso. Para manter o peso é importante manter uma dieta balanceada (não basta alimentos corretos, mas também quantidades corretas) para seu organismo.";
        document.getElementById("$img").setAttribute("src","_imagens/IMC25.png");
    }
    else if (imc <= 29.99) {
        health += "O sobrepeso é uma condição em que a pessoa pesa mais do que é considerado adequado para aquela altura, idade e sexo. O sedentarismo e os maus hábitos alimentares levam ao aumento dessa parcela de indivíduos com sobrepeso a cada ano. Essa faixa, se analisada junto com outras medidas e índices, pode demonstrar um risco maior de doenças como diabetes tipo 2, dislipidemia (com colesterol HDL baixo e triglicérides altos), ácido úrico aumentado, hipertensão, entre outras.";
        document.getElementById("$img").setAttribute("src","_imagens/IMC30.png");
    }
    else if (imc <= 34.99) {
        health += "Somente o cálculo do IMC não é suficiente para diagnosticar obesidade. Na verdade, para além do IMC, são necessárias as seguintes medidas antropométricas: peso, estatura, espessura da dobra cutânea (bíceps, tríceps, subescapular e suprailíaca). O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. ";
        document.getElementById("$img").setAttribute("src","_imagens/IMC35.png");
    }
    else if (imc <= 39.99) {
        health += "Somente o cálculo do IMC não é suficiente para diagnosticar obesidade. Na verdade, para além do IMC, são necessárias as seguintes medidas antropométricas: peso, estatura, espessura da dobra cutânea (bíceps, tríceps, subescapular e suprailíaca). O tratamento desse quadro é dado através de mudanças no estilo de vida, associado ao tratamento multiprofissional com nutricionista, psicólogo e médico. No caso da obesidade grau II, o uso de medicações para a perda de peso também é um método que pode ser proposto diante de avaliação e acompanhamento médico.";
        document.getElementById("$img").setAttribute("src","_imagens/IMC40.png");
    }
    else {
        health += " Somente o cálculo do IMC não é suficiente para diagnosticar obesidade. Na verdade, para além do IMC, são necessárias as seguintes medidas antropométricas: peso, estatura, espessura da dobra cutânea (bíceps, tríceps, subescapular e suprailíaca). Entre as patologias associadas à obesidade grau 3, estão os distúrbios hormonais, cardiopatias, morte súbita, dermatites, osteoporose, hipertensão, hepatopatias e insuficiência venosa. Porém, segundo a Organização Mundial de Saúde (OMS), a obesidade de grau III é a principal causa de morte evitável do mundo. Nesses casos, esses pacientes podem optar por fazer a cirurgia de redução de estômago para controlar o peso e sair da obesidade.  ";
        document.getElementById("$img").setAttribute("src","_imagens/IMC400.png");
    }
    

    return health;
}