export default function TemporaryScore({pointsPlayer1, pointsPlayer2, temporaryScore}) {
    return (
        <>
            Points equipe 1 : {pointsPlayer1} <br/>
            Points equipe 2 : {pointsPlayer2} <br/>
            Score temporaire : {temporaryScore[0]} - {temporaryScore[1]}
        </>
    )
}