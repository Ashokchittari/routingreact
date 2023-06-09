const MatchCard = props => {
  const {matchDetails} = props

  const matchDetails2 = {
    competingTeamLogo: matchDetails.competing_team_logo,
    competingTeam: matchDetails.competing_team,
    result: matchDetails.result,
    matchStatus: matchDetails.match_status,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails2
  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
