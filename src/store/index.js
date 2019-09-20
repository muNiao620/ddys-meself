import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cityId: '330100',
		regionId: ''
	},
	actions: {
		changeInfo (rgx, cityId, regionId) {
			rgx.commit('change', cityId, regionId)
		},
	},
	mutations: {
		change (state, cityId, regionId) {
			state.cityId = cityId,
			state.regionId = regionId
		},
	}
})