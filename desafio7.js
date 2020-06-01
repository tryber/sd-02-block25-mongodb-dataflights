use dataFlights;
db.voos.find({}, { vooId: 1 }).limit(1).skip(11);
