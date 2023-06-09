const LatestMatch = props => {
  const {details} = props
  const camelDetails = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    firstInnings: details.first_innings,
    id: details.id,
    manOfTheMatch: details.man_of_the_match,
    matchStatus: details.match_status,
    result: details.result,
    secondInnings: details.second_innings,
    umpires: details.umpires,
    venue: details.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = camelDetails
  return (
    <div>
      <h1>Latest Matches</h1>
      <div>
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
