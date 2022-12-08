import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const resolveUrl = (path: string) => `${baseUrl}${path}`;

export const api = {
  createContact: async (contactDetails: any) => {
    try {
      const url = resolveUrl(`/api/contact`);
      const { data } = await axios.post(url, contactDetails);
      console.log(data);
      return data;
    } catch (error) {
      console.log("API not working");
    }
  },
};
