import axios from 'axios';
import { Movies } from '../types/Movie';

export default class useMovieResults {
    products: Movies = [
        { imdbID: '01010', title: 'Blade Runner', year: '1986' },
        { imdbID: '01011', title: 'Soylent Green', year: '1972' },
        { imdbID: '01110', title: '12 Monkeys', year: '1999' },
    ];

    search = (title: string) => {
        const [state, dispatch] = useReducer(reducer, Init);
        dispatch({
            type: ActionType.Request,
        });

        if (!title.length) {
            return;
        }

        axios(`https://www.omdbapi.com/s=${title}&apikey=1a937fbc`).then((response) => {
            if (response.data.Response) {
                dispatch({
                    type: ActionType.Success,
                    results: response.data.Search,
                });
            } else {
                dispatch({
                    type: ActionType.Error,
                    error: response.data.Error,
                });
            }
        });

        return state;
    };

    getProducts(searchedTitle: string): Movies {
        return this.products;
    }
}
