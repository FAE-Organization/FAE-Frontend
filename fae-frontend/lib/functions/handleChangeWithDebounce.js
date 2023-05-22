import { useDispatch } from "react-redux"
import debounce from "./debounce"

export function handleChangeWithDebounce(dispatchAction, debounceTime) {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const value = event.target.value
        updateChange(value)
    }

    const updateChange = debounce((value) => {
        dispatch(dispatchAction(value))
    }, debounceTime)

    return { handleChange }
}

