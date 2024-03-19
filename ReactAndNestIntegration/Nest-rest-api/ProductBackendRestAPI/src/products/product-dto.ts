import { IsNotEmpty } from 'class-validator';
export class ProductDto {
  @IsNotEmpty()
  public id: number;
  @IsNotEmpty()
  public pname: string;
  @IsNotEmpty()
  public price: number;
}
