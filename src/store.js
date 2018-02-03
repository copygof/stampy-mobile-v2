
import { createStore, combineReducers } from 'redux'
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
const reducer =  combineReducers({
  todos,
})

let store = createStore(reducer)

export default store
