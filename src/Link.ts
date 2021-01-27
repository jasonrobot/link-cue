import {h} from 'preact'
import {connect} from 'react-redux'
import {popLink} from './actions'

interface OwnProps {
    isLink: boolean
    text: string
}
const dispatchMap = {
    popLink
}

type Props = OwnProps & typeof dispatchMap
function Link({
    isLink,text,popLink
}: Props) {
    if (isLink)
        return h('li', null, h('a', {href: text, onclick: popLink, target: '_blank'}, text))
    else
        return h('li', null, text)
}

export default connect(null, dispatchMap)(Link)
