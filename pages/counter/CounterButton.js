import {useState, useEffect} from 'react';

export default function Counter(props) {
    const [innerScore, setInnerScore] = useState(0);
    const [counter, setInnerCounter] = useState(0);

    useEffect(() => {
        setInnerScore(counter*props.points);
        console.log(innerScore);
    });

    return (
            <div>
                <button onClick={() => {
                    setInnerCounter(counter + 1);
                }}>+</button>
                <button disabled={counter==0} onClick={() => {
                    setInnerCounter(counter - 1);
                }}>-</button>
                {props.name} : {counter}
            </div>
    )
}