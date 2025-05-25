import { IdType } from "../types/idType";
import { InStock } from "../types/inStock";

class Product {
    id: IdType;
    name: string;
    description: string;
    price: number;
    img: string;
    categories: string[];
    color: string;
    in_stock: InStock[];
    createdAt: Date;

    constructor(_id: IdType,
        _name: string,
        _description: string,
        _price: number,
        _img: string,
        _categories: string[],
        _color: string,
        _in_stock: InStock[],
        _createdAt: Date
        ) {

        this.id = _id;
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.img = _img;
        this.categories = _categories;
        this.color = _color;
        this.in_stock = _in_stock;
        this.createdAt = _createdAt;
    }
}

export default Product;