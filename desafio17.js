use dataFlights;
db.voos.find({ "decolagens": { $gt: 20 } }).count();
