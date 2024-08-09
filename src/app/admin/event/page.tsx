"use client";

import { Event } from "@prisma/client";
import { Edit2, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { getAllEvents, createEvent, updateEvent, deleteEvent } from "./action";
import { useRouter } from "next/navigation";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchEvents = async () => {
      setEvents(await getAllEvents());
    };
    fetchEvents();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-16">
      <div className="col-span-7">
        <div className="mb-6 flex items-center justify-between">
          <div className=" text-3xl font-bold">All Events</div>
          <Link
            href="#"
            onClick={() => setSelectedEvent(null)}
            className=" flex items-center rounded-lg bg-blue-500 px-3 py-2 font-bold text-white"
          >
            <Plus size={18} className="mr-2" />
            Create New Event
          </Link>
        </div>
        <Table className="max-w-3xl">
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Redirect</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <EventRow
                key={event.id}
                event={event}
                setSelectedEvent={() => setSelectedEvent(event)}
                deleteSelectedEvent={() => {
                  deleteEvent(event.id);
                  getAllEvents().then((events) => {
                    setEvents(events);
                  });
                }}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="col-span-5 mr-10 p-4">
        <CreateOrEditEventPage
          event={selectedEvent}
          onSave={() => {
            setSelectedEvent(null);
            getAllEvents().then((events) => {
              setEvents(events);
            });
          }}
        />
      </div>
    </div>
  );
};

const EventRow = ({
  event,
  setSelectedEvent,
  deleteSelectedEvent,
}: {
  event: Event;
  setSelectedEvent: () => void;
  deleteSelectedEvent: () => void;
}) => {
  return (
    <TableRow>
      <TableCell>
        <img src={event.src} alt={event.title} className="h-20 w-20" />
      </TableCell>
      <TableCell>{event.title}</TableCell>
      <TableCell>{new Date(event.date).toDateString()}</TableCell>
      <TableCell>{event.redirect}</TableCell>
      <TableCell>
        <div className="my-auto flex items-center space-x-2">
          <button
            onClick={setSelectedEvent}
            className="flex gap-1 space-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            <Edit2 size={18} />
            Edit
          </button>

          <AlertDialog>
            <AlertDialogTrigger className="rounded-lg bg-red-500 p-2 text-white">
              <Trash2 size={18} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  Event
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500"
                  onClick={() => {
                    deleteSelectedEvent();
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </TableCell>
    </TableRow>
  );
};

const CreateOrEditEventPage = ({
  event,
  onSave,
}: {
  event: Event | null;
  onSave: () => void;
}) => {
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [date, setDate] = useState(
    event?.date.toISOString().substring(0, 10) || "",
  );
  const [src, setSrc] = useState(event?.src || "");
  const [redirect, setRedirect] = useState(event?.redirect || "");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setDate(event.date.toISOString().substring(0, 10));
      setSrc(event.src);
      setRedirect(event.redirect);
    } else {
      setTitle("");
      setDescription("");
      setDate("");
      setSrc("");
      setRedirect("");
    }
  }, [event]);

  const handleSave = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("src", src);
    formData.append("redirect", redirect);

    if (event) {
      await updateEvent(event.id, formData);
    } else {
      await createEvent(formData);
    }

    // router.push("/admin/event");

    onSave();
  };

  return (
    <div className="flex h-svh flex-col gap-4 overflow-y-auto px-4 pb-20">
      <h1 className="text-3xl font-semibold">
        {event ? "Edit Event" : "Create New Event"}
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="date" className="text-sm font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="src" className="text-sm font-medium">
            Image URL
          </label>
          <input
            type="text"
            id="src"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            className="mt-1 block w-full rounded border p-2"
          />
        </div>
        {src !== "" && (
          <div className="flex items-center justify-center p-4">
            <img
              src={src}
              alt="event"
              className="max-h-[200px] w-full rounded-xl object-contain"
            />
          </div>
        )}
        <div>
          <label htmlFor="redirect" className="text-sm font-medium">
            Redirect URL
          </label>
          <input
            type="text"
            id="redirect"
            value={redirect}
            onChange={(e) => setRedirect(e.target.value)}
            className="mt-1 block w-full rounded border p-2"
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white"
      >
        Save
      </button>
    </div>
  );
};

export default EventsPage;
