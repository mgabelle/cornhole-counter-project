export default function Counter({name, variable, setter}) {
    return (
            <div>
                <button onClick={() => {
                    setter(1);
                }}>+</button>
                <button disabled={variable==0} 
                        onClick={() => {
                    setter(-1);
                }}>-</button>
                {name} : {variable}
            </div>
    )
}