import Vue from "vue"

Vue.filter('convertCelsius', (item) =>{
    let convertItem = (item - 32) / 1.8;
    return convertItem.toFixed()
});

Vue.filter('convertKm', (item) =>{
    let convertItem = item * 1.6;
    return convertItem.toFixed()
});

Vue.filter('weatherIcon', (item) =>{
    switch (item) {
        case '01d':
            return 'wi wi-day-sunny'
        case '02d':
            return 'wi wi-day-sunny-overcast'
        case '01n':
            return 'wi wi-night-clear'
        case '02n':
            return 'wi wi-night-partly-cloudy'
    }

    switch (item.substr(0, 2)) {
        case '03':
            return 'wi wi-cloud'
        case '04':
            return 'wi wi-cloudy'
        case '09':
            return 'wi wi-showers'
        case '10':
            return 'wi wi-rain'
        case '11':
            return 'wi wi-thunderstorm'
        case '13':
            return 'wi wi-snow'
        case '50':
            return 'wi wi-fog'
    }
});

Vue.filter('dayName', (item)=>{
    return new Date(item).toString().split(' ')[0];
})