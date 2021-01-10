import { Movies } from "../types/Movie";

export default class useMovieResults {
    products: Movies = [
        {imdbID: '01010', title: 'Blade Runner', year: '1986'},
        {imdbID: '01010', title: 'Soylent Green', year: '1972'},
        {imdbID: '01010', title: '12 Monkeys', year: '1999'},
    ];
      
    getProducts(): Movies {
        return this.products;
    }
}
