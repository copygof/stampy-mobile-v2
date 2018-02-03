import LoginForm from './component/LoginForm'
import LoginPage from './page/Login'

// reducer
// lang
// page

const moduleLogin = {
  page: {
    'login': {
      page: LoginPage,
      options: {}
    },
  },
  component: {LoginForm},
  reducer: () => {},
  action: {},
  actionTypes: {},
}

export default moduleLogin
