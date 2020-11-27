const { getGifs } = require("../../helpers/getGifs");

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(12);
    });
    
    test('Debe de traer 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
})
