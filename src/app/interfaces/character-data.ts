export interface CharacterData
{
// Aqui va la plantilla de los datos del JSON según RickAndMortyAPI
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    },
    // L que me entregará como datos
    results: [
        /**
         * Aqui defino lo que quiero obtener del recurso Character
         * de la API de RickAndMorty, en la documentacion salen las
         * variables que obtengo de cada personaje
        */
        {
            name: string,
            image: string,
            status: string,
            species: string,
            location: {
                name: string,
                url: string
            }
        }

    ]

}
