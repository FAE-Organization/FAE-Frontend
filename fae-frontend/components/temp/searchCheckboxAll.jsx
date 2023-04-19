import { Checkbox } from "@chakra-ui/react"

export default function SearchCheckboxAll() {
    return (
        <Checkbox
            value='All'
            onChange={(event) => {
                if (event.currentTarget.checked) {
                    if (!allChecked) {
                        setCurrentSelection(['All', ...tempCheckboxData])
                        setAllChecked(true)
                    }
                } else {
                    const previousData = localStorage.key('beforeAll') ?
                        JSON.parse(localStorage.getItem('beforeAll')) : []
                    setCurrentSelection(
                        previousData.length === tempCheckboxData.length ?
                            [] : previousData
                    )
                }
            }}
        >
        </Checkbox>
    )
}