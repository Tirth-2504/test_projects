const mongoose = require('mongoose');
const { User, createUser } = require('../functions/userModel');

//test suite
describe('User Model Tests', () => {
    //jest hook
    beforeEach( () => {
        jest.clearAllMocks;
    });

    it('should create a new user', async () => {
        //Arrange
        const mockUser = {
            firstName: 'Tirth Patel',
            email: 'tirthpatel7411.com',
            password: '01110100 01100101 01100011 01101000',
            age: 21,
        }
         
        //Action
        const result1 = jest.spyOn(User.prototype, 'save').mockImplementation(mockUser);
        const result2 = new createUser('Tirth Patel', 'tirthpatel7411.com', '01110100 01100101 01100011 01101000', 21);

        //Assert
        expect(result).toEqual(result2);
        expect(User.prototype.save()).toHaveBeenCalledTimes(1);
    });  
});
         