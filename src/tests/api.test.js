const { compile } = require('ejs');
const fetchData = require('../functions/api.js');

desribe('fetchData', () => {
    //mock this globle fetch function
    global.fetch = jest.fn();

    
    it('fetchData dataa from an API endpoint and return it as JSON', () => {
        //mock the function response
        const mockResponse = {userId: 1, id: 1, title: 'delectus aut autem', compile: false};

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

    });

});