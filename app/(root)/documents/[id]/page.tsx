import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

const Documents = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect('/');

  //TODO: Assess the permissions of user to access document
  return (
    <main className='flex w-full items-center flex-col'>
      <CollaborativeRoom 
       roomId={id}
       roomMetadata={room.metadata}/>
    </main>
  )
}

export default Documents