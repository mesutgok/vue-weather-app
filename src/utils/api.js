// Api
import axios from 'axios';

const API = axios.create({
    baseURL: process.env.VUE_APP_API_PATH
})

const getWeather = (params)=>{
    return API.get(`weather?q=${params.city}&appid=${process.env.VUE_APP_SECRET_KEY}&units=imperial`)
}

const getWeatherDetail = (params)=>{
    return API.get(`forecast/daily?q=${params.city}&appid=${process.env.VUE_APP_SECRET_KEY}&units=imperial&cnt=6`)
}

export default {
    API,
    getWeather,
    getWeatherDetail
}