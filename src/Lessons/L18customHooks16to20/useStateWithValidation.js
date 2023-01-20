import { useCallback, useState } from 'react'

export default function useStateWithValidation(validationFunction, initialValue) {
    const [state, setState] = useState(initialValue)
    const [isValid, setIsValid] = useState(() => validationFunction(state))

    const onChange = useCallback(
        nextState => {
            const value =
                typeof nextState === 'function' ? nextState(state) : nextState
            setState(value)
            setIsValid(validationFunction(value))
        },
        [validationFunction]
    )

    return [state, onChange, isValid]
}
