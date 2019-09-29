import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		orgId: '9',
	},
	actions: {
		changeId (idx, orgId) {
			idx.commit('change', orgId)
		},
	},
	mutations: {
		change (state, orgId) {
			state.orgId = orgId
			// console.log(state.orgId)
		},
	}
})