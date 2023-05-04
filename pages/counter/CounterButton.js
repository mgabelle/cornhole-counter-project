export default function Counter({name, variable, setter, disabledCounter}) {
    return (
            <div>
                <button disabled={disabledCounter} onClick={() => {
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