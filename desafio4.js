use dataFlights;
db.voos.find({
    "empresa.nome": { $eq: "AZUL" }
});
