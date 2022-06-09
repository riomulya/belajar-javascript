const server = new Server({
  host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
});

const cpuInformation = process.memoryUsage();

console.log(cpuInformation);
