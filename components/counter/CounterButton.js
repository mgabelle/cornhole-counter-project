import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Counter({name, variable, setter, disabledCounter, color}) {
    return (
            <>
                {name}

                <br/>
                
                <ButtonGroup 
                    variant="contained" 
                    aria-label="outlined button group"
                    color={color}
                    >
                    <Button 
                        onClick={() => {
                            if (!disabledCounter) {
                                setter(1);
                            }
                    }}>+</Button>
                    <Button variant='outlined'>{variable}</Button>
                    <Button
                        onClick={() => {
                            if (variable > 0) {
                                setter(-1);
                            }
                    }}>-</Button>
                </ButtonGroup>
            </>
    )
}