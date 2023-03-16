function calcularCosto() {
  const adults = parseInt(document.getElementById('adults').value);
  const children = parseInt(document.getElementById('children').value);
  const hour = document.getElementById('hour').value; // Agregamos esta línea para obtener el valor del input con id 'hour'
  let total = adults * 10 + children * 6;
  let message = `Cantidad de pasajeros: ${adults + children} <br> Total de costo: $${total} <br> Numero de boleto: ${Math.floor(Math.random() * 100000)} <br> Hora marcada: ${hour}`; //Concatenamos la hora marcada al mensaje
  if (adults === 1 && children > 4) {
    message = "Solo se permiten 4 menores por adulto";
  } else if (adults === 2 && children > 3) {
    message = "Solo se permiten 3 menores por 2 adultos";
  } else if (adults === 3 && children > 2) {
    message = "Solo se permiten 2 menores por 3 adultos";
  } else if (adults === 4 && children > 0) {
    message = "No se permiten menores con 4 adultos";
  }
  localStorage.setItem("ticket", message);
}
