import React from 'react'

interface WalletInfoProps {
  address: string
  balance: number
  network: string
}

const WalletInfo: React.FC<WalletInfoProps> = ({
  address,
  balance,
  network
}) => {
  return (
    <div className="overflow-x-auto rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-gray-800">Wallet Info</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-row items-center">
          <p className="mr-4 w-1/3 text-left text-gray-600">Address:</p>
          <p className="w-2/3 break-all text-gray-800">{address}</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="mr-4 w-1/3 text-left text-gray-600">Balance:</p>
          <p className="w-2/3 break-all text-gray-800">{balance} ETH</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="mr-4 w-1/3 text-left text-gray-600">Network:</p>
          <p className="w-2/3 break-all text-gray-800">{network}</p>
        </div>
      </div>
    </div>
  )
}

export default WalletInfo
