// Desafio 4
// Retorne os 10 primeiros documentos com voos da empresa AZUL.

use dataFlights;
db.voos.find({"empresa.nome": "AZUL"}).limit(10);
