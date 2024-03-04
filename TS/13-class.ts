class Product{
    id: number;
    pname: string;
    price: number;
    constructor(id:number, pname:string, price : number){
        this.id= id;
        this.pname= pname;
        this.price= price;
    }
}
const p1 = new Product(1,'Laptop', 40000);
console.log(p1.id + "  "+ p1.pname+"  "+[p1.price]);

