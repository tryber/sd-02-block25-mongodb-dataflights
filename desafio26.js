db.voos.find({
    "litrosCombustivel": {
        $gt: 1000
    },
  },
  { "litrosCombustivel ": 1 }
).limit(1);
