// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, publishedDate, description} = blogDetails
  return (
    <li className="blogs-list">
      <div className="name-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
      <hr className="seperator" />
    </li>
  )
}

export default BlogItem
