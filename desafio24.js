db.voos.find({
    "empresa.nome": {
      $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"]
    },
  },
  { "vooId": 1 }
).limit(1);
