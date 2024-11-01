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
// class BankAcoount{
//     accountNumber:number;
//     balance:number;

//     constructor( account:number, initialBlalnce:number){
//         this.accountNumber = account;
//         this.balance = initialBlalnce;
//     }

//     deposit(amount:number):void{
//         this.balance += amount;
//         console.log(`you deposit was succesfull: current balance R${this.balance}`);
//     }

//     withdraw(amount:number):void{
//        if ( this.balance >= amount
//         ) {
//             this.balance -= amount
//             console.log(`withdrawal was succesfull: current balance R${this.balance}`);
//        }else {
//         console.log(`insufficient funds`);
//        }

//     }

// }


// const account = new BankAcoount(11123,500)
// account.deposit(1000)
// account.withdraw(300)

// class Products {
//    name:string;
//    price:number;
//    stock:number;
//    constructor (name:string,price:number,stock:number){
//     this.name =name;
//     this.price =price;
//     this.stock =stock;
//    }

//    isAvailable():boolean{
// if (this.stock >0){
//     return true;
// }else{
//     return false ;
// }
//    }

//    purchase(quantity:number):string{
//     if (this.stock >= quantity) {
//         this.stock -= quantity
//         return `purchase successfull ${quantity} ${this.name}(s) bought remaining stock ${this.stock}`
        
//     }else {
//         return `Insufficient stock for the required quantity `
//     }
//    }
// }
//  const product = new Products("Car",65000,10)
//  console.log(product.isAvailable());
//  console.log(product.purchase(3));
//  console.log(product.purchase(2));

// let day :number;
//  switch(day){
//     case 0:
//         console.log(`Today is Sunday`);
//         break;
        
//         case 1 :
//         console.log(`Today is Monday`);

//         case 2 :
//         console.log(`Today is Tuesday`);

//         case 3:
//         console.log(`Today is Wednesday`);

//  }

class TrafficLights {
    color:string;

    constructor(color:string){
        this.color = color.toLocaleLowerCase();
    }

    getAction():string{
        switch (this.color) {
            case "red":
                
                return "Stop";
                
            case "yellow":
                
                return "Prepare to stop";

            case "green":
                
                return "Go";
        
            default:
                    return "Invalid color";
        }
    }



}






