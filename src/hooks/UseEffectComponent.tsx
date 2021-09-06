import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    
    const [value, setValue] = useState(1);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setValue(v => v + 1);
        }, 1000);

        return () => window.clearInterval(timer);
    }, [setValue]);
    
    return (
        <div>
            {value}
        </div>
    )
}

export default UseEffectComponent
