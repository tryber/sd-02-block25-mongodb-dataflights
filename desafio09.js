use dataFlights;
db.voos.find({ ano: { $lt: 2017 } }).count();
