"use server";

import { revalidatePath } from "next/cache";
import dayjs from "dayjs";

export async function createEvent(
  formData: FormData,
): Promise<{ error?: string; success?: boolean }> {
  const title = formData.get("title") as string | null;
  const description = formData.get("description") as string | null;
  const date = formData.get("date") as string | null;
  const time = formData.get("time") as string | null;

  // Validate form data
  if (!title || !description || !date || !time) {
    return { error: "All fields are required" };
  }

  // Parse and validate date and time using dayjs
  const dateTime = dayjs(`${date}T${time}:00`);
  if (!dateTime.isValid()) {
    return { error: "Invalid date or time format" };
  }

  try {
    // Send data to Strapi
    const response = await fetch(`${process.env.STRAPI_API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // Ensure the token is secure
      },
      body: JSON.stringify({
        data: {
          title,
          description,
          date: dateTime.toISOString(),
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Strapi responded with status ${response.status}`);
    }

    // Revalidate the path
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error creating event:", error);
    return { error: "Failed to create event" };
  }
}
