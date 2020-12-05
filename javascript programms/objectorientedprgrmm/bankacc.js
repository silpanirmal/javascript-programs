class Bank{
constructor(Accountnumber,Name,Balance){
this.Accountnumber=Accountnumber;
this.Name=Name;
this.Balance=Balance;

}
getBank(){
    console.log(this.Accountnumber);
    console.log(this.Name);
    console.log(this.Balance);
}

}
class Withdraw{
    constructor (Amountwithdrawn){
        this.Amountwithdrawn=Amountwithdrawn;
    }
    getWithdraw(){
        console.log(this.Amountwithdrawn)
    }

}
class Depositamount{
    constructor(Depositamount){
        this.Depositamount=Depositamount;
    }
    getDepositamount(){
        console.log(this.Depositamount)
    }
}
let obj1=new Bank(2210,"silpa",10000)
obj1.getBank();
let obj2=new Withdraw(5000);
obj2.getWithdraw();
let obj3=new Depositamount(2000);
obj3.getDepositamount();
