export class MovieModel {

    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public belongs_to_collection: any,
        public budget: number,
        public genres: Array<{
            id: number,
            name: string
        }>,
        public homepage: string,
        public id: number,
        public imdb_id: string,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public production_companies: Array<{
            id: number,
            logo_path: any,
            name: string,
            origin_country: string
        }>,
        public production_countries: Array<{
            iso_3166_1: string,
            name: string
        }>,
        public release_date: string,
        public revenue: number,
        public runtime: number,
        public spoken_languages: Array<{
            iso_639_1: string,
            name: string
        }>,
        public status: string,
        public tagline: string,
        public title: string,
        public video: boolean,
        public vote_average: number,
        public vote_count: number
    ) { }

}
