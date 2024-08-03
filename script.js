function validaçãoFormulario(e) {
    e.preventDefault();
    
    var numA = document.getElementById('numA');
    var numB = document.getElementById('numB');
    
    var valorA = parseFloat(numA.value);
    var valorB = parseFloat(numB.value);
    
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '';
    
    if (isNaN(valorA) || isNaN(valorB)) {
        messageDiv.innerHTML = 'Por favor, insira números válidos.';
        return;
    }
    
    if (valorA > valorB) {
        messageDiv.innerHTML = 'Erro, o número A é maior que o número B.';
        messageDiv.style.color = 'red';
    } else if (valorA < valorB) {
        messageDiv.innerHTML = 'Sucesso, o número B é maior que o número A.';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.innerHTML = 'Os números são iguais.';
        messageDiv.style.color = 'blue';
    }
}

document.getElementById('myform').addEventListener('submit', validaçãoFormulario);
