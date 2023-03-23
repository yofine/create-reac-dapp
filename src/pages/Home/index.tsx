import React, { useState, useEffect, useRef } from 'react'
import { ethers } from 'ethers'
import WalletAddress from 'components/WalletAddress'
import WalletInfo from 'components/WalletInfo'
import NetworkSwitcher from 'components/NetworkSwitcher'
import { formatEther, getNumber } from 'ethers'
import { getNetworkNameByChainId } from 'utils'

const { ethereum } = window

function Home() {
  const providerRef = useRef<ethers.BrowserProvider>(
    new ethers.BrowserProvider(ethereum)
  )
  const [address, setAddress] = useState<string>('')
  const [network, setNetwork] = useState<string>('')
  const [balance, setBalance] = useState<number>(0)

  const getAddress = async () => {
    const addresses = await providerRef.current.send('eth_accounts', [])
    if (addresses.length < 1) return null
    getNetwork()
    getBalance(addresses[0])
    setAddress(addresses[0])
  }

  const getNetwork = async () => {
    const _chainId: number = await ethereum.request({
      method: 'eth_chainId'
    })
    const chainId = getNumber(_chainId)
    const network = getNetworkNameByChainId(chainId)
    setNetwork(network.name)
  }

  const getBalance = async (address: string) => {
    const balance = await providerRef.current.getBalance(address)
    let balance_in_ether: number = +formatEther(balance)
    balance_in_ether = Math.round(balance_in_ether * 10000) / 10000
    setBalance(balance_in_ether)
  }

  const connectWallet = async () => {
    if (ethereum) {
      try {
        const accounts = await providerRef.current.send(
          'eth_requestAccounts',
          []
        )
        getBalance(accounts[0])
        getNetwork()
        setAddress(accounts[0])
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error('Metamask not detected')
    }
  }

  useEffect(() => {
    getAddress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Create React DApp
          </h1>
          {address ? (
            <WalletAddress address={address} />
          ) : (
            <button
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </header>
      <main className="container mx-auto grow py-6 px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <WalletInfo address={address} network={network} balance={balance} />
          <NetworkSwitcher provider={providerRef.current} />
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center">Copyright &copy; 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
