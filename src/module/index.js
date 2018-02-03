
import registorModule from '../registorModule'
import login from './login'
import launch from './launch'

export default registorModule([
  { name: 'login', module: login },
  { name: 'launch', module: launch },
])
