db.voos.remove({
  $and: [
    { "empresa.nome": { $eq: "AZUL" } },
    { "litrosCombustivel": { $lt: 400 } }
  ]
});
