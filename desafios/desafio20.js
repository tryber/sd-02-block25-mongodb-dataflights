use dataFlights;

db.voos.count({ "passageiros.pagos": { $gt: 7000 } });
