/* Desafio 14
Utilizando os operadores lógicos, conte os documentos em que o campo aeroportoDestino.pais
seja igual a BRASIL, ARGENTINA ou CHILE. */

use dataFlights;
db.voos.count(
  {
    $or: [
      { "aeroportoDestino.pais": "BRASIL" },
      { "aeroportoDestino.pais": "ARGENTINA" },
      { "aeroportoDestino.pais": "CHILE" }
    ]
  }
);
