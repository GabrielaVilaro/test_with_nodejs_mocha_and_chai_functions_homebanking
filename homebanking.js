var nombreUsuario = "GabrielaVilaro";
var saldoCuenta = 2900;
var limiteExtraccion = 1500;
var codigoCuenta = "España69";

exports.addCash = function sumarDinero(dinero){
            result = saldoCuenta += dinero; 
            return result;
        
}

exports.subtractCash = function restarDinero(dinero){
            result = saldoCuenta -= dinero;
            return result;
}

exports.limitExtraction = function cambiarLimiteDeExtraccion(monto) {
    if (monto <= 0) {
        response = "El monto ingresado no es válido.";
        return response;
    }
    else {
        limiteExtraccion = monto;
        response = "El límite de extracción se actualizó correctamente: " + monto;
        return response;
    }
}

exports.extracCash = function extraerDinero(dinero){
    if (dinero <= 0) {
        response = "El monto ingresado no es válido";
        return response;
    }
    else {
        saldoActual = saldoCuenta - dinero
        response = "El saldo actual es: " + saldoActual;
        return response;
    }
}

exports.depositCash = function depositarDinero(dineroDepositado) {
    if (dineroDepositado <= 0) {
        response = "El monto ingreado no es válido.";
        return response;
    }
    else {
        saldoActual = saldoCuenta + dineroDepositado;
        response =  "Depositaste: " + dineroDepositado + " " + "Tu saldo actual es: " + saldoActual
        return response;
        }
    }

