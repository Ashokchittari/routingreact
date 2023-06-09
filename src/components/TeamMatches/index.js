import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    return (
      <div className="blog-info">
        <img className="author-pic" src={teamBannerUrl} alt="team banner" />
        <LatestMatch details={latestMatchDetails} />
        <li>
          {recentMatches.map(each => (
            <MatchCard matchDetails={each} key={each.id} />
          ))}
        </li>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
