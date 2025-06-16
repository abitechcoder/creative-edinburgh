import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useSectors() {
    const { data, error, isLoading } = useSWR("https://clear-crystal-scorpio.glitch.me/sectors", fetcher)
    return {
        sectors: data || [],
        error,
        isLoadingSect: isLoading
    }
}

export default useSectors;