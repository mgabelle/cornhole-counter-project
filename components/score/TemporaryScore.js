export default function TemporaryScore({pointsPlayer1, pointsPlayer2, temporaryScore}) {
    const borderBottomBlack = {
        borderBottom: "1px solid black"
    }
    return (
        <>
            <style>
                    {
                        `
                            table {
                                border: 1px solid black;
                            }

                            table {
                                width: 60%;
                                border-collapse: seperate;
                                border-spacing: 0;
                                border-radius: 10px;
                                text-align: center;
                              }
                        `
                    }
            </style>
            <table>
                <tbody>
                    <tr>
                        <td style={borderBottomBlack}>Equipe 1</td>
                        <td style={borderBottomBlack}>Equipe 2</td>
                    </tr>
                    <tr>
                        <td style={borderBottomBlack}>{pointsPlayer1}</td>
                        <td style={borderBottomBlack}>{pointsPlayer2}</td>
                    </tr>
                    <tr colSpan={3}>
                        <td colSpan={3}>
                            {temporaryScore[0]} - {temporaryScore[1]}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}