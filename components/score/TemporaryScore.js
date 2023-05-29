import { isBlank } from "../../utils"

import Tooltip from '@mui/material/Tooltip';

export default function TemporaryScore({team1Name, team2Name, pointsPlayer1, pointsPlayer2, temporaryScore}) {
    const borderBottomBlack = {
        borderBottom: "1px solid rgba(0,2,9,0.8113446062018558)",
    }
    
    const tdHeaderStyle = {
        ...borderBottomBlack,
        color: "white",
        background: "rgba(0,2,9,0.8113446062018558)",
        width: "50%"
    }

    const tdHeaderLeft = {
        ...tdHeaderStyle,
        borderRadius: "9px 0px 0px 0px",
    }

    const tdHeaderRight = {
        ...tdHeaderStyle,
        borderRadius: "0px 9px 0px 0px"
    }

    const blueTeam = isBlank(team1Name) ? "Equipe Bleu" : team1Name;
    const redTeam = isBlank(team2Name) ? "Equipe Rouge" : team2Name;

    return (
        <>
            <style>
                    {
                        `
                            table {
                                border: 1px solid rgba(0,2,9,0.8113446062018558);
                                width: 75%;
                                max-width: 400px;
                                margin-right: 1em;
                                border-spacing: 0;
                                border-radius: 10px;
                                text-align: center;
                                background: linear-gradient(132deg, rgba(240,238,238,0.0018207966780462437) 0%, rgba(120,120,124,0.5284314409357493) 49%, rgba(0,2,9,0.010224158022584029) 100%);
                                box-shadow: 5px 5px 5px black;
                              }
                        `
                    }
            </style>
            <table>
                <tbody>
                    <tr>
                        <td style={tdHeaderLeft}>{blueTeam}</td>
                        <td style={tdHeaderRight}>{redTeam}</td>
                    </tr>
                    <tr>
                        <td style={borderBottomBlack}>{pointsPlayer1}</td>
                        <td style={borderBottomBlack}>{pointsPlayer2}</td>
                    </tr>
                    <tr colSpan={3}>
                        <td colSpan={3}>
                            {temporaryScore[0]} - {temporaryScore[1]} 
                            <Tooltip 
                                title="Score temporaire"
                                enterTouchDelay={0}>
                                <span style={{
                                    position: "relative",
                                    display: "inline-block",
                                    left: "30%",
                                    width: "18px",
                                    height: "20px",
                                    borderRadius: "9px",
                                    textAlign: "center",
                                    backgroundColor: "black",
                                    color: "white"
                                }}>?</span>
                            </Tooltip>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}