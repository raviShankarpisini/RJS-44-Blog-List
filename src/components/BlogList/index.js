// Write your JS code here

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="blog-list-container">
      <ul>
        {blogsList.map(eachItem => (
          <BlogItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
