import changeTagline from './changeTagline'
// import changeBackground from './changeBackground'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    changeTagline,
    // changeBackground
})

export default rootReducer