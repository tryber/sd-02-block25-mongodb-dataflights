db.voos.find({
  $sun: ["passageiros.pagos", "passageiros.gratis"]
},
{ "vooId": 1, "mes": 1, "ano": 1 }
);
