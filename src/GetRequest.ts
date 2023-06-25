import axios, { AxiosResponse } from 'axios';

interface GetRequestOptions {
  address: string;
  protocol: 'http' | 'https';
  interval: number;
}

export default class GetRequest {

    private intervalId: NodeJS.Timeout | null;
    private address: string;
    private protocol: 'http' | 'https';
    public interval: number;
  
  
    constructor(options: GetRequestOptions) {
      this.intervalId = null;
      this.address = options.address;
      this.protocol = options.protocol;
      this.interval = options.interval;
    }
  
    public start(): void {
      
      if (this.intervalId) {
        console.log('The command is already running.');
        return;
      }
  
      console.log(`Starting the GET command for ${this.protocol}://${this.address}`);
  
      this.intervalId = setInterval(() => {
        this.sendRequest();
      }, this.interval);
    }
  
    public pause(): void {
      if (!this.intervalId) {
        console.log('The command is not running.');
        return;
      }
  
      console.log('Pausing the GET command.');
  
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    private sendRequest(): void {
      const url = `${this.protocol}://${this.address}`;
      axios
        .get(url)
        .then((response: AxiosResponse) => {
          console.log(`GET for ${url} - Status: ${response.status}`);
        })
        .catch((error: any) => {
          console.error(`GET for ${url} - Error: ${error.message}`);
        });
    }
  }

