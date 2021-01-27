import {h} from 'preact'
import {connect} from 'react-redux'

import {RootState} from './reducers'

import Link from './Link'

function stateMap({linkQueue}: RootState) {
    return {linkQueue}
}

function Queue({
    linkQueue
}: ReturnType<typeof stateMap>) {
    return h('ul', null,
             linkQueue.map((link, index) => {
                 return h(Link, {text: link, isLink: index === 0})
             }))
}

export default connect(stateMap)(Queue)
