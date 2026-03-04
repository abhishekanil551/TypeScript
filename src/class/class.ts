class Account {
  //readonly id: number; //in here readonly mean it readonly no modificantion
  //private owner:string;
  //private _balance:number;
  //nickname?: string; // in here question make mean optinal

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }

  deposite(amount: number): void {
    if (amount < -0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  //getter
  get Balance(): number {
    return this._balance;
  }

    //setter

//   set Balance(value: number){
//     if(value < 0)
//         throw new Error('Invalid value');
//     this._balance = value; 
//   } 
}

const account = new Account(1, "abhi", 0);
account.deposite(400);
console.log(account.Balance);
//account.Balance = 8   //setter 
//console.log(account.Balance);
