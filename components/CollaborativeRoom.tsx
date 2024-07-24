import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import Loader from './Loader'
import Header from './Header'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader/>}>
          <div className='collaborative-room'>
            <Header>
                <div className='w-fit gap-2 flex items-center
                justify-center'>
                <p className='document-title'>Share</p>
                </div>
                <SignedOut>
                <SignInButton />
                </SignedOut>
                <SignedIn>
                <UserButton />
                </SignedIn>
             </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom