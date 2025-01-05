import axios from "axios";

const API_URL = process.env.STRAPI_URL || "http://localhost:1337";

export const fetchEvents = async () => {
	 try {
     const res = await axios.get(`${API_URL}/events/${event}`);
     return res.data;
   } catch (error) {
     console.error("Error fetching event:", error);
     throw error;
   }
};

export const fetchCalendar = async (calendarId: string) => {
  try {
        const res = await axios.get(`${API_URL}/calendars/${calendarId}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching calendar:', error);
        throw error;
    }
};
