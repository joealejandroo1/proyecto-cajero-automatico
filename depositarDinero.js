document.getelementById('depositarDinero').addEventListener('click', function(){
    var monto = document.getElementById('monto').value;
    var resultado = depositarDinero(monto);
    document.getElementById('resultado').innerHTML = resultado;
});

function depositarDinero(monto) {
    if (monto <= 0) {
        alert('Monto inválido');
        return 'Monto inválido';
    }

    saldo += parseInt(monto);
    return "Depósito exitoso. Su saldo es: " + saldo;
}
