use dataFlights;
db.voos.findOne({ $and: [{ litrosCombustivel: { $not: { $gt: 600 } } }, { litrosCombustivel: { $exists: true } }, { "empresa.nome": { $nin: ["GOL", "AZUL"] } }] });
