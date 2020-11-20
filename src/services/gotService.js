
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks = async (page) => {
        const allBooks = await this.getResource(`/books?page=${page}&pageSize=12`);
        return allBooks.map(item => this._transformBook(item));
    }
    
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book)
    }
    
    getAllCharacters = async (page) => {
        const allChar = await this.getResource(`/characters?page=${page}&pageSize=10`);
        return allChar.map(item => this._transformChar(item));
    }
    
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformChar(character)
    }
    
    getAllHouses = async (page) => {
        const allHouses = await this.getResource(`/houses?page=${page}&pageSize=10`);
        return allHouses.map(item => this._transformHouse(item));
    }
    
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house)
    }

    _noDataDesc(data){
        for(let key in data){
            if (data[key] === '' || data[key].length === 0 || data[key][0] === ''){
                data[key] = 'No data'
            } 
        }
        return data
    }

    _extractId(item) {
        return item.match(/\/([0-9]*)$/)[1];
    }

    _transformChar(char) {
        return this._noDataDesc({
            url: this._extractId(char.url),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        });
    }

    _transformHouse(house) {
        return this._noDataDesc({
            url: this._extractId(house.url),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        });
    }

    _transformBook(book) {
        return this._noDataDesc({
            url: this._extractId(book.url),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
        });
    }
}
