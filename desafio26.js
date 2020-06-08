use dataFlights;
db.voos.findOne({
    $and: [
        { litrosCombustivel: { $not: { $gt: 600 } } },
        {
            $nor: [
                { 'empresa.nome': 'GOL' }, { 'empresa.nome': 'AZUL' }
            ]
        },
        { litrosCombustivel: { $exists: true } }
    ]
});
