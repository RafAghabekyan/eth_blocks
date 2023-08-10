class AddressController {
    public getHighestBalanceAddress(req, res) {
        try {
            res.send('HELLO!!!!!!!!!!!!!!!')
        } catch (error) {
            console.log('error occured', error);
        }
    }
}

export default AddressController;