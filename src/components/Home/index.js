import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import TeamMatches from '../TeamMatches'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: false}

  componentDidMount = async () => {
    await this.fetchTeams()
  }

  fetchTeams = async () => {
    const iplTeams = await fetch('https://apis.ccbp.in/ipl')
    const teamsJson = await iplTeams.json()
    const camelTeams = teamsJson.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      teamsList: camelTeams,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    console.log(teamsList)
    return (
      <div className="main-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1 className="main-logo-heading">IPL Dashboard</h1>
        </div>
        <ul className="unordered-list">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            teamsList.map(each => <TeamCard eachTeam={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home
