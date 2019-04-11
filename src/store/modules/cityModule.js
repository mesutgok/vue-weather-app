
// initial state
const state = {
    cityList : [
        {name: 'İstanbul', color: 'turquoise'},
        {name: 'Roma', color: 'orange'},
        {name: 'Stockholm', color: 'belize-hole'},
        {name: 'Prag', color: 'wisteria'},
        {name: 'Paris', color: 'midnight-blue'}
    ]
};

// getters
const getters = {
    getCityList: (state) => {
        return state.cityList;
    }
};

// mutations
const mutations = {
    setCityList: (state, value) => {
        return state.cityList.push(value)
    },
};
// actions
const actions = {
    callSetCityList: (context, value) => {
        context.commit('setCityList', value);
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
