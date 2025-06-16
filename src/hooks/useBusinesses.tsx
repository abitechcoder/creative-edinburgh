import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useBusinesses() {
    const { data, error, isLoading } = useSWR("https://clear-crystal-scorpio.glitch.me/businesses", fetcher)
    return {
        businesses: data || [],
        error,
        isLoadingBiz: isLoading
    }
}

export default useBusinesses;