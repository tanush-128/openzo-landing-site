"use server";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

const getAllEvents = async () => {
  const events = await db.event.findMany({});

  return events;
};

const createEvent = async (data: FormData) => {
  const event = await db.event.create({
    data: {
      title: data.get("title") as string,
      description: data.get("description") as string,
      date: new Date(data.get("date") as string),
      src: data.get("src") as string,
      redirect: data.get("redirect") as string,
    },
  });

  return event;
};

const updateEvent = async (id: string, data: FormData) => {
  const event = await db.event.update({
    where: {
      id,
    },
    data: {
      title: data.get("title") as string,
      description: data.get("description") as string,
      date: new Date(data.get("date") as string),
      src: data.get("src") as string,
      redirect: data.get("redirect") as string,
    },
  });

  //   revalidatePath("/admin/event");

  return event;
};


const deleteEvent = async (id: string) => {
    const event = await db.event.delete({
        where: {
        id,
        },
    });
    
    return event;
    }

export { getAllEvents, createEvent, updateEvent, deleteEvent };
