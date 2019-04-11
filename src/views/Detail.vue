<template>
    <div class="detail__item" :class="$route.params.color" v-if="weatherDetail">
<!--        <router-link :to="{name: 'Main'}">Back</router-link>-->
        <ul class="detail__list">
            <li class="detail__list-item" v-for="(item,index) in weatherDetail.list" :key="index">
                <h3 class="detail__list-title" v-if="index === 0">{{$route.params.id}}</h3>
                <h3 class="detail__list-title" v-else>{{item.dt * 1000 | dayName}}</h3>
                <i :class="item.weather[0].icon | weatherIcon" :title="item.weather[0].description"></i>
                <span class="detail__temp">{{item.temp.max | convertCelsius }} °C</span>
            </li>
        </ul>

    </div>
</template>

<script>
    import api from '@/utils/api'
    import '@/utils/filter'

    export default {
        name: 'Detail',
        computed: {},
        data(){
            return{
                weatherDetail: null
            }
        },
        created(){
            api.getWeatherDetail({city: this.$route.params.id})
                .then(res =>{
                    return this.weatherDetail = res.data
                })
                .catch(() => {
                    this.$router.push({name: 'Main'})
                })
        }
    }
</script>
