import { useState } from "react"

export default function useToggle(initialState?: boolean){
    
    const [isTrue, setIsTrue] = useState(initialState || false)

    const setTrue = () => setIsTrue(true)
    const setFalse = () => setIsTrue(false)

    return {
        isTrue,
        setFalse,
        setTrue,
    }
}