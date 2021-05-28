function qtdAgua(peso){
    return peso * 35;
}

function calcIMC(peso, altura){
    return (peso / (altura * altura)).toFixed(1);
}

function qtdProteinas(peso){
    return Math.round((peso * 0.88)) + " até " + Math.round((peso * 1.32));
}

function qtdCarboidratos(peso){
    return Math.round((peso * 1.6)) + " até " + Math.round((peso * 1.7));
}

function qtdCalorias(peso, meta_peso){
    if (peso > meta_peso){
        return peso * 20;
    }else if (peso == meta_peso){
        return peso * 25;
    }else{
        return peso * 30;
    }
}

function qtdGorduras(peso, meta_peso){
    return (qtdCalorias(peso, meta_peso) / 100) * 10;
}

function btnCalcular(){
    document.getElementById('form-final').style.display = "none";
    document.getElementById('resultados').style.display = "block";

    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    meta_peso = document.getElementById('meta_peso').value;

    v_qtdAgua = qtdAgua(peso);
    v_calcIMC = calcIMC(peso, altura);
    v_qtdProteinas = qtdProteinas(peso);
    v_qtdCalorias = qtdCalorias(peso, meta_peso);
    v_qtdCarboidratos = qtdCarboidratos(peso);
    v_qtdGorduras = qtdGorduras(peso, meta_peso);

    document.getElementById('qtdAgua').innerHTML = "Recomendado" + '<BR>' + v_qtdAgua;
    document.getElementById('calcIMC').innerHTML = v_calcIMC;
    document.getElementById('qtdProteinas').innerHTML = v_qtdProteinas;
    document.getElementById('qtdCalorias').innerHTML = v_qtdCalorias;
    document.getElementById('qtdCarboidratos').innerHTML = v_qtdCarboidratos;
    document.getElementById('qtdGorduras').innerHTML = v_qtdGorduras;
}

function genero(){
    document.getElementById('genero').style.display = "none";
    document.getElementById('atividade-diaria').style.display = "block";
}
function atividadeDiaria(){
    document.getElementById('atividade-diaria').style.display = "none";
    document.getElementById('form-final').style.display = "block";
}