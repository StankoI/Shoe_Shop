
export class User {

    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: string;

    constructor(__id: string,
        _name: string,
        _email: string,
        _phoneNumber: string,
        _address: string,
        _role: string,) {
        this._id = __id;
        this.name = _name;
        this.email = _email;
        this.phoneNumber = _phoneNumber;
        this.address = _address ;
        this.role = _role;
    }
}
