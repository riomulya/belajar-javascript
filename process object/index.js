const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = "Rio";
const environment = "Development";

for (let i = 0; i <= 10000; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
