import GetRequest from "./GetRequest";

const readline = require('node:readline');


function promptForInput(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function runGetRequest(): Promise<void> {

  const url = await promptForInput('Enter the URL: ');

  const protocol = await promptForInput('Write the protocol (http or https): ');

  const intervalStr = await promptForInput('Write the interval (in milliseconds): ');

  const validProtocols = ['http', 'https'];

  const parsedInterval = parseInt(intervalStr, 10);

  if (!validProtocols.includes(protocol) || isNaN(parsedInterval) || parsedInterval <= 0) {
    console.log('Invalid Input. Make sure to provide a valid URL, a valid protocol, and a numeric range greater than zero.');
    return;
  }

  const getRequest = new GetRequest({
    address: url,
    protocol: protocol as 'http' | 'https',
    interval: parsedInterval
  });

  getRequest.start();

  process.on('SIGINT', () => {
    getRequest.pause();
    console.log('Application paused. Press Ctrl + C again to exit.');
  });
  
}

runGetRequest().catch((error) => {
  console.error('Ocorreu um erro:', error);
});