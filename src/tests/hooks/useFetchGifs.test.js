const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs");

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imgs y el loading el false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(12);
        expect(loading).toBeFalsy();
    });
    

})
