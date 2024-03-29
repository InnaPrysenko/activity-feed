"use client";
import { useActivityFeed } from "@/context/activity-feed-context";
import NoteComponent from "../note";
import React, {FC} from 'react';

const NotesList: FC = () => {
  const { notes } = useActivityFeed();
  return (
    <div className="flex flex-col">
      {notes?.map((note, i) => (
        <NoteComponent
          key={note.id}
          note={note}
          isLast={i === notes.length - 1}
        />
      ))}
    </div>
  );
};

export default NotesList;
