import {h, render} from 'preact'
import { Provider } from "react-redux"

import {store} from './reducers'

import AddLink from './AddLink'

import Queue from './Queue'

import PopButton from './PopButton'

const app =
    h('div', null,
      h(AddLink, null),
      h(PopButton, null),
      h(Queue, null))

const mainDiv = document.getElementById('main')

if (mainDiv !== null) render(h(Provider, {store}, app), mainDiv)