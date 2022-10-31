var denom = [
  { name: 'ONE HUNDRED', val: 100 },
  { name: 'TWENTY', val: 20 },
  { name: 'TEN', val: 10 },
  { name: 'FIVE', val: 5 },
  { name: 'ONE', val: 1 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  var volume_up = [];
  let change = cash - price;
  var register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      console.log(acc);
      return acc;
    },
    { total: 0 }
  );

  if (register.total === change) {
    return { status: 'CLOSED', change: cid };
  }
  if (register.total < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  denom = denom.reverse();
  denom.forEach((e) => {
    var temp = 0;
    while (register[e.name] > 0 && change >= e.val) {
      change -= e.val;
      register[e.name] -= e.val;
      temp += e.val;
      change = Math.round(change * 100) / 100;
    }
    if (temp > 0) {
      volume_up.push([e.name, Math.round(temp * 100) / 100]);
    }
  });

  if (volume_up.length < 1 || change > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change: volume_up };
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
