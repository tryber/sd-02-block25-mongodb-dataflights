use dataFlights;
db.voos.find({ $and: [{ litrosCombustivel: { $not: { $gt: 600 } } }, { litrosCombustivel: { $exists: true } }, { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } }] }).limit(1);
