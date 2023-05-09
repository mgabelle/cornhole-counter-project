export default function Score({totalScore}) {
    return (
        <>
            <style>
                {
                    `.Score {
                        width: 100%;
                        display: flex;
                        height: 8%;
                        justify-content: center;
                        font-size: 3em;
                    }`
                }
            </style>
            <div className="Score">
                {totalScore[0]} - {totalScore[1]}
            </div>
        </>
    );
}