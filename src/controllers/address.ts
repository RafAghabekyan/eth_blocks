import BlockModel from "../models/block";

class AddressController {
    public getHighestBalanceAddress(req, res) {
        try {
            BlockModel.bulkCreate([
                {
                    blockNumber: 'a',
                },
                {
                    blockNumber: 'b',
                }
            ])
            res.send('HELLO!!!!!!!!!!!!!!!')
        } catch (error) {
            console.log('error occured', error);
        }
    }
}

export default AddressController;