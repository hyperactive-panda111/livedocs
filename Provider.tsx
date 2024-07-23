'use client';

import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react';

import React from 'react'
import Loader from './components/Loader';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint={'/api/liveblocks-auth'}>
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider