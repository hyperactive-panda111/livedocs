import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import Loader from './Loader'

const CollaborativeRoom = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom