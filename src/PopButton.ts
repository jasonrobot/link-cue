import { h } from 'preact'
import { connect } from 'react-redux'
import { popLink } from './actions'

const popButtonDispatch = {
    popLink
}

function PopButton({
    popLink
}: any) {
    return h('button', { onclick: popLink }, 'Pop Link')
}

export default connect(null, popButtonDispatch)(PopButton)
