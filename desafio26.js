use dataFlights;
db.voos.findOne({
  $and: [
    { litrosCombustivel: {$not: {$gt:600}} },
    {
      $or: [
        {"empresa.nome": {$ne: "GOL"}},
        {"empresa.nome": {$ne: "AZUL"}}
      ]
    },
    { litrosCombustivel: {$exists: true} }
  ]
});
