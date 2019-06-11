<template>
    <div class="cities">
      <cities v-for="city in cityList" :key="city.name" :name="city.name" :color="city.color"></cities>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import Cities from '@/components/Cities'

export default {
  name: 'Main',
  components:{Cities},
  computed: {
    ...mapGetters({
      cityList : 'getCityList'
    })
  },
  created(){}
}
</script>
