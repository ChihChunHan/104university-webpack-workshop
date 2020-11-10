import Node from './libs/createNode.js'
import "./style/main.css"
// const svg = require('svg-url-loader!./assets/angellist.svg')

import img from "./assets/1019-200x300.jpg"
// const svg = require('./assets/angellist.svg')

console.log(img);
const body = document.querySelector("body")
const p = new Node().createTag("P")
body.appendChild(p.node)