export class DataService{

    static BASE_URL = 'https://catfact.ninja/breeds'

    static getCatPage(){
        return fetch(this.BASE_URL).then(resp=>resp.json())
    }
}