export function weather(url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json') {
    return fetch(url)
        .then(result => result.json())
        .then(data => {
            return data;
           
        })
}