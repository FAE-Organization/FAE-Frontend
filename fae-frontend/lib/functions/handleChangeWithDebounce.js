import { useDispatch } from "react-redux"
import debounce from "./debounce"

export function handleChangeWithDebounce(dispatchAction, debounceTime, dispatchLoadingAction) {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(dispatchLoadingAction(false))
        const value = event.target.value
        updateWithDebounce(value)
    }

    const updateWithDebounce = debounce((value) => {
        dispatch(dispatchAction(value))
    }, debounceTime)

    return { handleChange }
}

