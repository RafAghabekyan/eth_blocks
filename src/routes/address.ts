import { Router } from "express";
import AddressController from "../controllers/address";

class Address {
    public router = Router();
    
    private addressController: AddressController;
    private path = '/address'

    constructor() {
        this.addressController = new AddressController()
        this.initialiseRoutes();
    }

    private initialiseRoutes() {
        this.router.get(`${this.path}/highestBalance`, this.addressController.getHighestBalanceAddress);
    }
}

export default Address;