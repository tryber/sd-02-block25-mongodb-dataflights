use dataFlights;
db.voos.find({ $and: [{ "empresa.nome": "AZUL" }, { natureza: "Doméstica" }] }).count();
db.resumoVoos.insertOne({ "empresa": "AZUL", "totalVoosDomesticos": 39092 });
