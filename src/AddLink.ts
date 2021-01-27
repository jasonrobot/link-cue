import {h} from 'preact'
import {connect} from 'react-redux'
import {useState} from 'preact/compat'
import {addLink} from './actions'

const dispatchMap = {
    addLink
}

function AddLink({addLink}: typeof dispatchMap) {

    const [input, setInput] = useState('')

    const handleInput = (event: InputEvent) => {
        setInput((event.currentTarget as HTMLInputElement).value)
    }

    function buttonClickHandler() {
        addLink(input)
        setInput('')
    }

    return h('div', null,
             h('input', {
                 type: 'text',
                 onchange: handleInput,
                 value: input
             }),
             h('button', {
                 onclick: buttonClickHandler
             }, 'Add Link'))
}

export default connect(null, dispatchMap)(AddLink)
