import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPostList } from "../../services/PostList"
import './PostList.scss'
import { useTheme } from "../../contexts/ThemeContext"

const PostList = () => {
    const [postList, setPostList] = useState([])
    const { theme }  = useTheme()

    useEffect(() => {
        getPostList()
            .then(posts => {
                setPostList(posts)
            })
    }, [setPostList])

    return (
        <div className="PostList">
            {postList.map(post => {
                return (
                    <div key={post.id} className='card'>
                        <Link className={`user-section ${theme}`} to={`/users/${post.userId}`}>
                            <div className="picture-card"></div>
                            <small>View User</small>
                        </Link>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList