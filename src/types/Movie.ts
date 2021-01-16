export interface Movie {
    imdbID: string;
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
    isNominated: boolean;
}

export type Movies = Movie[];
