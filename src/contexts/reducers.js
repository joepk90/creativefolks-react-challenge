// Actions
export const ADD_COMMENT = "ADD_COMMENT";

// Action Creators
export function addComment(comment) {
    return { type: ADD_COMMENT, comment };
}

export const commentReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                body: action.comment.body,
                id: action.comment.id,
                postId: action.comment.postId
            }];
        // case 'REMOVE_COMMENT':
        default:
            return state;
    }
}