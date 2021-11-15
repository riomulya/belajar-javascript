function panggilFilterParameters() {
    var item = [{
            negara: 'Indonesia',
            benua: 'Asia'
        },
        {
            negara: 'Jerman',
            benua: 'Eropa'
        },
        {
            negara: 'Spanyol',
            benua: 'Eropa'
        },
        {
            negara: 'Korea',
            benua: 'Asia'
        },
        {
            negara: 'Portugal',
            benua: 'Eropa'
        },
        {
            negara: 'Amerika Serikat',
            benua: 'Amerika'
        },
    ];

    var benuaEropa = item.filter(function (item) {
        return item.benua === "Asia";
    })

    console.log(benuaEropa);
    var benuaEropa = item.filter(function (item2) {
        return item2.benua === "Eropa";
    })

    console.log(benuaEropa);
}

panggilFilterParameters()