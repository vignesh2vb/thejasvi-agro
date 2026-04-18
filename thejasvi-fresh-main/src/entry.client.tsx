import { hydrateRoot, createRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start/client'
import { getRouter } from './router'
import React from 'react'

const router = getRouter()

const rootElement = document.getElementById('app')!

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StartClient router={router} />)
} else {
  createRoot(rootElement).render(<StartClient router={router} />)
}
