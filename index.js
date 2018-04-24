const clickCounter = require('./javascript/main.js');
import './styles/main.css';
import result from './polkan.txt';

window.onload = () => {
  clickCounter(result);
};
