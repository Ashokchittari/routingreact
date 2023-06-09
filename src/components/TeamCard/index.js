import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = teamProp => {
  const {eachTeam} = teamProp
  console.log(eachTeam)
  const {name, id, teamImageUrl} = eachTeam
  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div type="button" className="list-item">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="heading-team">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
