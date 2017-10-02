import Home from './Home'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'

const HomeContainer = createContainer(Home, props => ({
  posts: query({ path: 'posts', limit: 5, after: props.params.after })
}))

export default HomeContainer
