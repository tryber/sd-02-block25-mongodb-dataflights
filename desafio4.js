use dataFlights;
db.voos.find({"empresa.nome":/AZUL/i}).limit(10).pretty();
