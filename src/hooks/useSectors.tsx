import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useSectors() {
    const { data, error, isLoading } = useSWR("https://cha.merchantgroup.com.ng/sectors", fetcher)
    return {
        sectors: data || [],
        error,
        isLoadingSect: isLoading
    }
}

export default useSectors;