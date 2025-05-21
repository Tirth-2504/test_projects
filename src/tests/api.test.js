const fetchData = require('../functions/api.js');

 //mock this globle fetch function
    global.fetch = jest.fn();

describe('fetchData', () => {
   beforeEach(() => {
        //reset the mock object before each test
        fetch.mockClear();
    });

    
    it('fetches data from an API endpoint and returns it as JSON', async () => {

        //AAA  pattern

        //Assemble
        //mock the function response
        const mockResponse = {userId: 1, id: 1, title: 'delectus aut autem', "compile": false};

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        //Action
        const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');

        //Assert
        expect(data).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    });

});