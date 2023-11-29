//Switch case

const metodoPago  = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'efectivo':
        console.log("Pagaste con efectivo");
        break;
    case 'cheque':
        console.log("Pagaste con cheque");
    default:
        console.log("Metodo de pago no soportado");    
}