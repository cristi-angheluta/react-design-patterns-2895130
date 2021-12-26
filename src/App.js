import { UserInfo } from './UserInfo'
import { withUser } from './withUser'

const UserInfoWithLoader = withUser(UserInfo, '345')

function App() {
  return (
    <>
      <UserInfoWithLoader/>
    </>
  )
}

export default App
