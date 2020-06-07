db.voos.find({
    "litrosCombustivel": {
      $lte: 600
    },
    "empresa.nome":  { $ne: ["GOL", "AZUL"] }
  }
).limit(1);
