function checkCashRegister(price, cash, cid) {
  var denom = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];
  cid = cid.reverse();
  let change = (cash - price) * 100;
  let amount_money = 0,
    cidChange = [];
  cid.forEach((e) => {
    amount_money += e[1];
  });

  amount_money *= 100;
  // console.log(amount_money, change);
  // if (change > amount_money) {
  //   return { status: 'INSUFFICIENT_FUNDS', change: [] };
  // }
  if (change === amount_money) {
    return { status: 'CLOSED', change: cid.reverse() };
  }

  denom.forEach((e) => {
    let denomInt = e[1] * 100;
    change -= denomInt;

    console.log(change);
  });

  console.log(change);
  // denom.forEach((e) => {
  //   if (e[1] <= change) {
  //     let denomMultiple = e[1] * 100;
  //     console.log(denomMultiple);
  //     change = change - denom;
  //     cidChange.push(e[1]);
  //   }
  // });

  if (change !== 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return cid;
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);

// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
