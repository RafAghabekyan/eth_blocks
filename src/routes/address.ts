import { Router } from "express";
import AddressController from "../controllers/address";

const createAddressRouter = () => {
  const router = Router();
  const path = "/address";
  const addressController = new AddressController();
  router.get(
    `${path}/highestBalance`,
    addressController.getHighestBalanceAddress.bind(addressController)
  );

  return router;
};

export default createAddressRouter();
