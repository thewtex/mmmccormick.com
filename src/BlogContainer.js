import { createContainer, query } from '@phenomic/preset-react-app/lib/client'

import Blog from './Blog'

const BlogContainer = createContainer(Blog, props => ({
  page: query({ path: 'posts', id: props.params.splat })
}))

export default BlogContainer
