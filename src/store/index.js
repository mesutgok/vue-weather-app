import Vue from 'vue'
import Vuex from 'vuex'

import CityModule from '@/store/modules/cityModule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cities: CityModule
    }
})

export default store

