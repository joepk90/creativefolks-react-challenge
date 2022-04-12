export const filterComments = (postId, comments) => {
    return comments.filter(comment => parseInt(comment.postId) === parseInt(postId))
}