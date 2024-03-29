import './index.scss'
import { Host } from 'utils/types'

type Props = { user: Host }

export default function Profile({ user }: Props): JSX.Element {
  return (
    <div className="profile">
      <div className="profile__names">
        {user.name.split(' ')[0]}
        <br />
        {user.name.split(' ')[1]}
      </div>
      <img
        src={user.picture}
        alt={'Photo de profil de ' + user.name}
        className="profile__picture"
      />
    </div>
  )
}
