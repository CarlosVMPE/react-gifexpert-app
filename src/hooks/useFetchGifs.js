import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

/**
 * useEffect: lo necesitamos cada vez que se realiza un cambio
 * en la variable category, se va a volver a ejecutar y 
 * renderizar el componente.
 * - Se dispara la petición sólo si la categoría cambia
 * - No pueden ser async
 */

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);

    // [] solo quiero que se ejecute una unica vez, 
    // [category] para que se actualize en caso cambie dicha variable

    return state;
}
