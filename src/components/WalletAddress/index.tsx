import React from 'react'

interface WalletAddressProps {
  address: string
}

const WalletAddress: React.FC<WalletAddressProps> = ({ address }) => {
  const shortenedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`
  return (
    <div className="rounded-md bg-blue-600 py-2 px-4 text-sm font-bold text-white">
      <p className="truncate">{shortenedAddress}</p>
    </div>
  )
}

export default WalletAddress
