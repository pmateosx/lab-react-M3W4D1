import { useEffect, useState } from "react"
import { getPostList } from "../../services/PostList"

const PostList = () => {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        getPostList()
            .then(posts => {
                setPostList(posts)
                console.log(posts);
            })
    }, [setPostList])

    return (
        <div className="PostList">
            {postList.map(post => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList