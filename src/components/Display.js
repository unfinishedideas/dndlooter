import React, { useState, useEffect } from 'react';


const Display = (props) =>
{
    const [displayValue, setDisplayValue] = useState(props.displayValue);
    const [mode, setMode] = useState('waiting')

    useEffect(() => {
        if (typeof props.displayValue === 'object') {   
            setDisplayValue(parseLootResult(props.displayValue))
            setMode('currency');
        }
    }, [props])
    
    const parseLootResult = (rawResult) => {
        return {
            pp: rawResult.pp || 0,
            gp: rawResult.gp || 0,
            ep: rawResult.ep || 0,
            sp: rawResult.sp || 0,
            cp: rawResult.cp || 0 
        };
    }

    return(
        <div style={styles.displayStyle}>
            {mode === 'currency' &&
                <div>
                    <p>PP: {displayValue.pp}</p>
                    <p>GP: {displayValue.gp}</p>
                    <p>EP: {displayValue.ep}</p>
                    <p>SP: {displayValue.sp}</p>
                    <p>CP: {displayValue.cp}</p>
                </div>
            }
            {mode === 'waiting' &&
                <p>Waiting Input</p>
            }
        </div>
    )
}

export default Display;

const styles = {
    displayStyle: {
        backgroundColor: 'rgb(40,100,80)',
        height: 600,
        width: 500
    }
}