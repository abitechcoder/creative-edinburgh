import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useBusinesses() {
    const { data, error, isLoading } = useSWR("https://cha.merchantgroup.com.ng/businesses", fetcher)
    return {
        businesses: data || [],
        error,
        isLoadingBiz: isLoading
    }
}

export default useBusinesses;