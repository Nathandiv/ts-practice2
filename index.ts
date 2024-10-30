class User{
    name:string;
    age:number;

    constructor( name:string, age:number){
        this.name = name;
        this.age = age;
    }

    isAdult():boolean{
        if (this.age >=18 ) {
            return true;
            
        }else{
            return false;
        }
    }

}

const user1=new User('Nathan',30)
console.log(user1.isAdult());
