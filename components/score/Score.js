import Button from '@mui/material/Button';

export default function Score({totalScore}) {
    const buttonStyles = {width:"30px", height:"30px", minWidth:"30px"};
    
    const leftButtonStyle = {
        ...buttonStyles,
        marginRight: "10px"
    }

    const rightButtonStyle = {
        ...buttonStyles,
        marginLeft: "10px"
    }
    return (
        <>
            <style>
                {
                    `.Score {
                        width: 100%;
                        display: flex;
                        height: 8%;
                        justify-content: center;
                        align-items: center;
                        font-size: 3em;
                    }`
                }
            </style>
            <div className="Score">
                <Button variant="contained" color='primary' sx={leftButtonStyle}></Button>
                    {totalScore[0]} 
                    - 
                    {totalScore[1]}
                <Button variant="contained" color='error' sx={rightButtonStyle}></Button>
            </div>
        </>
    );
}