import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useBusinessesById(sectorId: number) {
    const { data, error, isLoading } = useSWR(`https://clear-crystal-scorpio.glitch.me/businesses?sector=${sectorId}`, fetcher)
    return {
        businesses: data || [],
        error,
        isLoadingBiz: isLoading
    }
}

export default useBusinessesById;