'use client';
// Note.tsx
import React, {memo} from 'react';
import {Note, User} from '@/types';
import {useActivityFeed} from '@/context/activity-feed-context';
import {ChevronDown} from 'lucide-react';
import ProfileLink from '../common/profile-link';
import {Timeline} from './timeline';

interface NoteProps {
    note: Note;
    isLast: boolean;
    isFirst?: boolean;
}

const NoteComponent: React.FC<NoteProps> = ( { note, isLast, isFirst } ) => {
    const { contactUser, currentUser, deleteNote } = useActivityFeed();

    return (
        <div className="w-full flex gap-x-2.5 gap-y-4 md:gap-4 relative">
            <Timeline
                dateTime={note.timestamp}
                noteKey={note.type.key}
                isLast={isLast}
            />
            <NoteBlock
                note={note}
                currentUser={currentUser}
                contactUser={contactUser}
                onDeleteNote={deleteNote}
            />
        </div>
    );
};

const NoteBlock: React.FC<{
    note: Note;
    currentUser: User;
    contactUser: User;
    onDeleteNote: ( noteId: string ) => void;
}> = ( { note, currentUser, contactUser, onDeleteNote } ) => {
    return (
        <div
            className={`bg-foreground-300 flex gap-4 p-4 items-center justify-between group text-xs md:text-sm w-full mb-4`}
        >
            <div className="flex flex-col">
                <div className="row">
                    <ProfileLink href={`/users/${currentUser.id}`} label="You"/> had a{' '}
                    {note.type.label.toLowerCase()} with{' '}
                    <ProfileLink
                        href={`/users/${contactUser.id}`}
                        label={contactUser.name}
                    />
                </div>
                <p className="text-neutral-500 text-sm">{note.content}</p>
            </div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button
                        className="rounded-full w-[35px] h-[35px] inline-flex bg-cyan-500 items-center justify-center text-white outline-none"
                        aria-label="Customise options"
                    >
                        <ChevronDown/>
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="bg-white rounded-md p-[5px] shadow will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                    >
                        <DropdownMenu.Item
                            className="group text-[13px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                            <button
                                onClick={() => onDeleteNote( note.id )}
                            >Delete
                            </button>

                        </DropdownMenu.Item>


                        <DropdownMenu.Arrow className="fill-white"/>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

        </div>
    );
};
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


export default memo(
    NoteComponent,
    ( prev, next ) => prev.note.id === next.note.id
);
