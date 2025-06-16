import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useMember(business_id: number) {
    const { data, error, isLoading } = useSWR(`https://clear-crystal-scorpio.glitch.me/businesses/${business_id}`, fetcher)
    return {
        member: data || null,
        error,
        isLoading
    }
}

export default useMember;