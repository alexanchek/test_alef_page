import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import InfoChildrenReducer from './reducers/InfoChildrenReducer';
import InfoPersonalReducer from './reducers/InfoPersonalReducer'

const rootReducer = combineReducers({
    infoPersonal: InfoPersonalReducer,
    infoChildren: InfoChildrenReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

