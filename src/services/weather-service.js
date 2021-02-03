export default class WeatherService {

    _appid = '&appid=3d804e267cd0e37da31684c46c3758f1';
    _apiBase = 'https://api.openweathermap.org/data/2.5/weather?q=';

    async GetCity(url) {
        const res = await fetch(this._apiBase+url+this._appid);
        if(!res.ok) throw new Error(`Could not fetch ${url}`);
        const body = await res.json();

        return body;
    }
}