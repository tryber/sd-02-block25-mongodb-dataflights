use dataFlights;
db.voos.find({ "empresa.nome": /azul/i }).limit(10).pretty();
