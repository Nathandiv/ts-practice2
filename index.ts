// class User{
//     name:string;
//     age:number;

//     constructor( name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }

//     isAdult():boolean{
//         if (this.age >=18 ) {
//             return true;
            
//         }else{
//             return false;
//         }
//     }

// }

// const user1=new User('Nathan',30)
// console.log(user1.isAdult());
class BankAcoount{
    accountNumber:number;
    balance:number;

    constructor( account:number, initialBlalnce:number){
        this.accountNumber = account;
        this.balance = initialBlalnce;
    }

    deposit(amount:number):void{
        this.balance += amount;
        console.log(`you deposit was succesfull: current balance R${this.balance}`);
    }

    withdraw(amount:number):void{
       if ( this.balance >= amount
        ) {
            this.balance -= amount
            console.log(`withdrawal was succesfull: current balance R${this.balance}`);
       }else {
        console.log(`insufficient funds`);
       }

    }

}


const account = new BankAcoount(11123,500)
account.deposit(1000)
account.withdraw(300)







