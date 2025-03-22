function retirarDinero(monto) {
    if (monto > 0) {
        if (monto <= saldo) {
            saldo -= monto;
            return saldo;
        } else {
            return "Saldo insuficiente";
        }
    } else {
        return "Monto inválido";
    }
}

document.getElementById("retirar").addEventListener("click", function () {
    var monto = document.getElementById("monto").value;
    var resultado = retirarDinero(monto);
    document.getElementById("resultado").innerHTML = resultado;
});