// export class Ingredient{
//     public name : string;
//     public amount : number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// Above code is same as below code and below code is an shortcut of an above code.
export class Ingredient{
    constructor(public name: string, public amount: number) {}
    
}