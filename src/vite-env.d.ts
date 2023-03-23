/// <reference types="vite/client" />
/// <reference types="vitest" />

import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider
  }
}
