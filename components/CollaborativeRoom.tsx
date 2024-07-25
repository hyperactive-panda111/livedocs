'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import Loader from './Loader'
import Header from './Header'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'
import ActiveCollaborators from './ActiveCollaborators';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import Image from 'next/image';
import { updateDocument } from '@/lib/actions/room.actions';

const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title)
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const currentUserType = 'editor';
  const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === 'Enter') {
      setLoading(true);

      try {
        if (documentTitle !== roomMetadata.title) {
          const updatedDocument = await updateDocument(roomId, documentTitle);

          if (updatedDocument) {
            setEditing(false);
          }
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setEditing(false);
        updateDocument(roomId, roomMetadata.title);
      } 
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [roomId, documentTitle]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<Loader/>}>
          <div className='collaborative-room'>
            <Header>
                <div ref={containerRef}className='w-fit gap-2 flex items-center
                justify-center'>
                {editing && !loading ? (
                  <Input 
                   type='text'
                   value={documentTitle}
                   //@ts-ignore
                   ref={inputRef}
                   placeholder='Enter title'
                   onChange={(e) => setDocumentTitle(e.target.value)}
                   onKeyDown={updateTitleHandler}
                   disable={!editing}
                   className='document-title-input'
                  />
                ) : (
                  <>
                    <p className='document-title'>{documentTitle}</p>
                  </>
                )}

                {currentUserType === 'editor' && !editing && (
                  <Image
                    src={'/assets/icons/edit.svg'}
                    alt='edit'
                    width={24}
                    height={24}
                    onClick={() => setEditing(true)}
                    className='pointer'
                  />
                )}

                {currentUserType !== 'editor' && !editing &&  (
                  <p className='view-only-tag'>View only</p>
                )}

                {loading && <p className='text-sm text-gray-400'>saving...</p>}
                </div>
                <div className='flex w-full flex-1 justify-end gap-2'>
                  <ActiveCollaborators />
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
             </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom