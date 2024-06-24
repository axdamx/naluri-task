import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCircumference = async () => {
    const response = await axios.get("http://localhost:3001/circumference");
    if (!response) {
      throw new Error("Failed to fetch circumference");
    }
    return response.data.circumference;
  };

  const useGetCircumferenceQuery = () => {
    return useQuery({
      queryFn: () => fetchCircumference(),
      queryKey: ['pi'],
    });
  };
  
  export default useGetCircumferenceQuery;