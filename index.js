import {Game} from './src/Game.js';
import {View} from './src/View.js';
import {Controller} from './src/Controller.js';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(
  root,
  {
    width: 480,
    height: 640,
    rows: 20,
    columns: 10
  }
);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;