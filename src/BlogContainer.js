import Blog from './Blog'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'

const BlogContainer = createContainer(Blog, props => ({
  posts: query({ path: 'posts', limit: 5, after: props.params.after })
}))

export default BlogContainer
