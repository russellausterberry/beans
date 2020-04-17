import Vue from 'vue'
import Vuex from 'vuex'

import makeAvailable from './makeAvailable'

Vue.use(Vuex)   /* enables state management */

export default new Vuex.Store({
    modules: {
        makeAvailable
    }
})