/* Desafio 15
Utilizando os operadores lógicos, conte os documentos em que o campos aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
 */

use dataFlights;
db.voos.count(
  {
    $nor: [
      {
        "aeroportoDestino.continente": "EUROPA",
        "aeroportoDestino.continente": "ÁSIA",
        "aeroportoDestino.continente": "OCEANIA"
      }
    ]
  }
);
