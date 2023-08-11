import { Request, Response } from "express";
import AddressService from "../services/address";

class AddressController {
  public service: AddressService;
  constructor() {
    this.service = new AddressService();
  }
  public async getHighestBalanceAddress(req: Request, res: Response) {
    try {
      const highestAccount = await this.service.getHighestBalanceAddress();
      res.status(200).send({ highestAccount });
    } catch (error) {
      console.error("error occured", error);
      res.status(500).send("Error while getting account with highest balance");
    }
  }
}

export default AddressController;
