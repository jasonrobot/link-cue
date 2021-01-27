export const ADD_LINK = 'ADD_LINK'
export const POP_LINK = 'POP_LINK'

export interface AddLinkAction {
    type: typeof ADD_LINK
    payload: string
}

export interface PopLinkAction {
    type: typeof POP_LINK
}

export type Action = AddLinkAction | PopLinkAction

export function addLink(link: string): Action {
    return {
        type: ADD_LINK,
        payload: link,
    }
}

export function popLink(): Action {
    return {
        type: POP_LINK,
    }
}
