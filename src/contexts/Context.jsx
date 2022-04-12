

import { createContext } from 'react';

export const Context = createContext();

const ContextProvidor = ({ children }) => {

    const posts = [
        {
            "id": 1,
            "title": "Post 1"
        },
        {
            "id": 2,
            "title": "Post 2"
        },
        {
            "id": 3,
            "title": "Post 3"
        }
    ]

    const comments = [
        {
            "id": 1,
            "body": "some comment data related to post 1",
            "postId": 1
        },
        {
            "id": 2,
            "body": "some more comment data to show",
            "postId": 1
        },
        {
            "id": 3,
            "body": "Here's a comment!",
            "postId": 2
        }
    ]

    return (
        <Context.Provider value={{ posts, comments }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvidor;