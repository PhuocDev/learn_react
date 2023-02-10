import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './data/sampleRecipes.json';
import Menu from './component/Menu';
import AppDateTimePicker from './dateTimePicker/Main'
import { Todo } from './todo/todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Menu data={data}/>
  // <AppDateTimePicker/>
  <Todo/>
);

