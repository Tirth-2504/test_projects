const mongoose = require('mongoose');
const { User, createUser } = require('../functions/userModel.js');

//test suite
describe('User Model Tests', () => {
    //jest hook
    beforeEach( () => {
        jest.clearAllMocks();
    });

    it('should create a new user', async () => {
        //Arrange
        const mockUser = {
            _id: '68365fc09aba3468fa8bdb93',
            firstName: 'Tirth Patel',
            email: 'tirthpatel7411@gmail.com',
            password: 'Password',
            age: 21,
        }
         
        // Mock the save method to resolve with mockUser
        jest.spyOn(User.prototype, 'save').mockImplementation(function() {
            return Promise.resolve(this);
        });

        //Action
        const result = await createUser('Tirth Patel', 'tirthpatel7411@gmail.com', 'Password', 21);

        //Assert
        expect(result).toMatchObject(mockUser);
        expect(User.prototype.save).toHaveBeenCalledTimes(1);
    });  
});
         