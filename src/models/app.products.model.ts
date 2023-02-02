export class Product {
  // lets support property indexsers to
  // read proeprty values dynamically
  // x will be property name and its tyope can be any
  // so that the 'any' type of value can be read
  [x:string]:any;
  constructor(
    public ProductId:number,
    public ProductName:string,
    public Manufacturer: string,
    public Category: string,
    public Price: number
  ){}
}
