<template>
    <router-link :to="{name:'Detail', params:{id: name, color: color}}" class="cities__item" :class="color" v-if="weather">
        <h3 class="cities__title">{{name}}</h3>
        <span class="cities__temp"><i class="wi wi-thermometer"></i> {{weather.main.temp | convertCelsius }} °C</span>
        <span class="cities__ws">{{weather.wind.speed | convertKm }} km/s</span>
        <i class="cities__overlay " :class="weather.weather[0].icon | weatherIcon" :title="weather.weather[0].description"></i>
    </router-link>
</template>

<script>

    import api from '@/utils/api'
    import '@/utils/filter'

    export default {
        name: "Cities",
        props:['name', 'color'],
        data(){
            return{
                weather:null
            }
        },
        created(){
            api.getWeather({city: this.name})
                .then(res =>{
                    return this.weather = res.data
                })
        }
    }
</script>