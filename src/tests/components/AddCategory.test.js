import React from 'react';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Simular cambios en un input
    test('Debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input');
       const value = 'Hola mundo';
       input.simulate('change', { target: { value } });
       expect(wrapper.find('p').text().trim()).toBe(value);
    });

    // Simular submit de un formulario
    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    // Simular llamado de la función y limpiando el inputValue
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Samurai X';

        // 1 simular el inputchange
        input.simulate('change', { target: { value } });

        // 2 simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // 3 debe haber llamdo el setcategories
        expect(setCategories).toHaveBeenCalled();
        
        // Espero que se haya llamado con una función
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        // 4 el value del input debe de estar vacío, string vacío
        expect(input.text()).toBe('');

    });
    
    
    

})
