import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useBusinessesById(sectorId: number) {
    const { data, error, isLoading } = useSWR(`https://cha.merchantgroup.com.ng/businesses?sector=${sectorId}`, fetcher)
    return {
        businesses: data || [],
        error,
        isLoadingBiz: isLoading
    }
}

export default useBusinessesById;