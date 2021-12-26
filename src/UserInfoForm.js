import { withEditableUser } from './withEditableUser'
/* defining an inline component
  (props) => {
    return <></>
  }
*/
const userInfoForm = (userId) => withEditableUser(({user, onChangeUser, onResetUser, onSaveUser}) => {
  const {name, age, hairColor} = user || {}
  return user
    ?
    <form onSubmit={e => e.preventDefault()}>
      <label>Name:
        <input type="text" value={name} onChange={e => onChangeUser({name: e.target.value})}/>
      </label>
      <div/>
      <label>Age:
        <input type="number" value={age} onChange={e => onChangeUser({age: Number(e.target.value)})}/>
      </label>
      <div/>
      <label>Hair Color:
        <input type="text" value={hairColor} onChange={e => onChangeUser({hairColor: e.target.value})}/>
      </label>
      <div/>
      <button onClick={onSaveUser}>Save</button>
      <button onClick={onResetUser}>Reset</button>
    </form>

    : <p>Loading...</p>
}, userId)

export const UserInfoForm = ({userId}) => {
  const Form = userInfoForm(userId)
  return <Form/>
}
