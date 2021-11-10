function callobject() {
    var house = {
        type: "72m",
        price: 200000,
        place: ["depok", "pepok", "lepok", "qepok"],
    }
    house.dev = "atma";
    house.price = 10000000000;

    console.log(house)
    console.log(house.place[2], house.price)
}

callobject()