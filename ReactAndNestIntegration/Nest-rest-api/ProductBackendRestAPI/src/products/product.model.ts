import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Product5')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pname: string;

  @Column()
  price: number;
}
/*export class Product {
  id: number;
  pname: string;
  price: number;

  constructor(
    public ide: number,
    public title: string,
    public rate: number,
  ) {
    this.id = ide;
    this.pname = title;
    this.price = rate;
  }
}*/
