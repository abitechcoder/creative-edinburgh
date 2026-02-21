import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useMember(business_id: number) {
    const { data, error, isLoading } = useSWR(`https://cha.merchantgroup.com.ng/businesses/${business_id}`, fetcher)
    return {
        member: data || null,
        error,
        isLoading
    }
}

export default useMember;