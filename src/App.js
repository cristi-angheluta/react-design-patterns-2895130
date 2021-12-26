import { withEditableUser } from './withEditableUser'
import { UserInfoForm } from './UserInfoForm'

const UserInfoWithEditor = withEditableUser(UserInfoForm, '345');

function App() {
	return (
		<UserInfoWithEditor />
	);
}

export default App;
