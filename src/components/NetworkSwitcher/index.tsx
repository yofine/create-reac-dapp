import { useState } from 'react'
import { ethers } from 'ethers'

type Network = {
  name: string
  chainId: number
}

type Props = {
  provider: ethers.BrowserProvider
}

const networks: Network[] = [
  { name: 'Mainnet', chainId: 1 },
  { name: 'Ropsten', chainId: 3 },
  { name: 'Kovan', chainId: 42 },
  { name: 'Rinkeby', chainId: 4 }
]

function NetworkSwitcher(props: Props) {
  const { provider } = props
  const [currentNetwork, setCurrentNetwork] = useState<Network>(networks[0])

  const handleNetworkChange = async (network: Network) => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${network.chainId.toString(16)}` }]
      })
      await provider.send('eth_accounts', [])
      setCurrentNetwork(network)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-gray-800">Network</h2>
      <div className="flex space-x-2">
        {networks.map((network) => (
          <button
            key={network.chainId}
            className={`cursor-pointer rounded-md px-2 py-1 text-sm ${
              currentNetwork.chainId === network.chainId
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => handleNetworkChange(network)}
          >
            {network.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NetworkSwitcher
