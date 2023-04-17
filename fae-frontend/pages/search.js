import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"

export default function Search({ temp }) {
    return (
        <div>
            Search Page
            <FilterSidebar />
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            temp: 'temp'
        }
    }
}