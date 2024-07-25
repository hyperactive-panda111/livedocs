import { useOthers } from '@liveblocks/react';
import React from 'react'
import Image from 'next/image';

const ActiveCollaborators = () => {
    const others = useOthers();
    const collaborators = others.map((other) => other.info);

  return (
    <ul className='collaborators-list'>
        {collaborators.map(({ id, name, avatar, color }) => (
            <li key={id}>
                <Image
                  src={avatar}
                  alt={name}
                  width={100}
                  height={100}
                  className='rounded-full ring-2 inline-block
                  size-8 ring-dark-100'
                  style={{ border: `3px solid ${color}`}}
                />
                {name}
            </li>
        ))}
    </ul>
  )
}

export default ActiveCollaborators