export class Company {
  public compName: string;
  public compSymbol: string;
  constructor(public description: string, public symbol: string) {
    this.compName = description;
    this.compSymbol = symbol;
  }
}

export class Quote {
  public compName: string;
  public compSymbol: string;
  public changeToday: number;
  public currentPrice: number;
  public openingPrice: number;
  public highPrice: number;

  constructor(
    name: string,
    symbol: string,
    d: number,
    c: number,
    o: number,
    h: number
  ) {
    this.compName = name;
    this.compSymbol = symbol;
    this.changeToday = d;
    this.currentPrice = c;
    this.openingPrice = o;
    this.highPrice = h;
  }
}

// d: Change
// c: Current price
// o: Open price of the day
// h: High price of the day

export class SentimentObj {
  public month: string;
  public change: number;
  public mspr: number;
}

export class Sentiment {
  public compName: string;
  public compSymbol: string;
  public sentimentObj: SentimentObj;
  constructor(name: string, symbol: string, month: string, obj: SentimentObj) {
    this.compName = name;
    this.compSymbol = symbol;
    this.sentimentObj = obj;
  }
}
