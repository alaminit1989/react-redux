import { createStore} from 'redux'
import rootReducer from './reducer/RootReducer'

const store = createStore(rootReducer)

export default store

// Store 
//      Action
//      Reducers

// React Components
//      Child Components
//          Child Components

// React-Redux Connect
//      Provider Component
//      Store
//      App Component


// If we need data
// mapStateToProps(state) return object
// if we want to dispatch some action
// mapDispatchToProps(dispatch) return object

// connect(mapStateToProps, mapDispatchToProps)(Component)