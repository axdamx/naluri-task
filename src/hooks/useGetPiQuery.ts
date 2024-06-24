import { useQuery } from "@tanstack/react-query";
import axios from "axios";

  const fetchPi = async () => {
    const response = await axios.get("http://localhost:3001/pi");
    if (!response) {
      throw new Error("Failed to fetch pi");
    }
    return response.data.pi;
  };


  const useGetPiQuery = () => {
    return useQuery({
      queryFn: () => fetchPi(),
      queryKey: ['pi'],
    });
  };
  
  export default useGetPiQuery;