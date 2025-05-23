import { IdType } from "../types/idType";

class Product {
    id: IdType;
    name: string;
    description: string;
    price: number;
    availability: number;
    sizes:number[];
    img: string;
    colors:string[];
    categories: string[];
    createdAt: Date;
    updatedAt: Date;

    constructor(_id: IdType,
        _name: string,
        _description: string,
        _price: number,
        _availability: number, 
        _sizes:number[],
        _img: string,
        _colors:string[],
        _categories: string[],
        _createdAt: Date,
        _updatedAt: Date) {
        this.id = _id;
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.availability = _availability;
        this.sizes = _sizes;
        this.img = _img;
        this.colors = _colors;
        this.categories = _categories;
        this.createdAt = _createdAt;
        this.updatedAt = _updatedAt;
    }
}

export default Product;