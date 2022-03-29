// PlayerScore` - component responsible for displaying a single score by one player 
// (e.g. as one line of the table) (e.g. `Neill 2000`)

function PlayerScore(props){
    return (
    <div>
        {props.player} - {props.score}
    </div>
    )
}

export default PlayerScore;