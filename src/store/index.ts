import { createStore, ActionContext } from 'vuex'
import user from './user'
const store = createStore({
    modules:{
        user
    }
})
export default store