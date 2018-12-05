import React from 'react';
import { createStore } from 'redux';
import rootReducer from '../reducers/index'

export const store = createStore(rootReducer);

export default store;