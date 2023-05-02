import {useState} from 'react';

export default function Counter({name, points, pointsAdder}) {
    const [counter, setInnerCounter] = useState(0);

    return (
            <div>
                <button onClick={() => {
                    setInnerCounter(counter + 1);
                    pointsAdder(points);
                }}>+</button>
                <button disabled={counter==0} onClick={() => {
                    setInnerCounter(counter - 1);
                    pointsAdder(-points);
                }}>-</button>
                {name} : {counter}
            </div>
    )
}