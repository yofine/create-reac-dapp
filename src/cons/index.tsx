export const NETWORKS = [
  {
    id: '8dc5494f-6930-5b82-ba20-77b2ff028aeb',
    name: 'Ethereum Mainnet',
    chain: 'ETH',
    chainId: 1,
    rpc: [
      'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
      'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
      'https://api.mycryptoapi.com/eth',
      'https://cloudflare-eth.com',
      'https://ethereum.publicnode.com'
    ],
    icon: 'ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://etherscan.io',
        name: 'etherscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f1fda008-8f0b-52da-842f-aabdd19ccbab',
    name: 'Expanse Network',
    chain: 'EXP',
    chainId: 2,
    rpc: ['https://node.expanse.tech'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Expanse Network Ether',
      symbol: 'EXP'
    },
    explorers: null
  },
  {
    id: '32b8ab19-2d3e-5366-bf0d-68c0e072074e',
    name: 'Ropsten',
    chain: 'ETH',
    chainId: 3,
    rpc: [
      'https://ropsten.infura.io/v3/${INFURA_API_KEY}',
      'wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ropsten Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://ropsten.etherscan.io',
        name: 'etherscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0b1e5efe-e492-521c-bae9-6b0c5dc46c81',
    name: 'Rinkeby',
    chain: 'ETH',
    chainId: 4,
    rpc: [
      'https://rinkeby.infura.io/v3/${INFURA_API_KEY}',
      'wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Rinkeby Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://rinkeby.etherscan.io',
        name: 'etherscan-rinkeby',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a4945424-c1fe-5c8a-a051-1da77a66be21',
    name: 'Goerli',
    chain: 'ETH',
    chainId: 5,
    rpc: [
      'https://goerli.infura.io/v3/${INFURA_API_KEY}',
      'wss://goerli.infura.io/v3/${INFURA_API_KEY}',
      'https://rpc.goerli.mudit.blog/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://goerli.etherscan.io',
        name: 'etherscan-goerli',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '812863b5-4d68-5dbf-ad04-88319dae7730',
    name: 'Ethereum Classic Testnet Kotti',
    chain: 'ETC',
    chainId: 6,
    rpc: ['https://www.ethercluster.com/kotti'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Kotti Ether',
      symbol: 'KOT'
    },
    explorers: null
  },
  {
    id: '7e13fc8d-ecc9-5eb8-91de-a8ca79d2bce9',
    name: 'ThaiChain',
    chain: 'TCH',
    chainId: 7,
    rpc: ['https://rpc.dome.cloud', 'https://rpc.thaichain.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ThaiChain Ether',
      symbol: 'TCH'
    },
    explorers: [
      {
        url: 'https://exp.thaichain.org',
        name: 'Thaichain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f0e47a90-efb4-577a-973a-bf1b0b0d66ac',
    name: 'Ubiq',
    chain: 'UBQ',
    chainId: 8,
    rpc: ['https://rpc.octano.dev', 'https://pyrus2.ubiqscan.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ubiq Ether',
      symbol: 'UBQ'
    },
    explorers: [
      {
        url: 'https://ubiqscan.io',
        name: 'ubiqscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '32b36ea8-357c-5bf6-a67b-4beda870fc0f',
    name: 'Ubiq Network Testnet',
    chain: 'UBQ',
    chainId: 9,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ubiq Testnet Ether',
      symbol: 'TUBQ'
    },
    explorers: null
  },
  {
    id: '9d43543d-153c-59e2-b896-a371ea5336d0',
    name: 'Optimism',
    chain: 'ETH',
    chainId: 10,
    rpc: ['https://mainnet.optimism.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://optimistic.etherscan.io',
        name: 'etherscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b8c0f729-727f-5a09-b115-32aa0b329f83',
    name: 'Metadium Mainnet',
    chain: 'META',
    chainId: 11,
    rpc: ['https://api.metadium.com/prod'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Metadium Mainnet Ether',
      symbol: 'META'
    },
    explorers: null
  },
  {
    id: '8ff67084-a7ed-5607-8305-ca35d9febbc0',
    name: 'Metadium Testnet',
    chain: 'META',
    chainId: 12,
    rpc: ['https://api.metadium.com/dev'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Metadium Testnet Ether',
      symbol: 'KAL'
    },
    explorers: null
  },
  {
    id: '80b07e55-52b4-5606-84d0-eea2d6b5f41e',
    name: 'Diode Testnet Staging',
    chain: 'DIODE',
    chainId: 13,
    rpc: ['https://staging.diode.io:8443/', 'wss://staging.diode.io:8443/ws'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Staging Diodes',
      symbol: 'sDIODE'
    },
    explorers: null
  },
  {
    id: '299374a1-b5ee-5c8d-8fa5-cef1e134bbdd',
    name: 'Flare Mainnet',
    chain: 'FLR',
    chainId: 14,
    rpc: ['https://flare-api.flare.network/ext/C/rpc'],
    icon: 'flare',
    nativeCurrency: {
      decimals: 18,
      name: 'Flare',
      symbol: 'FLR'
    },
    explorers: [
      {
        url: 'https://flare-explorer.flare.network',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3e204624-10c5-537b-a8dd-5cb222622f49',
    name: 'Diode Prenet',
    chain: 'DIODE',
    chainId: 15,
    rpc: ['https://prenet.diode.io:8443/', 'wss://prenet.diode.io:8443/ws'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Diodes',
      symbol: 'DIODE'
    },
    explorers: null
  },
  {
    id: 'c7e9460d-9c25-5843-8556-48c7c34285bf',
    name: 'Flare Testnet Coston',
    chain: 'FLR',
    chainId: 16,
    rpc: ['https://coston-api.flare.network/ext/bc/C/rpc'],
    icon: 'coston',
    nativeCurrency: {
      decimals: 18,
      name: 'Coston Flare',
      symbol: 'CFLR'
    },
    explorers: [
      {
        url: 'https://coston-explorer.flare.network',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f68e1988-7745-5459-a2be-e601c4d405a5',
    name: 'ThaiChain 2.0 ThaiFi',
    chain: 'TCH',
    chainId: 17,
    rpc: ['https://rpc.thaifi.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Thaifi Ether',
      symbol: 'TFI'
    },
    explorers: null
  },
  {
    id: '33dfdc6b-6e3f-5a5f-b3cd-e1ed2346e235',
    name: 'ThunderCore Testnet',
    chain: 'TST',
    chainId: 18,
    rpc: ['https://testnet-rpc.thundercore.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ThunderCore Testnet Token',
      symbol: 'TST'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.thundercore.com',
        name: 'thundercore-blockscout-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a27f778f-ad46-5a75-a813-fa8840c1e069',
    name: 'Songbird Canary-Network',
    chain: 'SGB',
    chainId: 19,
    rpc: [
      'https://songbird-api.flare.network/ext/C/rpc',
      'https://sgb.ftso.com.au/ext/bc/C/rpc',
      'https://sgb.lightft.so/rpc',
      'https://sgb-rpc.ftso.eu'
    ],
    icon: 'songbird',
    nativeCurrency: {
      decimals: 18,
      name: 'Songbird',
      symbol: 'SGB'
    },
    explorers: [
      {
        url: 'https://songbird-explorer.flare.network',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8ab517df-9199-5923-992c-95bb674df4cb',
    name: 'Elastos Smart Chain',
    chain: 'ETH',
    chainId: 20,
    rpc: ['https://api.elastos.io/eth'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Elastos',
      symbol: 'ELA'
    },
    explorers: [
      {
        url: 'https://esc.elastos.io',
        name: 'elastos esc explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5b15472f-a487-5e6e-900a-c54047f4b2f0',
    name: 'Elastos Smart Chain Testnet',
    chain: 'ETH',
    chainId: 21,
    rpc: ['https://api-testnet.elastos.io/eth'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Elastos',
      symbol: 'tELA'
    },
    explorers: [
      {
        url: 'https://esc-testnet.elastos.io',
        name: 'elastos esc explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0036b26e-4359-58b2-8df4-b84a39fddf94',
    name: 'ELA-DID-Sidechain Mainnet',
    chain: 'ETH',
    chainId: 22,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Elastos',
      symbol: 'ELA'
    },
    explorers: null
  },
  {
    id: '1fa8b4c8-7911-589f-ab35-ca400319c293',
    name: 'ELA-DID-Sidechain Testnet',
    chain: 'ETH',
    chainId: 23,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Elastos',
      symbol: 'tELA'
    },
    explorers: null
  },
  {
    id: 'a8ebca6a-76e0-596e-a5d6-853692336915',
    name: 'KardiaChain Mainnet',
    chain: 'KAI',
    chainId: 24,
    rpc: ['https://rpc.kardiachain.io'],
    icon: 'kardiachain',
    nativeCurrency: {
      decimals: 18,
      name: 'KardiaChain',
      symbol: 'KAI'
    },
    explorers: null
  },
  {
    id: 'cadae09c-0bb2-5f43-bdec-1fa52e2e4082',
    name: 'Cronos Mainnet Beta',
    chain: 'CRO',
    chainId: 25,
    rpc: ['https://evm.cronos.org', 'https://cronos-evm.publicnode.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Cronos',
      symbol: 'CRO'
    },
    explorers: [
      {
        url: 'https://cronoscan.com',
        name: 'Cronos Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'f010a793-9c1c-5fec-88ab-1963dbbe12e4',
    name: 'Genesis L1 testnet',
    chain: 'genesis',
    chainId: 26,
    rpc: ['https://testrpc.genesisl1.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'L1 testcoin',
      symbol: 'L1test'
    },
    explorers: [
      {
        url: 'https://testnet.genesisl1.org',
        name: 'Genesis L1 testnet explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '2b009972-086e-5195-8fcc-4740a1aaa0e7',
    name: 'ShibaChain',
    chain: 'SHIB',
    chainId: 27,
    rpc: ['https://rpc.shibachain.net'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'SHIBA INU COIN',
      symbol: 'SHIB'
    },
    explorers: [
      {
        url: 'https://exp.shibachain.net',
        name: 'Shiba Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '51c769de-3d02-52fd-93be-39a0e0acdc21',
    name: 'Boba Network Rinkeby Testnet',
    chain: 'ETH',
    chainId: 28,
    rpc: ['https://rinkeby.boba.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://blockexplorer.rinkeby.boba.network',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '184d88dc-1d44-52cf-acdf-83c56f7e9b9a',
    name: 'Genesis L1',
    chain: 'genesis',
    chainId: 29,
    rpc: ['https://rpc.genesisl1.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'L1 coin',
      symbol: 'L1'
    },
    explorers: [
      {
        url: 'https://explorer.genesisl1.org',
        name: 'Genesis L1 blockchain explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '80e2430c-4c56-54e9-97cf-60f9c1c85e9f',
    name: 'RSK Mainnet',
    chain: 'RSK',
    chainId: 30,
    rpc: ['https://public-node.rsk.co', 'https://mycrypto.rsk.co'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Smart Bitcoin',
      symbol: 'RBTC'
    },
    explorers: [
      {
        url: 'https://explorer.rsk.co',
        name: 'RSK Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '55fad7d4-8ac1-5f85-b5a7-8889d98f8bdc',
    name: 'RSK Testnet',
    chain: 'RSK',
    chainId: 31,
    rpc: [
      'https://public-node.testnet.rsk.co',
      'https://mycrypto.testnet.rsk.co'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet Smart Bitcoin',
      symbol: 'tRBTC'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.rsk.co',
        name: 'RSK Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd747520f-320f-53ec-97ce-df53b2dae3ae',
    name: 'GoodData Testnet',
    chain: 'GooD',
    chainId: 32,
    rpc: ['https://test2.goodata.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GoodData Testnet Ether',
      symbol: 'GooD'
    },
    explorers: null
  },
  {
    id: 'e71dc081-a290-524e-a86c-a154c7a4364a',
    name: 'GoodData Mainnet',
    chain: 'GooD',
    chainId: 33,
    rpc: ['https://rpc.goodata.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GoodData Mainnet Ether',
      symbol: 'GooD'
    },
    explorers: null
  },
  {
    id: '93c1bb3b-16f1-501c-be99-c0ee00bb9ad3',
    name: 'Dithereum Testnet',
    chain: 'DTH',
    chainId: 34,
    rpc: ['https://node-testnet.dithereum.io'],
    icon: 'dithereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Dither',
      symbol: 'DTH'
    },
    explorers: null
  },
  {
    id: 'f319766c-7f1d-5584-84fd-2b89e94455b0',
    name: 'TBWG Chain',
    chain: 'TBWG',
    chainId: 35,
    rpc: ['https://rpc.tbwg.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TBWG Ether',
      symbol: 'TBG'
    },
    explorers: null
  },
  {
    id: 'a276f6c1-7ad7-5f81-8ed7-b5b0a9083186',
    name: 'Dxchain Mainnet',
    chain: 'Dxchain',
    chainId: 36,
    rpc: ['https://mainnet.dxchain.com'],
    icon: 'dx',
    nativeCurrency: {
      decimals: 18,
      name: 'Dxchain',
      symbol: 'DX'
    },
    explorers: [
      {
        url: 'https://dxscan.io',
        name: 'dxscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '88c68ac9-1ed1-54fb-b91f-813cfa38f13c',
    name: 'SeedCoin-Network',
    chain: 'SeedCoin-Network',
    chainId: 37,
    rpc: ['https://node.seedcoin.network'],
    icon: 'seedcoin',
    nativeCurrency: {
      decimals: 18,
      name: 'SeedCoin',
      symbol: 'SEED'
    },
    explorers: null
  },
  {
    id: 'c994a2bc-c6fd-5b0a-bb0f-9ee8d424ff93',
    name: 'Valorbit',
    chain: 'VAL',
    chainId: 38,
    rpc: ['https://rpc.valorbit.com/v2'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Valorbit',
      symbol: 'VAL'
    },
    explorers: null
  },
  {
    id: '543b5ec7-15af-5d73-9308-6c71be471151',
    name: 'Unicorn Ultra Testnet',
    chain: 'u2u',
    chainId: 39,
    rpc: ['https://rpc-testnet.uniultra.xyz'],
    icon: 'u2u',
    nativeCurrency: {
      decimals: 18,
      name: 'Unicorn Ultra',
      symbol: 'U2U'
    },
    explorers: [
      {
        url: 'https://testnet.uniultra.xyz',
        name: 'U2U Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'eb0ff86e-f90a-56eb-bf05-13b122f31381',
    name: 'Telos EVM Mainnet',
    chain: 'TLOS',
    chainId: 40,
    rpc: ['https://mainnet.telos.net/evm'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Telos',
      symbol: 'TLOS'
    },
    explorers: [
      {
        url: 'https://teloscan.io',
        name: 'teloscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd9fa9e26-d63e-5738-b28c-886154ffbc73',
    name: 'Telos EVM Testnet',
    chain: 'TLOS',
    chainId: 41,
    rpc: ['https://testnet.telos.net/evm'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Telos',
      symbol: 'TLOS'
    },
    explorers: null
  },
  {
    id: '69719af4-cf36-5886-9f7d-1f1c29b76f89',
    name: 'Kovan',
    chain: 'ETH',
    chainId: 42,
    rpc: [
      'https://kovan.poa.network',
      'http://kovan.poa.network:8545',
      'https://kovan.infura.io/v3/${INFURA_API_KEY}',
      'wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}',
      'ws://kovan.poa.network:8546'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Kovan Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://kovan.etherscan.io',
        name: 'etherscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8e3666bd-52b1-56e3-ba3c-4b8a2e3ea720',
    name: 'Darwinia Pangolin Testnet',
    chain: 'pangolin',
    chainId: 43,
    rpc: ['https://pangolin-rpc.darwinia.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Pangolin Network Native Token',
      symbol: 'PRING'
    },
    explorers: [
      {
        url: 'https://pangolin.subscan.io',
        name: 'subscan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c48b4d73-7490-5bb0-8152-5007bb000b1c',
    name: 'Darwinia Crab Network',
    chain: 'crab',
    chainId: 44,
    rpc: ['https://crab-rpc.darwinia.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Crab Network Native Token',
      symbol: 'CRAB'
    },
    explorers: [
      {
        url: 'https://crab.subscan.io',
        name: 'subscan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'cc03769e-0410-51a3-882e-033fd06fac37',
    name: 'Darwinia Pangoro Testnet',
    chain: 'pangoro',
    chainId: 45,
    rpc: ['https://pangoro-rpc.darwinia.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Pangoro Network Native Token',
      symbol: 'ORING'
    },
    explorers: [
      {
        url: 'https://pangoro.subscan.io',
        name: 'subscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '00acc57e-2a37-527b-a8be-5adfe0dae37e',
    name: 'Darwinia Network',
    chain: 'darwinia',
    chainId: 46,
    rpc: ['https://rpc.darwinia.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Darwinia Network Native Token',
      symbol: 'RING'
    },
    explorers: [
      {
        url: 'https://darwinia.subscan.io',
        name: 'subscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '1a2a7043-3eaa-5b81-8b1f-753744e21bf0',
    name: 'Ennothem Mainnet Proterozoic',
    chain: 'ETMP',
    chainId: 48,
    rpc: ['https://rpc.etm.network'],
    icon: 'etmp',
    nativeCurrency: {
      decimals: 18,
      name: 'Ennothem',
      symbol: 'ETMP'
    },
    explorers: [
      {
        url: 'https://etmscan.network',
        name: 'etmpscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ab75149a-a233-5bd3-b1b6-cfe990777275',
    name: 'Ennothem Testnet Pioneer',
    chain: 'ETMP',
    chainId: 49,
    rpc: ['https://rpc.pioneer.etm.network'],
    icon: 'etmp',
    nativeCurrency: {
      decimals: 18,
      name: 'Ennothem',
      symbol: 'ETMP'
    },
    explorers: [
      {
        url: 'https://pioneer.etmscan.network',
        name: 'etmp',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e8cd12c4-a1c4-5ed3-8f74-94aa9d356cac',
    name: 'XinFin XDC Network',
    chain: 'XDC',
    chainId: 50,
    rpc: [
      'https://erpc.xinfin.network',
      'https://rpc.xinfin.network',
      'https://rpc1.xinfin.network'
    ],
    icon: 'xdc',
    nativeCurrency: {
      decimals: 18,
      name: 'XinFin',
      symbol: 'XDC'
    },
    explorers: [
      {
        url: 'https://xdcscan.io',
        name: 'xdcscan',
        standard: 'EIP3091'
      },
      {
        url: 'https://xdc.blocksscan.io',
        name: 'blocksscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '515efc45-0a65-5a58-8159-23ceaf45aadd',
    name: 'XDC Apothem Network',
    chain: 'XDC',
    chainId: 51,
    rpc: ['https://rpc.apothem.network', 'https://erpc.apothem.network'],
    icon: 'xdc',
    nativeCurrency: {
      decimals: 18,
      name: 'XinFin',
      symbol: 'TXDC'
    },
    explorers: [
      {
        url: 'https://apothem.xinfinscan.com',
        name: 'xdcscan',
        standard: 'EIP3091'
      },
      {
        url: 'https://apothem.blocksscan.io',
        name: 'blocksscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '06bf2046-ab37-500f-989a-3aac93957359',
    name: 'CoinEx Smart Chain Mainnet',
    chain: 'CSC',
    chainId: 52,
    rpc: ['https://rpc.coinex.net'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CoinEx Chain Native Token',
      symbol: 'cet'
    },
    explorers: [
      {
        url: 'https://www.coinex.net',
        name: 'coinexscan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a4418732-982e-5ed4-9bec-dfb7a6524435',
    name: 'CoinEx Smart Chain Testnet',
    chain: 'CSC',
    chainId: 53,
    rpc: ['https://testnet-rpc.coinex.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CoinEx Chain Test Native Token',
      symbol: 'cett'
    },
    explorers: [
      {
        url: 'https://testnet.coinex.net',
        name: 'coinexscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '8cdf868e-4779-5b88-ae9c-4efd3f17d32c',
    name: 'Openpiece Mainnet',
    chain: 'OPENPIECE',
    chainId: 54,
    rpc: ['https://mainnet.openpiece.io'],
    icon: 'openpiece',
    nativeCurrency: {
      decimals: 18,
      name: 'Belly',
      symbol: 'BELLY'
    },
    explorers: [
      {
        url: 'https://bellyscan.com',
        name: 'Belly Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '06b4d5d0-2d9a-5303-95c9-4804d8d8ce2a',
    name: 'Zyx Mainnet',
    chain: 'ZYX',
    chainId: 55,
    rpc: [
      'https://rpc-1.zyx.network/',
      'https://rpc-2.zyx.network/',
      'https://rpc-3.zyx.network/',
      'https://rpc-4.zyx.network/',
      'https://rpc-5.zyx.network/',
      'https://rpc-6.zyx.network/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Zyx',
      symbol: 'ZYX'
    },
    explorers: [
      {
        url: 'https://zyxscan.com',
        name: 'zyxscan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'fedf4397-290b-5cde-b845-5e0105cbe2ce',
    name: 'Binance Smart Chain Mainnet',
    chain: 'BSC',
    chainId: 56,
    rpc: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'https://bsc.publicnode.com',
      'wss://bsc-ws-node.nariox.org'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Binance Chain Native Token',
      symbol: 'BNB'
    },
    explorers: [
      {
        url: 'https://bscscan.com',
        name: 'bscscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '691534ef-b6b0-5b3f-8a51-5e3600e9cc80',
    name: 'Syscoin Mainnet',
    chain: 'SYS',
    chainId: 57,
    rpc: ['https://rpc.syscoin.org', 'wss://rpc.syscoin.org/wss'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Syscoin',
      symbol: 'SYS'
    },
    explorers: [
      {
        url: 'https://explorer.syscoin.org',
        name: 'Syscoin Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3a553b4c-4f6f-5dd2-9ac1-974ca0d8f291',
    name: 'Ontology Mainnet',
    chain: 'Ontology',
    chainId: 58,
    rpc: [
      'http://dappnode1.ont.io:20339',
      'http://dappnode2.ont.io:20339',
      'http://dappnode3.ont.io:20339',
      'http://dappnode4.ont.io:20339',
      'https://dappnode1.ont.io:10339',
      'https://dappnode2.ont.io:10339',
      'https://dappnode3.ont.io:10339',
      'https://dappnode4.ont.io:10339'
    ],
    icon: 'ontology',
    nativeCurrency: {
      decimals: 18,
      name: 'ONG',
      symbol: 'ONG'
    },
    explorers: [
      {
        url: 'https://explorer.ont.io',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '53bb9a8e-dba9-5e63-b5d4-52dcb8740009',
    name: 'EOS Mainnet',
    chain: 'EOS',
    chainId: 59,
    rpc: ['https://api.eosargentina.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'EOS',
      symbol: 'EOS'
    },
    explorers: [
      {
        url: 'https://bloks.eosargentina.io',
        name: 'bloks',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ed6eec09-3dd4-5b07-a3e4-b2c3901b087f',
    name: 'GoChain',
    chain: 'GO',
    chainId: 60,
    rpc: ['https://rpc.gochain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GoChain Ether',
      symbol: 'GO'
    },
    explorers: [
      {
        url: 'https://explorer.gochain.io',
        name: 'GoChain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'cbd7c7fa-3260-5407-a06b-4914e9f1d47f',
    name: 'Ethereum Classic Mainnet',
    chain: 'ETC',
    chainId: 61,
    rpc: ['https://www.ethercluster.com/etc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum Classic Ether',
      symbol: 'ETC'
    },
    explorers: [
      {
        url: 'https://blockscout.com/etc/mainnet',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a419e1ab-732e-53fe-b317-6cc081ffc508',
    name: 'Ethereum Classic Testnet Morden',
    chain: 'ETC',
    chainId: 62,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum Classic Testnet Ether',
      symbol: 'TETC'
    },
    explorers: null
  },
  {
    id: '33dbcd37-09d1-5ee4-aa24-af6f2d77f1da',
    name: 'Ethereum Classic Testnet Mordor',
    chain: 'ETC',
    chainId: 63,
    rpc: ['https://www.ethercluster.com/mordor'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Mordor Classic Testnet Ether',
      symbol: 'METC'
    },
    explorers: null
  },
  {
    id: 'd7966bd8-b599-5a76-997e-0640a64bdcb1',
    name: 'Ellaism',
    chain: 'ELLA',
    chainId: 64,
    rpc: ['https://jsonrpc.ellaism.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ellaism Ether',
      symbol: 'ELLA'
    },
    explorers: null
  },
  {
    id: 'ce17574d-b423-5941-a0a7-b67be6efdb36',
    name: 'OKExChain Testnet',
    chain: 'okexchain',
    chainId: 65,
    rpc: ['https://exchaintestrpc.okex.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'OKExChain Global Utility Token in testnet',
      symbol: 'OKT'
    },
    explorers: [
      {
        url: 'https://www.oklink.com/okexchain-test',
        name: 'OKLink',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ec8f93ff-14f5-5eea-a8cd-e34d6ec4f8c3',
    name: 'OKXChain Mainnet',
    chain: 'okxchain',
    chainId: 66,
    rpc: [
      'https://exchainrpc.okex.org',
      'https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'OKXChain Global Utility Token',
      symbol: 'OKT'
    },
    explorers: [
      {
        url: 'https://www.oklink.com/en/okc',
        name: 'OKLink',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '74734f3b-8020-5724-bbb3-2b7777439f6e',
    name: 'DBChain Testnet',
    chain: 'DBM',
    chainId: 67,
    rpc: ['http://test-rpc.dbmbp.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'DBChain Testnet',
      symbol: 'DBM'
    },
    explorers: null
  },
  {
    id: '32f62432-4819-58b0-bc41-280a1fa600fd',
    name: 'SoterOne Mainnet',
    chain: 'SOTER',
    chainId: 68,
    rpc: ['https://rpc.soter.one'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'SoterOne Mainnet Ether',
      symbol: 'SOTER'
    },
    explorers: null
  },
  {
    id: '964d14fb-1951-5f3f-896d-ee06201636f5',
    name: 'Optimism Kovan',
    chain: 'ETH',
    chainId: 69,
    rpc: ['https://kovan.optimism.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Kovan Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://kovan-optimistic.etherscan.io',
        name: 'etherscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c713ea35-e0c1-532d-82f9-22b344ddc0f4',
    name: 'Hoo Smart Chain',
    chain: 'HSC',
    chainId: 70,
    rpc: [
      'https://http-mainnet.hoosmartchain.com',
      'https://http-mainnet2.hoosmartchain.com',
      'wss://ws-mainnet.hoosmartchain.com',
      'wss://ws-mainnet2.hoosmartchain.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Hoo Smart Chain Native Token',
      symbol: 'HOO'
    },
    explorers: [
      {
        url: 'https://www.hooscan.com',
        name: 'hooscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a59588b1-198a-5501-a457-4249ea62ed62',
    name: 'Conflux eSpace (Testnet)',
    chain: 'Conflux',
    chainId: 71,
    rpc: ['https://evmtestnet.confluxrpc.com'],
    icon: 'conflux',
    nativeCurrency: {
      decimals: 18,
      name: 'CFX',
      symbol: 'CFX'
    },
    explorers: [
      {
        url: 'https://evmtestnet.confluxscan.net',
        name: 'Conflux Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '7fd27447-d1c1-5ef1-bce1-f96541b6860a',
    name: 'DxChain Testnet',
    chain: 'DxChain',
    chainId: 72,
    rpc: ['https://testnet-http.dxchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'DxChain Testnet',
      symbol: 'DX'
    },
    explorers: null
  },
  {
    id: '44096c0b-d764-51fe-aea5-622c8f365893',
    name: 'FNCY',
    chain: 'FNCY',
    chainId: 73,
    rpc: ['https://fncy-seed1.fncy.world'],
    icon: 'fncy',
    nativeCurrency: {
      decimals: 18,
      name: 'FNCY',
      symbol: 'FNCY'
    },
    explorers: [
      {
        url: 'https://fncyscan.fncy.world',
        name: 'fncy scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '690489e4-4d35-559c-9c32-0501149ab353',
    name: 'IDChain Mainnet',
    chain: 'IDChain',
    chainId: 74,
    rpc: ['https://idchain.one/rpc/', 'wss://idchain.one/ws/'],
    icon: 'idchain',
    nativeCurrency: {
      decimals: 18,
      name: 'EIDI',
      symbol: 'EIDI'
    },
    explorers: [
      {
        url: 'https://explorer.idchain.one',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7f6a72bb-ed54-53b4-9217-3f9b35e0bd25',
    name: 'Decimal Smart Chain Mainnet',
    chain: 'DSC',
    chainId: 75,
    rpc: ['https://node.decimalchain.com/web3'],
    icon: 'dsc',
    nativeCurrency: {
      decimals: 18,
      name: 'Decimal',
      symbol: 'DEL'
    },
    explorers: [
      {
        url: 'https://explorer.decimalchain.com',
        name: 'DSC Explorer Mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f823b79a-a392-5620-a487-73b0067dd804',
    name: 'Mix',
    chain: 'MIX',
    chainId: 76,
    rpc: ['https://rpc2.mix-blockchain.org:8647'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Mix Ether',
      symbol: 'MIX'
    },
    explorers: null
  },
  {
    id: 'a75d9948-3fe9-56fd-aeb5-46b3918d95c4',
    name: 'POA Network Sokol',
    chain: 'POA',
    chainId: 77,
    rpc: [
      'https://sokol.poa.network',
      'wss://sokol.poa.network/wss',
      'ws://sokol.poa.network:8546'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'POA Sokol Ether',
      symbol: 'SPOA'
    },
    explorers: [
      {
        url: 'https://blockscout.com/poa/sokol',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '1cccf7e7-c883-5060-8991-1eed074e8d06',
    name: 'PrimusChain mainnet',
    chain: 'PC',
    chainId: 78,
    rpc: ['https://ethnode.primusmoney.com/mainnet'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Primus Ether',
      symbol: 'PETH'
    },
    explorers: null
  },
  {
    id: '79501dbc-94fa-5e99-805d-151856e222c1',
    name: 'Zenith Mainnet',
    chain: 'Zenith',
    chainId: 79,
    rpc: [
      'https://dataserver-us-1.zenithchain.co/',
      'https://dataserver-asia-3.zenithchain.co/',
      'https://dataserver-asia-4.zenithchain.co/',
      'https://dataserver-asia-2.zenithchain.co/',
      'https://dataserver-asia-5.zenithchain.co/',
      'https://dataserver-asia-6.zenithchain.co/',
      'https://dataserver-asia-7.zenithchain.co/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ZENITH',
      symbol: 'ZENITH'
    },
    explorers: [
      {
        url: 'https://scan.zenithchain.co',
        name: 'zenith scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '59492e4a-cd4d-5bb0-bdeb-477b1ad1bb3b',
    name: 'GeneChain',
    chain: 'GeneChain',
    chainId: 80,
    rpc: ['https://rpc.genechain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'RNA',
      symbol: 'RNA'
    },
    explorers: [
      {
        url: 'https://scan.genechain.io',
        name: 'GeneChain Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b55484db-6913-57b3-b5e6-a70951267cdf',
    name: 'Zenith Testnet (Vilnius)',
    chain: 'Zenith',
    chainId: 81,
    rpc: ['https://vilnius.zenithchain.co/http'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Vilnius',
      symbol: 'VIL'
    },
    explorers: [
      {
        url: 'https://vilnius.scan.zenithchain.co',
        name: 'vilnius scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '892891a9-75f8-54cf-a619-cdf5ef0da458',
    name: 'Meter Mainnet',
    chain: 'METER',
    chainId: 82,
    rpc: ['https://rpc.meter.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Meter',
      symbol: 'MTR'
    },
    explorers: [
      {
        url: 'https://scan.meter.io',
        name: 'Meter Mainnet Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '56dec5ef-31c5-5c14-aebd-b44f13525cf4',
    name: 'Meter Testnet',
    chain: 'METER Testnet',
    chainId: 83,
    rpc: ['https://rpctest.meter.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Meter',
      symbol: 'MTR'
    },
    explorers: [
      {
        url: 'https://scan-warringstakes.meter.io',
        name: 'Meter Testnet Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '369c6d37-8153-5a30-b927-677073435901',
    name: 'GateChain Testnet',
    chain: 'GTTEST',
    chainId: 85,
    rpc: ['https://testnet.gatenode.cc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GateToken',
      symbol: 'GT'
    },
    explorers: [
      {
        url: 'https://www.gatescan.org/testnet',
        name: 'GateScan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a6c0bb06-2578-5724-a362-a442513d0af2',
    name: 'GateChain Mainnet',
    chain: 'GT',
    chainId: 86,
    rpc: ['https://evm.gatenode.cc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GateToken',
      symbol: 'GT'
    },
    explorers: [
      {
        url: 'https://www.gatescan.org',
        name: 'GateScan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '511d6412-b1d6-58e8-acc9-79d2a165387b',
    name: 'Nova Network',
    chain: 'NNW',
    chainId: 87,
    rpc: [
      'https://connect.novanetwork.io',
      'https://0x57.redjackstudio.com',
      'https://rpc.novanetwork.io:9070'
    ],
    icon: 'novanetwork',
    nativeCurrency: {
      decimals: 18,
      name: 'Supernova',
      symbol: 'SNT'
    },
    explorers: [
      {
        url: 'https://explorer.novanetwork.io',
        name: 'novanetwork',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b9e2102b-7102-552a-8a62-c31624d366f5',
    name: 'TomoChain',
    chain: 'TOMO',
    chainId: 88,
    rpc: ['https://rpc.tomochain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TomoChain',
      symbol: 'TOMO'
    },
    explorers: null
  },
  {
    id: 'd05200a5-5370-585c-a191-a7d75b3621a0',
    name: 'TomoChain Testnet',
    chain: 'TOMO',
    chainId: 89,
    rpc: ['https://rpc.testnet.tomochain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TomoChain',
      symbol: 'TOMO'
    },
    explorers: null
  },
  {
    id: 'e92b1d3a-947e-56d3-8abf-1b619d5d5893',
    name: 'Garizon Stage0',
    chain: 'GAR',
    chainId: 90,
    rpc: ['https://s0.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '53f2b5fa-bfd2-5ee6-ae07-6d21af60c145',
    name: 'Garizon Stage1',
    chain: 'GAR',
    chainId: 91,
    rpc: ['https://s1.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dc37fdb0-9750-5681-9cea-27bc7b1d9709',
    name: 'Garizon Stage2',
    chain: 'GAR',
    chainId: 92,
    rpc: ['https://s2.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0499a2d2-093c-5f2a-b4e5-d3b05affc144',
    name: 'Garizon Stage3',
    chain: 'GAR',
    chainId: 93,
    rpc: ['https://s3.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ed4d7d4c-0506-5aa3-9041-90808651aa3e',
    name: 'CryptoKylin Testnet',
    chain: 'EOS',
    chainId: 95,
    rpc: ['https://kylin.eosargentina.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'EOS',
      symbol: 'EOS'
    },
    explorers: [
      {
        url: 'https://kylin.eosargentina.io',
        name: 'eosq',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6b601bc2-e43d-52b8-9f4b-6a964bf113e3',
    name: 'Bitkub Chain',
    chain: 'BKC',
    chainId: 96,
    rpc: ['https://rpc.bitkubchain.io', 'wss://wss.bitkubchain.io'],
    icon: 'bkc',
    nativeCurrency: {
      decimals: 18,
      name: 'Bitkub Coin',
      symbol: 'KUB'
    },
    explorers: [
      {
        url: 'https://bkcscan.com',
        name: 'Bitkub Chain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '105c87e8-80c8-5f81-bb65-25b9f094ee10',
    name: 'Binance Smart Chain Testnet',
    chain: 'BSC',
    chainId: 97,
    rpc: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545',
      'https://data-seed-prebsc-2-s2.binance.org:8545',
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      'https://data-seed-prebsc-2-s3.binance.org:8545'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Binance Chain Native Token',
      symbol: 'tBNB'
    },
    explorers: [
      {
        url: 'https://testnet.bscscan.com',
        name: 'bscscan-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0d9f9bb2-1275-594e-aea9-8b318b5a5081',
    name: 'POA Network Core',
    chain: 'POA',
    chainId: 99,
    rpc: ['https://core.poa.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'POA Network Core Ether',
      symbol: 'POA'
    },
    explorers: [
      {
        url: 'https://blockscout.com/poa/core',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '76e00890-c2fa-511d-806f-0c0261bd3b03',
    name: 'Gnosis',
    chain: 'GNO',
    chainId: 100,
    rpc: [
      'https://rpc.gnosischain.com',
      'https://rpc.ankr.com/gnosis',
      'https://gnosischain-rpc.gateway.pokt.network',
      'https://gnosis-mainnet.public.blastapi.io',
      'wss://rpc.gnosischain.com/wss'
    ],
    icon: 'gnosis',
    nativeCurrency: {
      decimals: 18,
      name: 'xDAI',
      symbol: 'xDAI'
    },
    explorers: [
      {
        url: 'https://gnosisscan.io',
        name: 'gnosisscan',
        standard: 'EIP3091'
      },
      {
        url: 'https://blockscout.com/xdai/mainnet',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3916a2f9-095d-522b-a434-5dadbd44a332',
    name: 'EtherInc',
    chain: 'ETI',
    chainId: 101,
    rpc: ['https://api.einc.io/jsonrpc/mainnet'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'EtherInc Ether',
      symbol: 'ETI'
    },
    explorers: null
  },
  {
    id: '25d25203-8465-575a-895b-395ce40665df',
    name: 'Web3Games Testnet',
    chain: 'Web3Games',
    chainId: 102,
    rpc: [
      'https://testnet-rpc-0.web3games.org/evm',
      'https://testnet-rpc-1.web3games.org/evm',
      'https://testnet-rpc-2.web3games.org/evm'
    ],
    icon: 'web3games',
    nativeCurrency: {
      decimals: 18,
      name: 'Web3Games',
      symbol: 'W3G'
    },
    explorers: null
  },
  {
    id: 'f3891cd5-a7de-55ec-ae2d-32c8414988e1',
    name: 'Kaiba Lightning Chain Testnet',
    chain: 'tKLC',
    chainId: 104,
    rpc: ['https://klc.live/'],
    icon: 'kaiba',
    nativeCurrency: {
      decimals: 18,
      name: 'Kaiba Testnet Token',
      symbol: 'tKAIBA'
    },
    explorers: [
      {
        url: 'https://kaibascan.io',
        name: 'kaibascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6f7b568d-50c9-53ae-9325-874e867ad1ac',
    name: 'Web3Games Devnet',
    chain: 'Web3Games',
    chainId: 105,
    rpc: ['https://devnet.web3games.org/evm'],
    icon: 'web3games',
    nativeCurrency: {
      decimals: 18,
      name: 'Web3Games',
      symbol: 'W3G'
    },
    explorers: [
      {
        url: 'https://explorer-devnet.web3games.org',
        name: 'Web3Games Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '4b0c49d7-bc86-502f-8396-489a07651dac',
    name: 'Velas EVM Mainnet',
    chain: 'Velas',
    chainId: 106,
    rpc: [
      'https://evmexplorer.velas.com/rpc',
      'https://explorer.velas.com/rpc'
    ],
    icon: 'velas',
    nativeCurrency: {
      decimals: 18,
      name: 'Velas',
      symbol: 'VLX'
    },
    explorers: [
      {
        url: 'https://evmexplorer.velas.com',
        name: 'Velas Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0a65d253-5e61-5ddc-ba83-0e7ad92657cd',
    name: 'Nebula Testnet',
    chain: 'NTN',
    chainId: 107,
    rpc: ['https://testnet.rpc.novanetwork.io:9070'],
    icon: 'nebulatestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Nebula X',
      symbol: 'NBX'
    },
    explorers: [
      {
        url: 'https://explorer.novanetwork.io',
        name: 'nebulatestnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1fbe0fdf-5632-5805-959d-93f7ba2c5fa9',
    name: 'ThunderCore Mainnet',
    chain: 'TT',
    chainId: 108,
    rpc: [
      'https://mainnet-rpc.thundercore.com',
      'https://mainnet-rpc.thundertoken.net',
      'https://mainnet-rpc.thundercore.io'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ThunderCore Token',
      symbol: 'TT'
    },
    explorers: [
      {
        url: 'https://viewblock.io/thundercore',
        name: 'thundercore-viewblock',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4a043593-1c22-567c-9e18-6b87bc41b4ee',
    name: 'Proton Testnet',
    chain: 'XPR',
    chainId: 110,
    rpc: ['https://protontestnet.greymass.com/'],
    icon: null,
    nativeCurrency: {
      decimals: 4,
      name: 'Proton',
      symbol: 'XPR'
    },
    explorers: null
  },
  {
    id: 'c89de622-5fa1-59b5-8b95-170a9d2205b7',
    name: 'EtherLite Chain',
    chain: 'ETL',
    chainId: 111,
    rpc: ['https://rpc.etherlite.org'],
    icon: 'etherlite',
    nativeCurrency: {
      decimals: 18,
      name: 'EtherLite',
      symbol: 'ETL'
    },
    explorers: null
  },
  {
    id: '3bb7f4c5-87ee-5694-9c5d-c5d888d49e95',
    name: 'Dehvo',
    chain: 'Dehvo',
    chainId: 113,
    rpc: [
      'https://connect.dehvo.com',
      'https://rpc.dehvo.com',
      'https://rpc1.dehvo.com',
      'https://rpc2.dehvo.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Dehvo',
      symbol: 'Deh'
    },
    explorers: [
      {
        url: 'https://explorer.dehvo.com',
        name: 'Dehvo Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a6e15e67-dc2c-586c-9d4c-f75240e219ae',
    name: 'Flare Testnet Coston2',
    chain: 'FLR',
    chainId: 114,
    rpc: ['https://coston2-api.flare.network/ext/bc/C/rpc'],
    icon: 'coston2',
    nativeCurrency: {
      decimals: 18,
      name: 'Coston2 Flare',
      symbol: 'C2FLR'
    },
    explorers: [
      {
        url: 'https://coston2-explorer.flare.network',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5265b174-81f5-5914-8ff6-133031a69f76',
    name: 'DeBank Testnet',
    chain: 'DeBank',
    chainId: 115,
    rpc: [],
    icon: 'debank',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: []
  },
  {
    id: '97499e06-a277-599c-9d59-b67f1d500a6f',
    name: 'DeBank Mainnet',
    chain: 'DeBank',
    chainId: 116,
    rpc: [],
    icon: 'debank',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: []
  },
  {
    id: 'dba8c5c8-1eda-56f3-a635-2e55d8666998',
    name: 'Arcology Testnet',
    chain: 'Arcology',
    chainId: 118,
    rpc: ['https://testnet.arcology.network/rpc'],
    icon: 'acolicon',
    nativeCurrency: {
      decimals: 18,
      name: 'Arcology Coin',
      symbol: 'Acol'
    },
    explorers: [
      {
        url: 'https://testnet.arcology.network/explorer',
        name: 'arcology',
        standard: 'none'
      }
    ]
  },
  {
    id: '159698b4-cf81-55aa-92e9-73e8589ef41b',
    name: 'ENULS Mainnet',
    chain: 'ENULS',
    chainId: 119,
    rpc: ['https://evmapi.nuls.io', 'https://evmapi2.nuls.io'],
    icon: 'enuls',
    nativeCurrency: {
      decimals: 18,
      name: 'NULS',
      symbol: 'NULS'
    },
    explorers: [
      {
        url: 'https://evmscan.nuls.io',
        name: 'enulsscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ea2a0563-bba5-5275-b420-9b1815430962',
    name: 'ENULS Testnet',
    chain: 'ENULS',
    chainId: 120,
    rpc: ['https://beta.evmapi.nuls.io', 'https://beta.evmapi2.nuls.io'],
    icon: 'enuls',
    nativeCurrency: {
      decimals: 18,
      name: 'NULS',
      symbol: 'NULS'
    },
    explorers: [
      {
        url: 'https://beta.evmscan.nuls.io',
        name: 'enulsscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '9c2c142f-09a9-5a82-a80b-2d6289445041',
    name: 'Realchain Mainnet',
    chain: 'REAL',
    chainId: 121,
    rpc: [
      'https://rcl-dataseed1.rclsidechain.com',
      'https://rcl-dataseed2.rclsidechain.com',
      'https://rcl-dataseed3.rclsidechain.com',
      'https://rcl-dataseed4.rclsidechain.com',
      'wss://rcl-dataseed1.rclsidechain.com/v1/',
      'wss://rcl-dataseed2.rclsidechain.com/v1/',
      'wss://rcl-dataseed3.rclsidechain.com/v1/',
      'wss://rcl-dataseed4.rclsidechain.com/v1/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Realchain',
      symbol: 'REAL'
    },
    explorers: [
      {
        url: 'https://rclscan.com',
        name: 'realscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'fe5ebafd-d596-5ed8-9729-7bfaa4dc4944',
    name: 'Fuse Mainnet',
    chain: 'FUSE',
    chainId: 122,
    rpc: ['https://rpc.fuse.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Fuse',
      symbol: 'FUSE'
    },
    explorers: null
  },
  {
    id: '2812f5b7-8d41-563e-b87d-5964eb9637ed',
    name: 'Fuse Sparknet',
    chain: 'fuse',
    chainId: 123,
    rpc: ['https://rpc.fusespark.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Spark',
      symbol: 'SPARK'
    },
    explorers: null
  },
  {
    id: '8672e0a1-ea51-54e3-a8f4-08004f6a6443',
    name: 'Decentralized Web Mainnet',
    chain: 'DWU',
    chainId: 124,
    rpc: ['https://decentralized-web.tech/dw_rpc.php'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Decentralized Web Utility',
      symbol: 'DWU'
    },
    explorers: null
  },
  {
    id: '13c01ac7-f6ff-5619-9dd1-052112eefbfb',
    name: 'OYchain Testnet',
    chain: 'OYchain',
    chainId: 125,
    rpc: ['https://rpc.testnet.oychain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'OYchain Token',
      symbol: 'OY'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.oychain.io',
        name: 'OYchain Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a7074fd2-9dd1-57a0-a5dd-0fde678af1a4',
    name: 'OYchain Mainnet',
    chain: 'OYchain',
    chainId: 126,
    rpc: ['https://rpc.mainnet.oychain.io'],
    icon: 'oychain',
    nativeCurrency: {
      decimals: 18,
      name: 'OYchain Token',
      symbol: 'OY'
    },
    explorers: [
      {
        url: 'https://explorer.oychain.io',
        name: 'OYchain Mainnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b6a7fc68-25cd-506e-b01b-8a8e3ecda098',
    name: 'Factory 127 Mainnet',
    chain: 'FETH',
    chainId: 127,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Factory 127 Token',
      symbol: 'FETH'
    },
    explorers: null
  },
  {
    id: '235df297-7058-5ae3-8783-cd6eaac3def4',
    name: 'Huobi ECO Chain Mainnet',
    chain: 'Heco',
    chainId: 128,
    rpc: [
      'https://http-mainnet.hecochain.com',
      'wss://ws-mainnet.hecochain.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Huobi ECO Chain Native Token',
      symbol: 'HT'
    },
    explorers: [
      {
        url: 'https://hecoinfo.com',
        name: 'hecoinfo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '85bf15c2-8eaa-58de-b9e0-3a4dd82b7fcf',
    name: 'Alyx Chain Testnet',
    chain: 'Alyx Chain Testnet',
    chainId: 135,
    rpc: ['https://testnet-rpc.alyxchain.com'],
    icon: 'alyx',
    nativeCurrency: {
      decimals: 18,
      name: 'Alyx Testnet Native Token',
      symbol: 'ALYX'
    },
    explorers: [
      {
        url: 'https://testnet.alyxscan.com',
        name: 'alyx testnet scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f2b8bb06-6e7f-5cb5-adf3-cc1e78e25104',
    name: 'Polygon Mainnet',
    chain: 'Polygon',
    chainId: 137,
    rpc: [
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.network',
      'https://matic-mainnet.chainstacklabs.com',
      'https://rpc-mainnet.maticvigil.com',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://matic-mainnet-full-rpc.bwarelabs.com',
      'https://polygon-bor.publicnode.com'
    ],
    icon: 'polygon',
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC'
    },
    explorers: [
      {
        url: 'https://polygonscan.com',
        name: 'polygonscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bbc692ab-ff6e-551f-9b97-db07f1805c6f',
    name: 'Openpiece Testnet',
    chain: 'OPENPIECE',
    chainId: 141,
    rpc: ['https://testnet.openpiece.io'],
    icon: 'openpiece',
    nativeCurrency: {
      decimals: 18,
      name: 'Belly',
      symbol: 'BELLY'
    },
    explorers: [
      {
        url: 'https://testnet.bellyscan.com',
        name: 'Belly Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd961f16e-83d1-5232-988e-3ce9fa29fa63',
    name: 'DAX CHAIN',
    chain: 'DAX',
    chainId: 142,
    rpc: ['https://rpc.prodax.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Prodax',
      symbol: 'DAX'
    },
    explorers: null
  },
  {
    id: 'e4433b00-09fd-5992-a1fc-64c2cfdbe31b',
    name: 'PHI Network v2',
    chain: 'PHI',
    chainId: 144,
    rpc: ['https://connect.phi.network'],
    icon: 'phi',
    nativeCurrency: {
      decimals: 18,
      name: 'PHI',
      symbol: 'Φ'
    },
    explorers: [
      {
        url: 'https://phiscan.com',
        name: 'Phiscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '521a9edf-0903-5e24-bc2e-b515ac2db22b',
    name: 'Armonia Eva Chain Mainnet',
    chain: 'Eva',
    chainId: 160,
    rpc: ['https://evascan.io/api/eth-rpc/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Armonia Multichain Native Token',
      symbol: 'AMAX'
    },
    explorers: null
  },
  {
    id: '917c6780-a62d-5686-8185-88b3442f335a',
    name: 'Armonia Eva Chain Testnet',
    chain: 'Wall-e',
    chainId: 161,
    rpc: ['https://testnet.evascan.io/api/eth-rpc/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Armonia Multichain Native Token',
      symbol: 'AMAX'
    },
    explorers: [
      {
        url: 'https://testnet.evascan.io',
        name: 'blockscout - evascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '181db7eb-5350-5a38-a946-2dd2f6d820b9',
    name: 'Lightstreams Testnet',
    chain: 'PHT',
    chainId: 162,
    rpc: ['https://node.sirius.lightstreams.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Lightstreams PHT',
      symbol: 'PHT'
    },
    explorers: null
  },
  {
    id: '1b40e1cf-c4b7-5088-8b6f-938139db3ed2',
    name: 'Lightstreams Mainnet',
    chain: 'PHT',
    chainId: 163,
    rpc: ['https://node.mainnet.lightstreams.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Lightstreams PHT',
      symbol: 'PHT'
    },
    explorers: null
  },
  {
    id: '67c8f7ce-b4dd-5e6a-9b62-969322355b81',
    name: 'Atoshi Testnet',
    chain: 'ATOSHI',
    chainId: 167,
    rpc: ['https://node.atoshi.io/'],
    icon: 'atoshi',
    nativeCurrency: {
      decimals: 18,
      name: 'ATOSHI',
      symbol: 'ATOS'
    },
    explorers: [
      {
        url: 'https://scan.atoverse.info',
        name: 'atoshiscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0e0272e0-02a5-52d4-a6dc-30e4f2e83456',
    name: 'AIOZ Network',
    chain: 'AIOZ',
    chainId: 168,
    rpc: ['https://eth-dataseed.aioz.network'],
    icon: 'aioz',
    nativeCurrency: {
      decimals: 18,
      name: 'AIOZ',
      symbol: 'AIOZ'
    },
    explorers: [
      {
        url: 'https://explorer.aioz.network',
        name: 'AIOZ Network Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e5da9737-e4a1-5c6f-8c6e-931f029302ef',
    name: 'HOO Smart Chain Testnet',
    chain: 'ETH',
    chainId: 170,
    rpc: ['https://http-testnet.hoosmartchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'HOO',
      symbol: 'HOO'
    },
    explorers: null
  },
  {
    id: 'dc57c9a3-fb18-53cb-8e05-e34aaea1cae0',
    name: 'Latam-Blockchain Resil Testnet',
    chain: 'Resil',
    chainId: 172,
    rpc: ['https://rpc.latam-blockchain.com', 'wss://ws.latam-blockchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Latam-Blockchain Resil Test Native Token',
      symbol: 'usd'
    },
    explorers: null
  },
  {
    id: '864e0174-8f21-5351-af51-2eb164b0db9d',
    name: 'AME Chain Mainnet',
    chain: 'AME',
    chainId: 180,
    rpc: ['https://node1.amechain.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'AME',
      symbol: 'AME'
    },
    explorers: [
      {
        url: 'https://amescan.io',
        name: 'AME Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c9d3d5d3-3ffb-52fd-b576-99293cf2d966',
    name: 'Seele Mainnet',
    chain: 'Seele',
    chainId: 186,
    rpc: ['https://rpc.seelen.pro/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Seele',
      symbol: 'Seele'
    },
    explorers: [
      {
        url: 'https://seeleview.net',
        name: 'seeleview',
        standard: 'none'
      }
    ]
  },
  {
    id: '436c3be6-47d8-5e28-964d-af6f5b8412bf',
    name: 'BMC Mainnet',
    chain: 'BMC',
    chainId: 188,
    rpc: ['https://mainnet.bmcchain.com/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BTM',
      symbol: 'BTM'
    },
    explorers: [
      {
        url: 'https://bmc.blockmeta.com',
        name: 'Blockmeta',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b5392ed3-f48d-5856-82fa-bba082a47ea3',
    name: 'BMC Testnet',
    chain: 'BMC',
    chainId: 189,
    rpc: ['https://testnet.bmcchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BTM',
      symbol: 'BTM'
    },
    explorers: [
      {
        url: 'https://bmctestnet.blockmeta.com',
        name: 'Blockmeta',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e73b3fcf-08c2-585f-86fa-9a7181aa908e',
    name: 'Crypto Emergency',
    chain: 'CEM',
    chainId: 193,
    rpc: ['https://cemchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Crypto Emergency',
      symbol: 'CEM'
    },
    explorers: [
      {
        url: 'https://cemscan.com',
        name: 'cemscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b02fef8c-7822-58c4-8385-894239077d9b',
    name: 'BitTorrent Chain Mainnet',
    chain: 'BTTC',
    chainId: 199,
    rpc: ['https://rpc.bittorrentchain.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BitTorrent',
      symbol: 'BTT'
    },
    explorers: [
      {
        url: 'https://scan.bittorrentchain.io',
        name: 'bttcscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '4f9b529c-11ad-5cbb-9ec8-912978fce9c4',
    name: 'Arbitrum on xDai',
    chain: 'AOX',
    chainId: 200,
    rpc: ['https://arbitrum.xdaichain.com/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'xDAI',
      symbol: 'xDAI'
    },
    explorers: [
      {
        url: 'https://blockscout.com/xdai/arbitrum',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f92009cd-4bc4-5631-980d-8e88b44f04b0',
    name: 'MOAC testnet',
    chain: 'MOAC',
    chainId: 201,
    rpc: ['https://gateway.moac.io/testnet'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MOAC',
      symbol: 'mc'
    },
    explorers: [
      {
        url: 'https://testnet.moac.io',
        name: 'moac testnet explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '40480ed5-55ef-5b76-bae5-111325d9eb86',
    name: 'Freight Trust Network',
    chain: 'EDI',
    chainId: 211,
    rpc: [
      'http://13.57.207.168:3435',
      'https://app.freighttrust.net/ftn/${API_KEY}'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Freight Trust Native',
      symbol: '0xF'
    },
    explorers: null
  },
  {
    id: '089cb2c4-08b6-58d2-b3f6-ad2cd782ac46',
    name: 'MAP Makalu',
    chain: 'MAP',
    chainId: 212,
    rpc: ['https://testnet-rpc.maplabs.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Makalu MAP',
      symbol: 'MAP'
    },
    explorers: [
      {
        url: 'https://testnet.mapscan.io',
        name: 'mapscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0dfe8b42-6786-510b-a2ab-e6e888792ce6',
    name: 'SiriusNet V2',
    chain: 'SIN2',
    chainId: 217,
    rpc: ['https://rpc2.siriusnet.io'],
    icon: 'siriusnet',
    nativeCurrency: {
      decimals: 18,
      name: 'MCD',
      symbol: 'MCD'
    },
    explorers: [
      {
        url: 'https://scan.siriusnet.io',
        name: 'siriusnet explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '1f108079-faf0-5597-8f46-b5cec8844773',
    name: 'SoterOne Mainnet old',
    chain: 'SOTER',
    chainId: 218,
    rpc: ['https://rpc.soter.one'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'SoterOne Mainnet Ether',
      symbol: 'SOTER'
    },
    explorers: null
  },
  {
    id: 'c1b6c50e-452e-5ba9-8dbf-4dcdf8709382',
    name: 'Permission',
    chain: 'ASK',
    chainId: 222,
    rpc: ['https://blockchain-api-mainnet.permission.io/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ASK',
      symbol: 'ASK'
    },
    explorers: null
  },
  {
    id: '6d7e6c7b-5981-51bc-99be-c0e08e59eaae',
    name: 'LACHAIN Mainnet',
    chain: 'LA',
    chainId: 225,
    rpc: ['https://rpc-mainnet.lachain.io'],
    icon: 'lachain',
    nativeCurrency: {
      decimals: 18,
      name: 'LA',
      symbol: 'LA'
    },
    explorers: [
      {
        url: 'https://scan.lachain.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '85dd9da2-fcee-5cba-b9e1-c8d454a87cce',
    name: 'LACHAIN Testnet',
    chain: 'TLA',
    chainId: 226,
    rpc: ['https://rpc-testnet.lachain.io'],
    icon: 'lachain',
    nativeCurrency: {
      decimals: 18,
      name: 'TLA',
      symbol: 'TLA'
    },
    explorers: [
      {
        url: 'https://scan-test.lachain.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6a4707cf-a199-50e8-b0b2-2f522b5d682d',
    name: 'Energy Web Chain',
    chain: 'Energy Web Chain',
    chainId: 246,
    rpc: ['https://rpc.energyweb.org', 'wss://rpc.energyweb.org/ws'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Energy Web Token',
      symbol: 'EWT'
    },
    explorers: [
      {
        url: 'https://explorer.energyweb.org',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '2f49b362-d38c-5e3f-a404-a459a3212acb',
    name: 'Oasys Mainnet',
    chain: 'Oasys',
    chainId: 248,
    rpc: ['https://rpc.mainnet.oasys.games'],
    icon: 'oasys',
    nativeCurrency: {
      decimals: 18,
      name: 'OAS',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer.oasys.games',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2da150b6-073c-5e74-9c09-5d283bdf0e60',
    name: 'Fantom Opera',
    chain: 'FTM',
    chainId: 250,
    rpc: ['https://rpc.ftm.tools', 'https://fantom.publicnode.com'],
    icon: 'fantom',
    nativeCurrency: {
      decimals: 18,
      name: 'Fantom',
      symbol: 'FTM'
    },
    explorers: [
      {
        url: 'https://ftmscan.com',
        name: 'ftmscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c600c29c-ea39-5668-98de-7aaff3506f2a',
    name: 'Huobi ECO Chain Testnet',
    chain: 'Heco',
    chainId: 256,
    rpc: [
      'https://http-testnet.hecochain.com',
      'wss://ws-testnet.hecochain.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Huobi ECO Chain Test Native Token',
      symbol: 'htt'
    },
    explorers: null
  },
  {
    id: '1b0fe834-ae0b-526e-9282-e46d72dd0c5f',
    name: 'Setheum',
    chain: 'Setheum',
    chainId: 258,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Setheum',
      symbol: 'SETM'
    },
    explorers: null
  },
  {
    id: '520156ee-7336-5f4a-97ac-bb9e8c035fed',
    name: 'SUR Blockchain Network',
    chain: 'SUR',
    chainId: 262,
    rpc: ['https://sur.nilin.org'],
    icon: 'SUR',
    nativeCurrency: {
      decimals: 18,
      name: 'Suren',
      symbol: 'SRN'
    },
    explorers: [
      {
        url: 'https://explorer.surnet.org',
        name: 'Surnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bfbc069e-cd47-5abd-8ae7-7d41d6a1d390',
    name: 'High Performance Blockchain',
    chain: 'HPB',
    chainId: 269,
    rpc: ['https://hpbnode.com', 'wss://ws.hpbnode.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'High Performance Blockchain Ether',
      symbol: 'HPB'
    },
    explorers: [
      {
        url: 'https://hscan.org',
        name: 'hscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bf074049-1366-52a5-880f-2881faad2fc2',
    name: 'zkSync Era Testnet',
    chain: 'ETH',
    chainId: 280,
    rpc: ['https://zksync2-testnet.zksync.dev'],
    icon: 'zksync-era',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://goerli.explorer.zksync.io',
        name: 'zkSync Era Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2fbe8c07-abbc-500b-9605-8bb1a2e2cd82',
    name: 'Boba Network',
    chain: 'ETH',
    chainId: 288,
    rpc: ['https://mainnet.boba.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://bobascan.com',
        name: 'Bobascan',
        standard: 'none'
      },
      {
        url: 'https://blockexplorer.boba.network',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '8c95dc05-3514-5fde-8311-147ea92b9b8f',
    name: 'Hedera Mainnet',
    chain: 'Hedera',
    chainId: 295,
    rpc: ['https://mainnet.hashio.io/api'],
    icon: 'hedera',
    nativeCurrency: {
      decimals: 8,
      name: 'hbar',
      symbol: 'HBAR'
    },
    explorers: [
      {
        url: 'https://hashscan.io/mainnet/dashboard',
        name: 'HashScan',
        standard: 'none'
      },
      {
        url: 'https://explorer.arkhia.io',
        name: 'Arkhia Explorer',
        standard: 'none'
      },
      {
        url: 'https://app.dragonglass.me',
        name: 'DragonGlass',
        standard: 'none'
      },
      {
        url: 'https://hederaexplorer.io',
        name: 'Hedera Explorer',
        standard: 'none'
      },
      {
        url: 'https://explore.lworks.io',
        name: 'Ledger Works Explore',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd70c3485-13e5-551c-85b2-5cd6ce7f1f64',
    name: 'Hedera Testnet',
    chain: 'Hedera',
    chainId: 296,
    rpc: ['https://testnet.hashio.io/api'],
    icon: 'hedera',
    nativeCurrency: {
      decimals: 8,
      name: 'hbar',
      symbol: 'HBAR'
    },
    explorers: [
      {
        url: 'https://hashscan.io/testnet/dashboard',
        name: 'HashScan',
        standard: 'none'
      },
      {
        url: 'https://explorer.arkhia.io',
        name: 'Arkhia Explorer',
        standard: 'none'
      },
      {
        url: 'https://app.dragonglass.me',
        name: 'DragonGlass',
        standard: 'none'
      },
      {
        url: 'https://hederaexplorer.io',
        name: 'Hedera Explorer',
        standard: 'none'
      },
      {
        url: 'https://explore.lworks.io',
        name: 'Ledger Works Explore',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c23c3a66-ff34-5144-b188-c6be094795bd',
    name: 'Hedera Previewnet',
    chain: 'Hedera',
    chainId: 297,
    rpc: ['https://previewnet.hashio.io/api'],
    icon: 'hedera',
    nativeCurrency: {
      decimals: 8,
      name: 'hbar',
      symbol: 'HBAR'
    },
    explorers: [
      {
        url: 'https://hashscan.io/previewnet/dashboard',
        name: 'HashScan',
        standard: 'none'
      }
    ]
  },
  {
    id: '8714775a-b73b-5cab-b43e-0e43ffa1588e',
    name: 'Hedera Localnet',
    chain: 'Hedera',
    chainId: 298,
    rpc: [],
    icon: 'hedera',
    nativeCurrency: {
      decimals: 8,
      name: 'hbar',
      symbol: 'HBAR'
    },
    explorers: []
  },
  {
    id: '34d00a54-c232-5884-9b83-bd9373c08424',
    name: 'Optimism on Gnosis',
    chain: 'OGC',
    chainId: 300,
    rpc: [
      'https://optimism.gnosischain.com',
      'wss://optimism.gnosischain.com/wss'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'xDAI',
      symbol: 'xDAI'
    },
    explorers: [
      {
        url: 'https://blockscout.com/xdai/optimism',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '15aa9085-89c5-57ea-ab77-97d0bad73685',
    name: 'Bobaopera',
    chain: 'Bobaopera',
    chainId: 301,
    rpc: [
      'https://bobaopera.boba.network',
      'wss://wss.bobaopera.boba.network',
      'https://replica.bobaopera.boba.network',
      'wss://replica-wss.bobaopera.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.bobaopera.boba.network',
        name: 'Bobaopera block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '0588856f-2ff9-531d-8fd2-6471ad973117',
    name: 'Omax Mainnet',
    chain: 'OMAX Chain',
    chainId: 311,
    rpc: ['https://mainapi.omaxray.com'],
    icon: 'omaxchain',
    nativeCurrency: {
      decimals: 18,
      name: 'OMAX COIN',
      symbol: 'OMAX'
    },
    explorers: [
      {
        url: 'https://omaxray.com',
        name: 'Omax Chain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4aaeab5c-bf98-5c2f-8263-5d3f03e260f4',
    name: 'Filecoin - Mainnet',
    chain: 'FIL',
    chainId: 314,
    rpc: ['https://api.node.glif.io/', 'https://rpc.ankr.com/filecoin'],
    icon: 'filecoin',
    nativeCurrency: {
      decimals: 18,
      name: 'filecoin',
      symbol: 'FIL'
    },
    explorers: [
      {
        url: 'https://filfox.info/en',
        name: 'Filfox',
        standard: 'none'
      },
      {
        url: 'https://beryx.zondax.ch',
        name: 'Beryx',
        standard: 'none'
      },
      {
        url: 'https://explorer.glif.io',
        name: 'Glif Explorer',
        standard: 'EIP3091'
      },
      {
        url: 'https://explorer.filmine.io',
        name: 'Filmine',
        standard: 'none'
      },
      {
        url: 'https://filscan.io',
        name: 'Filscan',
        standard: 'none'
      },
      {
        url: 'https://filscout.io/en',
        name: 'Filscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '045490c9-9bef-5434-acca-72c398c9bc62',
    name: 'KCC Mainnet',
    chain: 'KCC',
    chainId: 321,
    rpc: [
      'https://rpc-mainnet.kcc.network',
      'https://kcc.mytokenpocket.vip',
      'https://public-rpc.blockpi.io/http/kcc'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'KuCoin Token',
      symbol: 'KCS'
    },
    explorers: [
      {
        url: 'https://explorer.kcc.io/en',
        name: 'KCC Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '363cc40c-870c-5380-89f4-3945638ebae3',
    name: 'KCC Testnet',
    chain: 'KCC',
    chainId: 322,
    rpc: ['https://rpc-testnet.kcc.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'KuCoin Testnet Token',
      symbol: 'tKCS'
    },
    explorers: [
      {
        url: 'https://scan-testnet.kcc.network',
        name: 'kcc-scan-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd470abe5-5f09-5f17-870b-936d41efd4cd',
    name: 'zkSync Era Mainnet',
    chain: 'ETH',
    chainId: 324,
    rpc: ['https://zksync2-mainnet.zksync.io'],
    icon: 'zksync-era',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.zksync.io',
        name: 'zkSync Era Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '303f0efa-5143-524c-88de-419bc78e9a0a',
    name: 'Web3Q Mainnet',
    chain: 'Web3Q',
    chainId: 333,
    rpc: ['https://mainnet.web3q.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Web3Q',
      symbol: 'W3Q'
    },
    explorers: [
      {
        url: 'https://explorer.mainnet.web3q.io',
        name: 'w3q-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7c426b8b-797a-54ab-85f8-7d319f807402',
    name: 'DFK Chain Test',
    chain: 'DFK',
    chainId: 335,
    rpc: ['https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc'],
    icon: 'dfk',
    nativeCurrency: {
      decimals: 18,
      name: 'Jewel',
      symbol: 'JEWEL'
    },
    explorers: [
      {
        url: 'https://explorer-test.dfkchain.com',
        name: 'ethernal',
        standard: 'none'
      }
    ]
  },
  {
    id: '27ee1d3d-777c-5ddf-bdf5-1907e4ea3db7',
    name: 'Shiden',
    chain: 'SDN',
    chainId: 336,
    rpc: [
      'https://shiden.api.onfinality.io/public',
      'https://shiden-rpc.dwellir.com',
      'https://shiden.public.blastapi.io',
      'wss://shiden.api.onfinality.io/public-ws',
      'wss://shiden.public.blastapi.io',
      'wss://shiden-rpc.dwellir.com'
    ],
    icon: 'shiden',
    nativeCurrency: {
      decimals: 18,
      name: 'Shiden',
      symbol: 'SDN'
    },
    explorers: [
      {
        url: 'https://shiden.subscan.io',
        name: 'subscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '8646759f-0dfe-576e-a589-453de33cec37',
    name: 'Cronos Testnet',
    chain: 'CRO',
    chainId: 338,
    rpc: ['https://evm-t3.cronos.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Cronos Test Coin',
      symbol: 'TCRO'
    },
    explorers: [
      {
        url: 'https://testnet.cronoscan.com',
        name: 'Cronos Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '0b9abe99-f637-594b-96bf-7716f275a919',
    name: 'Theta Mainnet',
    chain: 'Theta',
    chainId: 361,
    rpc: ['https://eth-rpc-api.thetatoken.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Theta Fuel',
      symbol: 'TFUEL'
    },
    explorers: [
      {
        url: 'https://explorer.thetatoken.org',
        name: 'Theta Mainnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2dfbe907-f418-5318-919b-4d3c4faccdf9',
    name: 'Theta Sapphire Testnet',
    chain: 'Theta',
    chainId: 363,
    rpc: ['https://eth-rpc-api-sapphire.thetatoken.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Theta Fuel',
      symbol: 'TFUEL'
    },
    explorers: [
      {
        url: 'https://guardian-testnet-sapphire-explorer.thetatoken.org',
        name: 'Theta Sapphire Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0279681a-17cf-526b-bdf9-4d4cfc6f3d66',
    name: 'Theta Amber Testnet',
    chain: 'Theta',
    chainId: 364,
    rpc: ['https://eth-rpc-api-amber.thetatoken.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Theta Fuel',
      symbol: 'TFUEL'
    },
    explorers: [
      {
        url: 'https://guardian-testnet-amber-explorer.thetatoken.org',
        name: 'Theta Amber Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dba0743c-45fe-5ec0-9395-723869c1d520',
    name: 'Theta Testnet',
    chain: 'Theta',
    chainId: 365,
    rpc: ['https://eth-rpc-api-testnet.thetatoken.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Theta Fuel',
      symbol: 'TFUEL'
    },
    explorers: [
      {
        url: 'https://testnet-explorer.thetatoken.org',
        name: 'Theta Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '476b2021-c01d-5bc7-be75-ff19b968d386',
    name: 'PulseChain Mainnet',
    chain: 'PLS',
    chainId: 369,
    rpc: [
      'https://rpc.mainnet.pulsechain.com/',
      'wss://rpc.mainnet.pulsechain.com/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Pulse',
      symbol: 'PLS'
    },
    explorers: null
  },
  {
    id: 'e3b63e47-f4bc-569a-bebd-175948a19d15',
    name: 'Consta Testnet',
    chain: 'tCNT',
    chainId: 371,
    rpc: ['https://rpc-testnet.theconsta.com'],
    icon: 'constachain',
    nativeCurrency: {
      decimals: 18,
      name: 'tCNT',
      symbol: 'tCNT'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.theconsta.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bf029110-001a-5aef-943a-042f762cda74',
    name: 'Lisinski',
    chain: 'CRO',
    chainId: 385,
    rpc: ['https://rpc-bitfalls1.lisinski.online'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Lisinski Ether',
      symbol: 'LISINS'
    },
    explorers: null
  },
  {
    id: 'de64e869-1c1b-5b48-9bd2-e74e720f6146',
    name: 'HyperonChain TestNet',
    chain: 'HPN',
    chainId: 400,
    rpc: ['https://testnet-rpc.hyperonchain.com'],
    icon: 'hyperonchain',
    nativeCurrency: {
      decimals: 18,
      name: 'HyperonChain',
      symbol: 'HPN'
    },
    explorers: [
      {
        url: 'https://testnet.hyperonchain.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8004e0bc-d9f1-59cd-9dc8-af3fa41fda6b',
    name: 'SX Network Mainnet',
    chain: 'SX',
    chainId: 416,
    rpc: ['https://rpc.sx.technology'],
    icon: 'SX',
    nativeCurrency: {
      decimals: 18,
      name: 'SX Network',
      symbol: 'SX'
    },
    explorers: [
      {
        url: 'https://explorer.sx.technology',
        name: 'SX Network Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'db75580d-c12b-5fc3-a7db-f7963b032e6f',
    name: 'Optimism Goerli Testnet',
    chain: 'ETH',
    chainId: 420,
    rpc: ['https://goerli.optimism.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: '0dbd58df-a22f-5ba6-9962-7fc9e291e0ad',
    name: 'Zeeth Chain',
    chain: 'ZeethChain',
    chainId: 427,
    rpc: ['https://rpc.zeeth.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Zeeth Token',
      symbol: 'ZTH'
    },
    explorers: [
      {
        url: 'https://explorer.zeeth.io',
        name: 'Zeeth Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '142c9c30-73d3-596b-bca1-d506b35c6965',
    name: 'Frenchain Testnet',
    chain: 'tfren',
    chainId: 444,
    rpc: ['https://rpc-01tn.frenchain.app'],
    icon: 'fren',
    nativeCurrency: {
      decimals: 18,
      name: 'tFREN',
      symbol: 'FtREN'
    },
    explorers: [
      {
        url: 'https://testnet.frenscan.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5151e382-0a28-5b30-b007-4dd7095e8188',
    name: 'Rupaya',
    chain: 'RUPX',
    chainId: 499,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Rupaya',
      symbol: 'RUPX'
    },
    explorers: null
  },
  {
    id: 'ca434234-0fa8-53eb-b9a3-74d537e9a5f7',
    name: 'Camino C-Chain',
    chain: 'CAM',
    chainId: 500,
    rpc: [],
    icon: 'camino',
    nativeCurrency: {
      decimals: 18,
      name: 'Camino',
      symbol: 'CAM'
    },
    explorers: [
      {
        url: 'https://explorer.camino.foundation/mainnet',
        name: 'blockexplorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'f854bde2-3794-5900-aa52-78a3f800a672',
    name: 'Columbus Test Network',
    chain: 'CAM',
    chainId: 501,
    rpc: [],
    icon: 'camino',
    nativeCurrency: {
      decimals: 18,
      name: 'Camino',
      symbol: 'CAM'
    },
    explorers: [
      {
        url: 'https://explorer.camino.foundation',
        name: 'blockexplorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '12bf5896-b77f-5a67-9fdc-93e8aaefd014',
    name: 'Double-A Chain Mainnet',
    chain: 'AAC',
    chainId: 512,
    rpc: ['https://rpc.acuteangle.com'],
    icon: 'aac',
    nativeCurrency: {
      decimals: 18,
      name: 'Acuteangle Native Token',
      symbol: 'AAC'
    },
    explorers: [
      {
        url: 'https://scan.acuteangle.com',
        name: 'aacscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '25357dff-8168-5e1b-b669-d178c110d004',
    name: 'Double-A Chain Testnet',
    chain: 'AAC',
    chainId: 513,
    rpc: ['https://rpc-testnet.acuteangle.com'],
    icon: 'aac',
    nativeCurrency: {
      decimals: 18,
      name: 'Acuteangle Native Token',
      symbol: 'AAC'
    },
    explorers: [
      {
        url: 'https://scan-testnet.acuteangle.com',
        name: 'aacscan-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f95cabcb-d9e5-5d80-b9d9-c6553f87571e',
    name: 'Gear Zero Network Mainnet',
    chain: 'GearZero',
    chainId: 516,
    rpc: ['https://gzn.linksme.info'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Gear Zero Network Native Token',
      symbol: 'GZN'
    },
    explorers: []
  },
  {
    id: '51c9ff1b-7778-5037-af51-5002503b7a26',
    name: 'XT Smart Chain Mainnet',
    chain: 'XSC',
    chainId: 520,
    rpc: [
      'https://datarpc1.xsc.pub',
      'https://datarpc2.xsc.pub',
      'https://datarpc3.xsc.pub'
    ],
    icon: 'xsc',
    nativeCurrency: {
      decimals: 18,
      name: 'XT Smart Chain Native Token',
      symbol: 'XT'
    },
    explorers: [
      {
        url: 'https://xscscan.pub',
        name: 'xscscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6dee1ce8-9221-58ca-b05d-ce61ff06d2f9',
    name: 'Firechain Mainnet',
    chain: 'FIRE',
    chainId: 529,
    rpc: ['https://mainnet.rpc1.thefirechain.com'],
    icon: 'firechain',
    nativeCurrency: {
      decimals: 18,
      name: 'Firechain',
      symbol: 'FIRE'
    },
    explorers: []
  },
  {
    id: '84af5539-0f93-5d18-8a16-9f9f551361db',
    name: 'F(x)Core Mainnet Network',
    chain: 'Fxcore',
    chainId: 530,
    rpc: ['https://fx-json-web3.functionx.io:8545'],
    icon: 'fxcore',
    nativeCurrency: {
      decimals: 18,
      name: 'Function X',
      symbol: 'FX'
    },
    explorers: [
      {
        url: 'https://fx-evm.functionx.io',
        name: 'FunctionX Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'fb971fef-7aaa-5e26-bf0e-37864cd46079',
    name: 'Candle',
    chain: 'Candle',
    chainId: 534,
    rpc: ['https://candle-rpc.com/', 'https://rpc.cndlchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CANDLE',
      symbol: 'CNDL'
    },
    explorers: [
      {
        url: 'https://candleexplorer.com',
        name: 'candleexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '972587d2-46a5-50a8-a1a9-2b0ce1f3eb8e',
    name: 'Vela1 Chain Mainnet',
    chain: 'VELA1',
    chainId: 555,
    rpc: ['https://rpc.velaverse.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CLASS COIN',
      symbol: 'CLASS'
    },
    explorers: [
      {
        url: 'https://exp.velaverse.io',
        name: 'Vela1 Chain Mainnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '98affe17-1389-501a-b47f-f7cd28099d0b',
    name: 'Tao Network',
    chain: 'TAO',
    chainId: 558,
    rpc: [
      'https://rpc.testnet.tao.network',
      'http://rpc.testnet.tao.network:8545',
      'https://rpc.tao.network',
      'wss://rpc.tao.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Tao',
      symbol: 'TAO'
    },
    explorers: null
  },
  {
    id: '6511bd57-ed20-58c5-907f-37de6c985bee',
    name: 'Dogechain Testnet',
    chain: 'DC',
    chainId: 568,
    rpc: ['https://rpc-testnet.dogechain.dog'],
    icon: 'dogechain',
    nativeCurrency: {
      decimals: 18,
      name: 'Dogecoin',
      symbol: 'DOGE'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.dogechain.dog',
        name: 'dogechain testnet explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'cd25c468-169c-51f3-af0e-2a919d9b7039',
    name: 'Metis Stardust Testnet',
    chain: 'ETH',
    chainId: 588,
    rpc: ['https://stardust.metis.io/?owner=588'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'tMetis',
      symbol: 'METIS'
    },
    explorers: [
      {
        url: 'https://stardust-explorer.metis.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5e60f134-f970-577d-90d1-af3539cdc992',
    name: 'Astar',
    chain: 'ASTR',
    chainId: 592,
    rpc: ['https://rpc.astar.network:8545'],
    icon: 'astar',
    nativeCurrency: {
      decimals: 18,
      name: 'Astar',
      symbol: 'ASTR'
    },
    explorers: [
      {
        url: 'https://astar.subscan.io',
        name: 'subscan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a8ae5137-c598-545c-82ea-74f897f4aaba',
    name: 'Acala Mandala Testnet',
    chain: 'mACA',
    chainId: 595,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Acala Mandala Token',
      symbol: 'mACA'
    },
    explorers: null
  },
  {
    id: '2bec7b9b-cdd4-5195-a032-1ea2d8cf6428',
    name: 'Karura Network Testnet',
    chain: 'KAR',
    chainId: 596,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Karura Token',
      symbol: 'KAR'
    },
    explorers: null
  },
  {
    id: 'c3d75b26-7561-51cf-89e5-355557c2353d',
    name: 'Acala Network Testnet',
    chain: 'ACA',
    chainId: 597,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Acala Token',
      symbol: 'ACA'
    },
    explorers: null
  },
  {
    id: '3255ee9b-6350-5a36-8c5f-f97ad67da7cf',
    name: 'Metis Goerli Testnet',
    chain: 'ETH',
    chainId: 599,
    rpc: ['https://goerli.gateway.metisdevops.link'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Metis',
      symbol: 'METIS'
    },
    explorers: [
      {
        url: 'https://goerli.explorer.metisdevops.link',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'abd586f2-48d0-55f5-a82d-59803a220745',
    name: 'Meshnyan testnet',
    chain: 'MeshTestChain',
    chainId: 600,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Meshnyan Testnet Native Token',
      symbol: 'MESHT'
    },
    explorers: null
  },
  {
    id: 'a86cde5e-73f1-5865-ad04-33498b4a7162',
    name: 'Graphlinq Blockchain Mainnet',
    chain: 'GLQ Blockchain',
    chainId: 614,
    rpc: ['https://glq-dataseed.graphlinq.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GLQ',
      symbol: 'GLQ'
    },
    explorers: [
      {
        url: 'https://explorer.graphlinq.io',
        name: 'GLQ Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '3ac5b741-46c6-5683-b3dc-83e0fd644cbc',
    name: 'SX Network Testnet',
    chain: 'SX',
    chainId: 647,
    rpc: ['https://rpc.toronto.sx.technology'],
    icon: 'SX',
    nativeCurrency: {
      decimals: 18,
      name: 'SX Network',
      symbol: 'SX'
    },
    explorers: [
      {
        url: 'https://explorer.toronto.sx.technology',
        name: 'SX Network Toronto Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '37daf88e-6aca-5d01-9e20-8c16d550b3f8',
    name: 'Endurance Smart Chain Mainnet',
    chain: 'ACE',
    chainId: 648,
    rpc: ['https://rpc-endurance.fusionist.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Endurance Chain Native Token',
      symbol: 'ACE'
    },
    explorers: [
      {
        url: 'https://explorer.endurance.fusionist.io',
        name: 'Endurance Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd323bc8d-02ae-582f-ba3a-47b6798c287d',
    name: 'Pixie Chain Testnet',
    chain: 'PixieChain',
    chainId: 666,
    rpc: [
      'https://http-testnet.chain.pixie.xyz',
      'wss://ws-testnet.chain.pixie.xyz'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Pixie Chain Testnet Native Token',
      symbol: 'PCTT'
    },
    explorers: null
  },
  {
    id: '17f14856-54d0-5ea6-bcfe-a23eea659128',
    name: 'Karura Network',
    chain: 'KAR',
    chainId: 686,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Karura Token',
      symbol: 'KAR'
    },
    explorers: null
  },
  {
    id: '67921573-5b18-58a1-95f2-47d35b207b93',
    name: 'Star Social Testnet',
    chain: 'SNS',
    chainId: 700,
    rpc: ['https://avastar.cc/ext/bc/C/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Social',
      symbol: 'SNS'
    },
    explorers: [
      {
        url: 'https://avastar.info',
        name: 'starscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '58e3e184-1a1f-567a-a48b-2b84f48952ce',
    name: 'BlockChain Station Mainnet',
    chain: 'BCS',
    chainId: 707,
    rpc: ['https://rpc-mainnet.bcsdev.io', 'wss://rpc-ws-mainnet.bcsdev.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BCS Token',
      symbol: 'BCS'
    },
    explorers: [
      {
        url: 'https://explorer.bcsdev.io',
        name: 'BlockChain Station Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6ffb5f21-8c2c-54bb-aff5-bb66dc63b1d3',
    name: 'BlockChain Station Testnet',
    chain: 'BCS',
    chainId: 708,
    rpc: ['https://rpc-testnet.bcsdev.io', 'wss://rpc-ws-testnet.bcsdev.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BCS Testnet Token',
      symbol: 'tBCS'
    },
    explorers: [
      {
        url: 'https://testnet.bcsdev.io',
        name: 'BlockChain Station Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1a40371b-739c-5089-a1f6-5d7af0f41e02',
    name: 'Lycan Chain',
    chain: 'LYC',
    chainId: 721,
    rpc: ['https://rpc.lycanchain.com/'],
    icon: 'lycanchain',
    nativeCurrency: {
      decimals: 18,
      name: 'Lycan',
      symbol: 'LYC'
    },
    explorers: [
      {
        url: 'https://explorer.lycanchain.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '23a90ad6-aa29-528a-b4d0-e2f9d676ad01',
    name: 'Canto Testnet',
    chain: 'Canto Tesnet',
    chainId: 740,
    rpc: ['https://eth.plexnode.wtf/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Canto',
      symbol: 'CANTO'
    },
    explorers: [
      {
        url: 'http://testnet-explorer.canto.neobase.one',
        name: 'Canto Tesnet Explorer (Neobase)',
        standard: 'none'
      }
    ]
  },
  {
    id: '76b73b6f-7b8e-511a-8b64-5f221f86e7f6',
    name: 'Vention Smart Chain Testnet',
    chain: 'VSCT',
    chainId: 741,
    rpc: ['https://node-testnet.vention.network'],
    icon: 'ventionTestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'VNT',
      symbol: 'VNT'
    },
    explorers: [
      {
        url: 'https://testnet.ventionscan.io',
        name: 'ventionscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '61b2faa3-53ed-52ca-a3ea-b6f0b9f1a4f4',
    name: 'QL1',
    chain: 'QOM',
    chainId: 766,
    rpc: ['https://rpc.qom.one'],
    icon: 'qom',
    nativeCurrency: {
      decimals: 18,
      name: 'Shiba Predator',
      symbol: 'QOM'
    },
    explorers: [
      {
        url: 'https://mainnet.qom.one',
        name: 'QL1 Mainnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dd4609c8-2e7d-53fe-bc30-8d92e39b89b4',
    name: 'OpenChain Testnet',
    chain: 'OpenChain Testnet',
    chainId: 776,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Openchain Testnet',
      symbol: 'TOPC'
    },
    explorers: [
      {
        url: 'https://testnet.openchain.info',
        name: 'OPEN CHAIN TESTNET',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b841ee98-2ba5-593f-a464-f46d7dd138b9',
    name: 'cheapETH',
    chain: 'cheapETH',
    chainId: 777,
    rpc: ['https://node.cheapeth.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'cTH',
      symbol: 'cTH'
    },
    explorers: null
  },
  {
    id: 'ea222ae0-9d5d-563a-afd3-9f6ca6eed421',
    name: 'Acala Network',
    chain: 'ACA',
    chainId: 787,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Acala Token',
      symbol: 'ACA'
    },
    explorers: null
  },
  {
    id: '07978998-cb4b-5aa4-8d97-a12635bd386a',
    name: 'Aerochain Testnet',
    chain: 'Aerochain',
    chainId: 788,
    rpc: ['https://testnet-rpc.aerochain.id/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Aerochain Testnet',
      symbol: 'TAero'
    },
    explorers: [
      {
        url: 'https://testnet.aeroscan.id',
        name: 'aeroscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b4c3c0f2-7765-5c65-a8fa-27e69820113c',
    name: 'Lucid Blockchain',
    chain: 'Lucid Blockchain',
    chainId: 800,
    rpc: ['https://rpc.lucidcoin.io'],
    icon: 'lucid',
    nativeCurrency: {
      decimals: 18,
      name: 'LUCID',
      symbol: 'LUCID'
    },
    explorers: [
      {
        url: 'https://explorer.lucidcoin.io',
        name: 'Lucid Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e9f809d3-b650-59c2-874f-e1a104d213e8',
    name: 'Haic',
    chain: 'Haic',
    chainId: 803,
    rpc: ['https://orig.haichain.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Haicoin',
      symbol: 'HAIC'
    },
    explorers: null
  },
  {
    id: '6b50dab8-437b-562f-b30e-eef39ca35948',
    name: 'Portal Fantasy Chain Test',
    chain: 'PF',
    chainId: 808,
    rpc: ['https://subnets.avax.network/portal-fantasy/testnet/rpc'],
    icon: 'pf',
    nativeCurrency: {
      decimals: 18,
      name: 'Portal Fantasy Token',
      symbol: 'PFT'
    },
    explorers: []
  },
  {
    id: '71182450-0047-53ec-8b9b-2200691a7a63',
    name: 'Qitmeer',
    chain: 'MEER',
    chainId: 813,
    rpc: [
      'https://evm-dataseed1.meerscan.io',
      'https://evm-dataseed2.meerscan.io',
      'https://evm-dataseed3.meerscan.io',
      'https://evm-dataseed.meerscan.com',
      'https://evm-dataseed1.meerscan.com',
      'https://evm-dataseed2.meerscan.com'
    ],
    icon: 'meer',
    nativeCurrency: {
      decimals: 18,
      name: 'Qitmeer',
      symbol: 'MEER'
    },
    explorers: [
      {
        url: 'https://evm.meerscan.com',
        name: 'meerscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '5783528a-fa89-508d-b398-570a27b50b99',
    name: 'Callisto Mainnet',
    chain: 'CLO',
    chainId: 820,
    rpc: ['https://rpc.callisto.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Callisto',
      symbol: 'CLO'
    },
    explorers: null
  },
  {
    id: 'cea1380f-fb77-5207-abbe-889543bd648b',
    name: 'Callisto Testnet Deprecated',
    chain: 'CLO',
    chainId: 821,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Callisto Testnet Ether',
      symbol: 'TCLO'
    },
    explorers: null
  },
  {
    id: 'b957f48c-d1e5-5fe7-84cb-422dfca8caec',
    name: 'Taraxa Mainnet',
    chain: 'Tara',
    chainId: 841,
    rpc: ['https://rpc.mainnet.taraxa.io/'],
    icon: 'taraxa',
    nativeCurrency: {
      decimals: 18,
      name: 'Tara',
      symbol: 'TARA'
    },
    explorers: [
      {
        url: 'https://explorer.mainnet.taraxa.io',
        name: 'Taraxa Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '36e4fb26-1035-5c9d-aa41-91b3d5dda5f3',
    name: 'Taraxa Testnet',
    chain: 'Tara',
    chainId: 842,
    rpc: ['https://rpc.testnet.taraxa.io/'],
    icon: 'taraxa',
    nativeCurrency: {
      decimals: 18,
      name: 'Tara',
      symbol: 'TARA'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.taraxa.io',
        name: 'Taraxa Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '41428453-8e69-5955-a463-c986b8a0c634',
    name: 'Zeeth Chain Dev',
    chain: 'ZeethChainDev',
    chainId: 859,
    rpc: ['https://rpc.dev.zeeth.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Zeeth Token',
      symbol: 'ZTH'
    },
    explorers: [
      {
        url: 'https://explorer.dev.zeeth.io',
        name: 'Zeeth Explorer Dev',
        standard: 'none'
      }
    ]
  },
  {
    id: '80c0ed5f-0fb9-5b1f-b45c-b7dc9f918522',
    name: 'Fantasia Chain Mainnet',
    chain: 'FSC',
    chainId: 868,
    rpc: [
      'https://mainnet-data1.fantasiachain.com/',
      'https://mainnet-data2.fantasiachain.com/',
      'https://mainnet-data3.fantasiachain.com/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'FST',
      symbol: 'FST'
    },
    explorers: [
      {
        url: 'https://explorer.fantasiachain.com',
        name: 'FSCScan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '747e2573-082f-5306-9f6f-1089e7f75f3c',
    name: 'Bandai Namco Research Verse Mainnet',
    chain: 'Bandai Namco Research Verse',
    chainId: 876,
    rpc: ['https://rpc.main.oasvrs.bnken.net'],
    icon: 'bnken',
    nativeCurrency: {
      decimals: 18,
      name: 'OAS',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer.main.oasvrs.bnken.net',
        name: 'Bandai Namco Research Verse Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '159896c6-2a5f-5d0b-97fa-4fa5bb40152b',
    name: 'Dexit Network',
    chain: 'DXT',
    chainId: 877,
    rpc: ['https://dxt.dexit.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Dexit network',
      symbol: 'DXT'
    },
    explorers: [
      {
        url: 'https://dxtscan.com',
        name: 'dxtscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ed3afd6f-edf6-5107-8bdd-e084ab793a6b',
    name: 'Ambros Chain Mainnet',
    chain: 'ambroschain',
    chainId: 880,
    rpc: ['https://api.ambros.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'AMBROS',
      symbol: 'AMBROS'
    },
    explorers: [
      {
        url: 'https://ambrosscan.com',
        name: 'Ambros Chain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '68622b19-bdd2-58b0-b9a4-d0219d1cfd67',
    name: 'Wanchain',
    chain: 'WAN',
    chainId: 888,
    rpc: ['https://gwan-ssl.wandevs.org:56891/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Wancoin',
      symbol: 'WAN'
    },
    explorers: null
  },
  {
    id: '1742b380-ff70-5b3d-a60c-4ef4c8dcee35',
    name: 'Garizon Testnet Stage0',
    chain: 'GAR',
    chainId: 900,
    rpc: ['https://s0-testnet.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '318b3169-6967-57ac-ad4a-c35700bb8a75',
    name: 'Garizon Testnet Stage1',
    chain: 'GAR',
    chainId: 901,
    rpc: ['https://s1-testnet.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3cd6ca76-c751-5443-a079-c207bd19e8eb',
    name: 'Garizon Testnet Stage2',
    chain: 'GAR',
    chainId: 902,
    rpc: ['https://s2-testnet.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c740d9e5-5ba7-50d2-a6d5-650836c2b4dc',
    name: 'Garizon Testnet Stage3',
    chain: 'GAR',
    chainId: 903,
    rpc: ['https://s3-testnet.garizon.net/rpc'],
    icon: 'garizon',
    nativeCurrency: {
      decimals: 18,
      name: 'Garizon',
      symbol: 'GAR'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.garizon.com',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e5939674-546f-575c-950a-e24aafe8a4da',
    name: 'Portal Fantasy Chain',
    chain: 'PF',
    chainId: 909,
    rpc: [],
    icon: 'pf',
    nativeCurrency: {
      decimals: 18,
      name: 'Portal Fantasy Token',
      symbol: 'PFT'
    },
    explorers: []
  },
  {
    id: '2ffcc1a0-31b9-5bfc-9e19-c3511162fa60',
    name: 'Rinia Testnet',
    chain: 'FIRE',
    chainId: 917,
    rpc: ['https://rinia.rpc1.thefirechain.com'],
    icon: 'rinia',
    nativeCurrency: {
      decimals: 18,
      name: 'Firechain',
      symbol: 'FIRE'
    },
    explorers: []
  },
  {
    id: 'ec5081b8-75ff-5cb2-8506-322165578be0',
    name: 'PulseChain Testnet',
    chain: 'tPLS',
    chainId: 940,
    rpc: [
      'https://rpc.v2.testnet.pulsechain.com/',
      'wss://rpc.v2.testnet.pulsechain.com/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Test Pulse',
      symbol: 'tPLS'
    },
    explorers: null
  },
  {
    id: '551ea02a-a4a1-53c5-b394-2fd59fdc239b',
    name: 'PulseChain Testnet v2b',
    chain: 't2bPLS',
    chainId: 941,
    rpc: [
      'https://rpc.v2b.testnet.pulsechain.com/',
      'wss://rpc.v2b.testnet.pulsechain.com/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Test Pulse',
      symbol: 'tPLS'
    },
    explorers: null
  },
  {
    id: 'ff8ac558-071a-5d73-9fe7-72d7595f3bf6',
    name: 'PulseChain Testnet v3',
    chain: 't3PLS',
    chainId: 942,
    rpc: [
      'https://rpc.v3.testnet.pulsechain.com/',
      'wss://rpc.v3.testnet.pulsechain.com/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Test Pulse',
      symbol: 'tPLS'
    },
    explorers: null
  },
  {
    id: 'f32796a9-7647-554c-a19f-7d73f28795e3',
    name: 'muNode Testnet',
    chain: 'munode',
    chainId: 956,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: '799e948f-26e0-5e1e-899f-f0a592152865',
    name: 'Oort Mainnet',
    chain: 'Oort Mainnet',
    chainId: 970,
    rpc: ['https://rpc.oortech.com'],
    icon: 'ccn',
    nativeCurrency: {
      decimals: 18,
      name: 'Oort',
      symbol: 'CCN'
    },
    explorers: null
  },
  {
    id: '48d6d7a1-56bf-58e0-a2a7-da0b5ca121a0',
    name: 'Oort Huygens',
    chain: 'Huygens',
    chainId: 971,
    rpc: [],
    icon: 'ccn',
    nativeCurrency: {
      decimals: 18,
      name: 'Oort',
      symbol: 'CCN'
    },
    explorers: null
  },
  {
    id: 'adc84188-03d3-5137-abae-87b71024707c',
    name: 'Oort Ascraeus',
    chain: 'Ascraeus',
    chainId: 972,
    rpc: ['https://ascraeus-rpc.oortech.com'],
    icon: 'ccn',
    nativeCurrency: {
      decimals: 18,
      name: 'Oort',
      symbol: 'CCNA'
    },
    explorers: null
  },
  {
    id: '17189a08-fecf-5e64-b780-7b6a54de7832',
    name: 'Nepal Blockchain Network',
    chain: 'YETI',
    chainId: 977,
    rpc: [
      'https://api.nepalblockchain.dev',
      'https://api.nepalblockchain.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Nepal Blockchain Network Ether',
      symbol: 'YETI'
    },
    explorers: null
  },
  {
    id: '5fc3c393-58e8-512b-9984-b62cfe985def',
    name: 'TOP Mainnet EVM',
    chain: 'TOP',
    chainId: 980,
    rpc: ['https://ethapi.topnetwork.org'],
    icon: 'top',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://www.topscan.io',
        name: 'topscan.dev',
        standard: 'none'
      }
    ]
  },
  {
    id: '790c1c66-122a-5071-846b-1afdc26f6e68',
    name: 'Memo Smart Chain Mainnet',
    chain: 'MEMO',
    chainId: 985,
    rpc: ['https://chain.metamemo.one:8501', 'wss://chain.metamemo.one:16801'],
    icon: 'memo',
    nativeCurrency: {
      decimals: 18,
      name: 'Memo',
      symbol: 'CMEMO'
    },
    explorers: [
      {
        url: 'https://scan.metamemo.one:8080',
        name: 'Memo Mainnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0600e780-4b25-5857-a5f8-da5d11c6fa83',
    name: 'TOP Mainnet',
    chain: 'TOP',
    chainId: 989,
    rpc: [],
    icon: 'top',
    nativeCurrency: {
      decimals: 6,
      name: 'TOP',
      symbol: 'TOP'
    },
    explorers: [
      {
        url: 'https://www.topscan.io',
        name: 'topscan.dev',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ebe8b787-e697-5902-af28-0c701ec4eb08',
    name: 'Lucky Network',
    chain: 'LN',
    chainId: 998,
    rpc: [
      'https://rpc.luckynetwork.org',
      'wss://ws.lnscan.org',
      'https://rpc.lnscan.org'
    ],
    icon: 'lucky',
    nativeCurrency: {
      decimals: 18,
      name: 'Lucky',
      symbol: 'L99'
    },
    explorers: [
      {
        url: 'https://explorer.luckynetwork.org',
        name: 'blockscout',
        standard: 'none'
      },
      {
        url: 'https://lnscan.org',
        name: 'expedition',
        standard: 'none'
      }
    ]
  },
  {
    id: '10f7f35e-3a59-592d-a23b-72d06e1b38f6',
    name: 'Wanchain Testnet',
    chain: 'WAN',
    chainId: 999,
    rpc: ['https://gwan-ssl.wandevs.org:46891/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Wancoin',
      symbol: 'WAN'
    },
    explorers: null
  },
  {
    id: '442a2904-a816-5d64-9aa9-75ac02498181',
    name: 'GTON Mainnet',
    chain: 'GTON',
    chainId: 1000,
    rpc: ['https://rpc.gton.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GCD',
      symbol: 'GCD'
    },
    explorers: [
      {
        url: 'https://explorer.gton.network',
        name: 'GTON Network Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0205ef06-6910-5c9d-898d-5844bd60eb91',
    name: 'Klaytn Testnet Baobab',
    chain: 'KLAY',
    chainId: 1001,
    rpc: ['https://api.baobab.klaytn.net:8651'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'KLAY',
      symbol: 'KLAY'
    },
    explorers: null
  },
  {
    id: '705bb221-a826-50ec-949a-4447c629e17f',
    name: 'T-EKTA',
    chain: 'T-EKTA',
    chainId: 1004,
    rpc: ['https://test.ekta.io:8545'],
    icon: 'ekta',
    nativeCurrency: {
      decimals: 18,
      name: 'T-EKTA',
      symbol: 'T-EKTA'
    },
    explorers: [
      {
        url: 'https://test.ektascan.io',
        name: 'test-ektascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ece6b113-d392-5520-aa2f-8ac12161aa42',
    name: 'Newton Testnet',
    chain: 'NEW',
    chainId: 1007,
    rpc: ['https://rpc1.newchain.newtonproject.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Newton',
      symbol: 'NEW'
    },
    explorers: null
  },
  {
    id: '47870887-b224-5c00-be2e-faf3a946d1a1',
    name: 'Eurus Mainnet',
    chain: 'EUN',
    chainId: 1008,
    rpc: ['https://mainnet.eurus.network/'],
    icon: 'eurus',
    nativeCurrency: {
      decimals: 18,
      name: 'Eurus',
      symbol: 'EUN'
    },
    explorers: [
      {
        url: 'https://explorer.eurus.network',
        name: 'eurusexplorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ab4af02f-0082-5b7f-b7c9-c80e383d1b72',
    name: 'Evrice Network',
    chain: 'EVC',
    chainId: 1010,
    rpc: ['https://meta.evrice.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Evrice',
      symbol: 'EVC'
    },
    explorers: null
  },
  {
    id: 'f8a7a680-779f-58e0-9d9b-c8d65a26ce7e',
    name: 'Newton',
    chain: 'NEW',
    chainId: 1012,
    rpc: ['https://global.rpc.mainnet.newtonproject.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Newton',
      symbol: 'NEW'
    },
    explorers: null
  },
  {
    id: '53e70ec1-2d22-5975-8b64-41840195e250',
    name: 'Sakura',
    chain: 'Sakura',
    chainId: 1022,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Sakura',
      symbol: 'SKU'
    },
    explorers: null
  },
  {
    id: 'a652d1ff-5075-55ae-a50a-6c4e4d82a965',
    name: 'Clover Testnet',
    chain: 'Clover',
    chainId: 1023,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Clover',
      symbol: 'CLV'
    },
    explorers: null
  },
  {
    id: 'cf1636b8-0c8f-52fc-b7fd-3d1da6a8db33',
    name: 'CLV Parachain',
    chain: 'CLV',
    chainId: 1024,
    rpc: ['https://api-para.clover.finance'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CLV',
      symbol: 'CLV'
    },
    explorers: null
  },
  {
    id: 'e950aea7-f114-5804-bf67-88296d201642',
    name: 'BitTorrent Chain Testnet',
    chain: 'BTTC',
    chainId: 1028,
    rpc: ['https://testrpc.bittorrentchain.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BitTorrent',
      symbol: 'BTT'
    },
    explorers: [
      {
        url: 'https://testscan.bittorrentchain.io',
        name: 'testbttcscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '528de1c5-b962-5b31-8f3f-446ee18aa6a9',
    name: 'Conflux eSpace',
    chain: 'Conflux',
    chainId: 1030,
    rpc: ['https://evm.confluxrpc.com'],
    icon: 'conflux',
    nativeCurrency: {
      decimals: 18,
      name: 'CFX',
      symbol: 'CFX'
    },
    explorers: [
      {
        url: 'https://evm.confluxscan.net',
        name: 'Conflux Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b9489ac0-643f-542a-a474-70cdbddde6cd',
    name: 'Proxy Network Testnet',
    chain: 'Proxy Network',
    chainId: 1031,
    rpc: ['http://128.199.94.183:8041'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'PRX',
      symbol: 'PRX'
    },
    explorers: [
      {
        url: 'http://testnet-explorer.theproxy.network',
        name: 'proxy network testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2250516d-db3d-59e6-aaf0-f37d45b4b996',
    name: 'Bronos Testnet',
    chain: 'Bronos',
    chainId: 1038,
    rpc: ['https://evm-testnet.bronos.org'],
    icon: 'bronos',
    nativeCurrency: {
      decimals: 18,
      name: 'tBRO',
      symbol: 'tBRO'
    },
    explorers: [
      {
        url: 'https://tbroscan.bronos.org',
        name: 'Bronos Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '63af6657-07fd-5c5d-a939-aa016c07a1a0',
    name: 'Bronos Mainnet',
    chain: 'Bronos',
    chainId: 1039,
    rpc: [],
    icon: 'bronos',
    nativeCurrency: {
      decimals: 18,
      name: 'BRO',
      symbol: 'BRO'
    },
    explorers: [
      {
        url: 'https://broscan.bronos.org',
        name: 'Bronos Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'f93c29ac-6329-5ab9-8942-22d13ad41e2c',
    name: 'Metis Andromeda Mainnet',
    chain: 'ETH',
    chainId: 1088,
    rpc: ['https://andromeda.metis.io/?owner=1088'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Metis',
      symbol: 'METIS'
    },
    explorers: [
      {
        url: 'https://andromeda-explorer.metis.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0832c519-f908-5b02-8779-9dba9345e189',
    name: 'MOAC mainnet',
    chain: 'MOAC',
    chainId: 1099,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MOAC',
      symbol: 'mc'
    },
    explorers: [
      {
        url: 'https://explorer.moac.io',
        name: 'moac explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '5c2cb902-f971-5ce5-8143-2d7f0692151b',
    name: 'WEMIX3.0 Mainnet',
    chain: 'WEMIX',
    chainId: 1111,
    rpc: ['https://api.wemix.com', 'wss://ws.wemix.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'WEMIX',
      symbol: 'WEMIX'
    },
    explorers: [
      {
        url: 'https://explorer.wemix.com',
        name: 'WEMIX Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '596fc408-88da-5238-bcfb-acde5a45e017',
    name: 'WEMIX3.0 Testnet',
    chain: 'TWEMIX',
    chainId: 1112,
    rpc: ['https://api.test.wemix.com', 'wss://ws.test.wemix.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TestnetWEMIX',
      symbol: 'tWEMIX'
    },
    explorers: [
      {
        url: 'https://microscope.test.wemix.com',
        name: 'WEMIX Testnet Microscope',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '41f6f3f5-5df1-5611-9301-8157c24a8d01',
    name: 'Core Blockchain Testnet',
    chain: 'Core',
    chainId: 1115,
    rpc: ['https://rpc.test.btcs.network/'],
    icon: 'core',
    nativeCurrency: {
      decimals: 18,
      name: 'Core Blockchain Testnet Native Token',
      symbol: 'tCORE'
    },
    explorers: [
      {
        url: 'https://scan.test.btcs.network',
        name: 'Core Scan Testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ee90dd0c-723d-55fa-9837-ad2d4a53e7b8',
    name: 'Core Blockchain Mainnet',
    chain: 'Core',
    chainId: 1116,
    rpc: ['https://rpc.coredao.org/'],
    icon: 'core',
    nativeCurrency: {
      decimals: 18,
      name: 'Core Blockchain Native Token',
      symbol: 'CORE'
    },
    explorers: [
      {
        url: 'https://scan.coredao.org',
        name: 'Core Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'df5258f3-59fe-53e0-8be1-bcc7c92797cd',
    name: 'Dogcoin Mainnet',
    chain: 'DOGS',
    chainId: 1117,
    rpc: ['https://mainnet-rpc.dogcoin.me'],
    icon: 'dogs',
    nativeCurrency: {
      decimals: 18,
      name: 'Dogcoin',
      symbol: 'DOGS'
    },
    explorers: [
      {
        url: 'https://explorer.dogcoin.network',
        name: 'Dogcoin',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4b049b0d-81e1-5d0a-9fa3-c24d15d61b74',
    name: 'DeFiChain EVM Network Mainnet',
    chain: 'defichain-evm',
    chainId: 1130,
    rpc: [],
    icon: 'defichain-network',
    nativeCurrency: {
      decimals: 18,
      name: 'DeFiChain',
      symbol: 'DFI'
    },
    explorers: []
  },
  {
    id: '48a61465-2c6e-5864-bc29-226c66091939',
    name: 'DeFiChain EVM Network Testnet',
    chain: 'defichain-evm-testnet',
    chainId: 1131,
    rpc: [],
    icon: 'defichain-network',
    nativeCurrency: {
      decimals: 18,
      name: 'DeFiChain',
      symbol: 'DFI'
    },
    explorers: []
  },
  {
    id: '93854c23-d99a-5b3a-9bcf-501eb1cb3a70',
    name: 'AmStar Testnet',
    chain: 'AmStar',
    chainId: 1138,
    rpc: ['https://testnet-rpc.amstarscan.com'],
    icon: 'amstar',
    nativeCurrency: {
      decimals: 18,
      name: 'SINSO',
      symbol: 'SINSO'
    },
    explorers: [
      {
        url: 'https://testnet.amstarscan.com',
        name: 'amstarscan-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b6d56d2c-c18a-5228-9c9a-8448b271793a',
    name: 'MathChain',
    chain: 'MATH',
    chainId: 1139,
    rpc: [
      'https://mathchain-asia.maiziqianbao.net/rpc',
      'https://mathchain-us.maiziqianbao.net/rpc'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MathChain',
      symbol: 'MATH'
    },
    explorers: null
  },
  {
    id: 'b534d885-f46c-537a-accb-b1921bb3e031',
    name: 'MathChain Testnet',
    chain: 'MATH',
    chainId: 1140,
    rpc: ['https://galois-hk.maiziqianbao.net/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MathChain',
      symbol: 'MATH'
    },
    explorers: null
  },
  {
    id: 'ad5c43f8-3a4e-5a50-84e6-63af3026ebdf',
    name: 'Smart Host Teknoloji TESTNET',
    chain: 'SHT',
    chainId: 1177,
    rpc: ['https://s2.tl.web.tr:4041'],
    icon: 'smarthost',
    nativeCurrency: {
      decimals: 18,
      name: 'Smart Host Teknoloji TESTNET',
      symbol: 'tSHT'
    },
    explorers: [
      {
        url: 'https://s2.tl.web.tr:4000',
        name: 'Smart Host Teknoloji TESTNET Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'cc417461-f53a-52ea-b0dd-5382fe64deb6',
    name: 'Iora Chain',
    chain: 'IORA',
    chainId: 1197,
    rpc: ['https://dataseed.iorachain.com'],
    icon: 'iorachain',
    nativeCurrency: {
      decimals: 18,
      name: 'Iora',
      symbol: 'IORA'
    },
    explorers: [
      {
        url: 'https://explorer.iorachain.com',
        name: 'ioraexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'edf764a5-5030-54b1-969f-621d663529f9',
    name: 'Evanesco Testnet',
    chain: 'Evanesco Testnet',
    chainId: 1201,
    rpc: ['https://seed5.evanesco.org:8547'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'AVIS',
      symbol: 'AVIS'
    },
    explorers: null
  },
  {
    id: '7e3b2d52-77dd-59fb-9177-394e7b011f1c',
    name: 'World Trade Technical Chain Mainnet',
    chain: 'WTT',
    chainId: 1202,
    rpc: ['https://rpc.cadaut.com', 'wss://rpc.cadaut.com/ws'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'World Trade Token',
      symbol: 'WTT'
    },
    explorers: [
      {
        url: 'https://explorer.cadaut.com',
        name: 'WTTScout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8f0ccd17-9c50-5e4b-aa91-fdb70a2e3bbf',
    name: 'Popcateum Mainnet',
    chain: 'POPCATEUM',
    chainId: 1213,
    rpc: ['https://dataseed.popcateum.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Popcat',
      symbol: 'POP'
    },
    explorers: [
      {
        url: 'https://explorer.popcateum.org',
        name: 'popcateum explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd59adca9-61ca-5ba4-90a3-33c7f91b7649',
    name: 'EnterChain Mainnet',
    chain: 'ENTER',
    chainId: 1214,
    rpc: ['https://tapi.entercoin.net/'],
    icon: 'enter',
    nativeCurrency: {
      decimals: 18,
      name: 'EnterCoin',
      symbol: 'ENTER'
    },
    explorers: [
      {
        url: 'https://explorer.entercoin.net',
        name: 'Enter Explorer - Expenter',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'af0b88eb-ba65-5364-9544-cb02837ad8f3',
    name: 'Exzo Network Mainnet',
    chain: 'EXZO',
    chainId: 1229,
    rpc: ['https://mainnet.exzo.technology'],
    icon: 'exzo',
    nativeCurrency: {
      decimals: 18,
      name: 'Exzo',
      symbol: 'XZO'
    },
    explorers: [
      {
        url: 'https://exzoscan.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b1addd46-b676-5a34-9d8e-ec5c57948235',
    name: 'Ultron Testnet',
    chain: 'Ultron',
    chainId: 1230,
    rpc: ['https://ultron-dev.io'],
    icon: 'ultron',
    nativeCurrency: {
      decimals: 18,
      name: 'Ultron',
      symbol: 'ULX'
    },
    explorers: [
      {
        url: 'https://explorer.ultron-dev.io',
        name: 'Ultron Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '9bee6397-f4ba-5505-af6d-b5cd21f708b4',
    name: 'Ultron Mainnet',
    chain: 'Ultron',
    chainId: 1231,
    rpc: ['https://ultron-rpc.net'],
    icon: 'ultron',
    nativeCurrency: {
      decimals: 18,
      name: 'Ultron',
      symbol: 'ULX'
    },
    explorers: [
      {
        url: 'https://ulxscan.com',
        name: 'Ultron Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '5c870d6a-58c3-51e3-bb1d-09105308f761',
    name: 'Step Network',
    chain: 'STEP',
    chainId: 1234,
    rpc: ['https://rpc.step.network'],
    icon: 'step',
    nativeCurrency: {
      decimals: 18,
      name: 'FITFI',
      symbol: 'FITFI'
    },
    explorers: [
      {
        url: 'https://stepscan.io',
        name: 'StepScan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c5c6c302-bac6-51cc-978a-4cf5419a137d',
    name: 'OM Platform Mainnet',
    chain: 'omplatform',
    chainId: 1246,
    rpc: ['https://rpc-cnx.omplatform.com/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'OMCOIN',
      symbol: 'OM'
    },
    explorers: [
      {
        url: 'https://omscan.omplatform.com',
        name: 'OMSCAN - Expenter',
        standard: 'none'
      }
    ]
  },
  {
    id: '9729b159-1225-5c00-b9d2-dcd1887fe648',
    name: 'CIC Chain Testnet',
    chain: 'CICT',
    chainId: 1252,
    rpc: ['https://testapi.cicscan.com'],
    icon: 'cicchain',
    nativeCurrency: {
      decimals: 18,
      name: 'Crazy Internet Coin',
      symbol: 'CICT'
    },
    explorers: [
      {
        url: 'https://testnet.cicscan.com',
        name: 'CICscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c4dbdc65-0d70-5c20-a561-776f64b77884',
    name: 'HALO Mainnet',
    chain: 'HALO',
    chainId: 1280,
    rpc: ['https://nodes.halo.land'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'HALO',
      symbol: 'HO'
    },
    explorers: [
      {
        url: 'https://browser.halo.land',
        name: 'HALOexplorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '2be906a0-bbb1-5804-96ae-757f66aad829',
    name: 'Moonbeam',
    chain: 'MOON',
    chainId: 1284,
    rpc: ['https://rpc.api.moonbeam.network', 'wss://wss.api.moonbeam.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Glimmer',
      symbol: 'GLMR'
    },
    explorers: [
      {
        url: 'https://moonbeam.moonscan.io',
        name: 'moonscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '64a17ef1-8d7e-55ab-b0bc-183908ea2907',
    name: 'Moonriver',
    chain: 'MOON',
    chainId: 1285,
    rpc: [
      'https://rpc.api.moonriver.moonbeam.network',
      'wss://wss.api.moonriver.moonbeam.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Moonriver',
      symbol: 'MOVR'
    },
    explorers: [
      {
        url: 'https://moonriver.moonscan.io',
        name: 'moonscan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd6b2bd98-b046-53ca-b9f5-e8ff4e097b41',
    name: 'Moonrock old',
    chain: 'MOON',
    chainId: 1286,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Rocs',
      symbol: 'ROC'
    },
    explorers: null
  },
  {
    id: '7b066a8a-3293-5ce4-a43a-5ad93ce8f1d3',
    name: 'Moonbase Alpha',
    chain: 'MOON',
    chainId: 1287,
    rpc: [
      'https://rpc.api.moonbase.moonbeam.network',
      'wss://wss.api.moonbase.moonbeam.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Dev',
      symbol: 'DEV'
    },
    explorers: [
      {
        url: 'https://moonbase.moonscan.io',
        name: 'moonscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '459405ca-3d46-5088-8f27-628be86d712b',
    name: 'Moonrock',
    chain: 'MOON',
    chainId: 1288,
    rpc: [
      'https://rpc.api.moonrock.moonbeam.network',
      'wss://wss.api.moonrock.moonbeam.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Rocs',
      symbol: 'ROC'
    },
    explorers: null
  },
  {
    id: '13eab964-c885-5312-9ff0-cc3480a28a12',
    name: 'Bobabeam',
    chain: 'Bobabeam',
    chainId: 1294,
    rpc: [
      'https://bobabeam.boba.network',
      'wss://wss.bobabeam.boba.network',
      'https://replica.bobabeam.boba.network',
      'wss://replica-wss.bobabeam.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.bobabeam.boba.network',
        name: 'Bobabeam block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '204e2b3e-f454-5b89-8233-4a45f9ee3ec4',
    name: 'Bobabase Testnet',
    chain: 'Bobabase Testnet',
    chainId: 1297,
    rpc: [
      'https://bobabase.boba.network',
      'wss://wss.bobabase.boba.network',
      'https://replica.bobabase.boba.network',
      'wss://replica-wss.bobabase.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.bobabase.boba.network',
        name: 'Bobabase block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '15cf4177-39c0-52b1-b6c6-d6584b470cd9',
    name: 'Dos Fuji Subnet',
    chain: 'DOS',
    chainId: 1311,
    rpc: ['https://test.doschain.com/jsonrpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Dos Native Token',
      symbol: 'DOS'
    },
    explorers: [
      {
        url: 'https://test.doscan.io',
        name: 'dos-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4989e81e-c7fd-55cb-90cc-c60e15785bb9',
    name: 'Alyx Mainnet',
    chain: 'ALYX',
    chainId: 1314,
    rpc: ['https://rpc.alyxchain.com'],
    icon: 'alyx',
    nativeCurrency: {
      decimals: 18,
      name: 'Alyx Chain Native Token',
      symbol: 'ALYX'
    },
    explorers: [
      {
        url: 'https://www.alyxscan.com',
        name: 'alyxscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4968148f-e2e8-512c-a342-9776c18c9c96',
    name: 'Aitd Mainnet',
    chain: 'AITD',
    chainId: 1319,
    rpc: ['https://walletrpc.aitd.io', 'https://node.aitd.io'],
    icon: 'aitd',
    nativeCurrency: {
      decimals: 18,
      name: 'AITD Mainnet',
      symbol: 'AITD'
    },
    explorers: [
      {
        url: 'https://aitd-explorer-new.aitd.io',
        name: 'AITD Chain Explorer Mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '859f9774-a77a-5b35-8910-2843d70f1bf8',
    name: 'Aitd Testnet',
    chain: 'AITD',
    chainId: 1320,
    rpc: ['http://http-testnet.aitd.io'],
    icon: 'aitd',
    nativeCurrency: {
      decimals: 18,
      name: 'AITD Testnet',
      symbol: 'AITD'
    },
    explorers: [
      {
        url: 'https://block-explorer-testnet.aitd.io',
        name: 'AITD Chain Explorer Testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ce337ba1-ff03-51cf-b8ce-cccf01c37cbe',
    name: 'Geth Testnet',
    chain: 'ETH',
    chainId: 1337,
    rpc: ['http://127.0.0.1:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Geth Testnet Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: 'c668cdd6-041f-5685-baf3-724be977e0d5',
    name: 'Elysium Testnet',
    chain: 'Elysium',
    chainId: 1338,
    rpc: ['https://elysium-test-rpc.vulcanforged.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'LAVA',
      symbol: 'LAVA'
    },
    explorers: [
      {
        url: 'https://elysium-explorer.vulcanforged.com',
        name: 'Elysium testnet explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '2daf1f8d-0b37-5f14-926d-e84120d6c98d',
    name: 'Elysium Mainnet',
    chain: 'Elysium',
    chainId: 1339,
    rpc: ['https://rpc.elysiumchain.tech/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'LAVA',
      symbol: 'LAVA'
    },
    explorers: [
      {
        url: 'https://explorer.elysiumchain.tech',
        name: 'Elysium mainnet explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a0627e25-03eb-5b00-9b91-7b52d54ebcb6',
    name: 'CIC Chain Mainnet',
    chain: 'CIC',
    chainId: 1353,
    rpc: ['https://xapi.cicscan.com'],
    icon: 'cicchain',
    nativeCurrency: {
      decimals: 18,
      name: 'Crazy Internet Coin',
      symbol: 'CIC'
    },
    explorers: [
      {
        url: 'https://cicscan.com',
        name: 'CICscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '169d05fb-fc90-598b-87fc-c0589c3fa833',
    name: 'AmStar Mainnet',
    chain: 'AmStar',
    chainId: 1388,
    rpc: ['https://mainnet-rpc.amstarscan.com'],
    icon: 'amstar',
    nativeCurrency: {
      decimals: 18,
      name: 'SINSO',
      symbol: 'SINSO'
    },
    explorers: [
      {
        url: 'https://mainnet.amstarscan.com',
        name: 'amstarscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3e5481b3-d684-529d-880a-0408e727d3bf',
    name: 'Polygon zkEVM Testnet old',
    chain: 'Polygon',
    chainId: 1402,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.public.zkevm-test.net',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '81e3de05-7d39-50bd-9013-3a47bc29dcfa',
    name: 'Polygon zkEVM Testnet',
    chain: 'Polygon',
    chainId: 1422,
    rpc: ['https://rpc.public.zkevm-test.net'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.public.zkevm-test.net',
        name: 'Polygon zkEVM explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4340cf9b-6155-5a88-8df3-2fa7b78dbeeb',
    name: 'Ctex Scan Blockchain',
    chain: 'Ctex Scan Blockchain',
    chainId: 1455,
    rpc: ['https://mainnet-rpc.ctexscan.com/'],
    icon: 'ctex',
    nativeCurrency: {
      decimals: 18,
      name: 'CTEX',
      symbol: 'CTEX'
    },
    explorers: [
      {
        url: 'https://ctexscan.com',
        name: 'Ctex Scan Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b31d31aa-7006-511d-981d-f8fca9d0e951',
    name: 'Sherpax Mainnet',
    chain: 'Sherpax Mainnet',
    chainId: 1506,
    rpc: ['https://mainnet.sherpax.io/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'KSX',
      symbol: 'KSX'
    },
    explorers: [
      {
        url: 'https://evm.sherpax.io',
        name: 'Sherpax Mainnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '916d473c-a38d-55e9-9b7d-4a5f0b6428ca',
    name: 'Sherpax Testnet',
    chain: 'Sherpax Testnet',
    chainId: 1507,
    rpc: ['https://sherpax-testnet.chainx.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'KSX',
      symbol: 'KSX'
    },
    explorers: [
      {
        url: 'https://evm-pre.sherpax.io',
        name: 'Sherpax Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c1e88d1b-e493-50b9-9100-341906d5019a',
    name: 'Beagle Messaging Chain',
    chain: 'BMC',
    chainId: 1515,
    rpc: ['https://beagle.chat/eth'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Beagle',
      symbol: 'BG'
    },
    explorers: [
      {
        url: 'https://eth.beagle.chat',
        name: 'Beagle Messaging Chain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '289431f6-d796-5051-9281-15eb88ccaf7d',
    name: 'Catecoin Chain Mainnet',
    chain: 'Catechain',
    chainId: 1618,
    rpc: ['https://send.catechain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Catecoin',
      symbol: 'CATE'
    },
    explorers: null
  },
  {
    id: '693e8b2b-cff5-59c8-a511-e5db409de07e',
    name: 'Atheios',
    chain: 'ATH',
    chainId: 1620,
    rpc: ['https://wallet.atheios.com:8797'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Atheios Ether',
      symbol: 'ATH'
    },
    explorers: null
  },
  {
    id: '4f40c1fd-b77c-5361-b987-0b2e77883367',
    name: 'Btachain',
    chain: 'btachain',
    chainId: 1657,
    rpc: ['https://dataseed1.btachain.com/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Bitcoin Asset',
      symbol: 'BTA'
    },
    explorers: null
  },
  {
    id: '051072ff-d4b2-5f03-8d8c-f4e51ff539d9',
    name: 'Horizen Yuma Testnet',
    chain: 'Yuma',
    chainId: 1662,
    rpc: ['https://yuma-testnet.horizenlabs.io/ethv1'],
    icon: 'eon',
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet Zen',
      symbol: 'tZEN'
    },
    explorers: [
      {
        url: 'https://yuma-explorer.horizen.io',
        name: 'Yuma Testnet Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd0f57a75-f945-57cb-a2dd-1e13ea55ed36',
    name: 'LUDAN Mainnet',
    chain: 'LUDAN',
    chainId: 1688,
    rpc: ['https://rpc.ludan.org/'],
    icon: 'ludan',
    nativeCurrency: {
      decimals: 18,
      name: 'LUDAN',
      symbol: 'LUDAN'
    },
    explorers: null
  },
  {
    id: '41f52a7e-4d6a-57ea-ae9f-33464e2e67d6',
    name: 'Anytype EVM Chain',
    chain: 'ETH',
    chainId: 1701,
    rpc: ['https://geth.anytype.io'],
    icon: 'any',
    nativeCurrency: {
      decimals: 18,
      name: 'ANY',
      symbol: 'ANY'
    },
    explorers: [
      {
        url: 'https://explorer.anytype.io',
        name: 'Anytype Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c0f6bd50-87a5-5f7a-acb8-e6dbd0ee936f',
    name: 'TBSI Mainnet',
    chain: 'TBSI',
    chainId: 1707,
    rpc: ['https://rpc.blockchain.or.th'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Jinda',
      symbol: 'JINDA'
    },
    explorers: null
  },
  {
    id: 'd31cf5e5-1983-5c3e-bd68-c973922a644c',
    name: 'TBSI Testnet',
    chain: 'TBSI',
    chainId: 1708,
    rpc: ['https://rpc.testnet.blockchain.or.th'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Jinda',
      symbol: 'JINDA'
    },
    explorers: null
  },
  {
    id: 'cc584992-b553-50b8-9c09-e88e5f287fdb',
    name: 'Palette Chain Mainnet',
    chain: 'PLT',
    chainId: 1718,
    rpc: ['https://palette-rpc.com:22000'],
    icon: 'PLT',
    nativeCurrency: {
      decimals: 18,
      name: 'Palette Token',
      symbol: 'PLT'
    },
    explorers: [
      {
        url: 'https://palettescan.com',
        name: 'Palettescan',
        standard: 'none'
      }
    ]
  },
  {
    id: '5e6b98b0-865d-5949-aa11-6cd9e52c2d1c',
    name: 'Kerleano',
    chain: 'CRC',
    chainId: 1804,
    rpc: [
      'https://cacib-saturn-test.francecentral.cloudapp.azure.com',
      'wss://cacib-saturn-test.francecentral.cloudapp.azure.com:9443'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Carbon Reduction Coin',
      symbol: 'CRC'
    },
    explorers: [
      {
        url: 'https://ethereum-pocr.github.io/explorer/kerleano',
        name: 'Lite Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '817aa963-b92c-5fd2-aac3-c6637e882709',
    name: 'Rabbit Analog Testnet Chain',
    chain: 'rAna',
    chainId: 1807,
    rpc: ['https://rabbit.analog-rpc.com'],
    icon: 'rabbit',
    nativeCurrency: {
      decimals: 18,
      name: 'Rabbit Analog Test Chain Native Token ',
      symbol: 'rAna'
    },
    explorers: [
      {
        url: 'https://rabbit.analogscan.com',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c31ccc88-15cf-5d53-b490-a1588af76768',
    name: 'Cube Chain Mainnet',
    chain: 'Cube',
    chainId: 1818,
    rpc: [
      'https://http-mainnet.cube.network',
      'wss://ws-mainnet.cube.network',
      'https://http-mainnet-sg.cube.network',
      'wss://ws-mainnet-sg.cube.network',
      'https://http-mainnet-us.cube.network',
      'wss://ws-mainnet-us.cube.network'
    ],
    icon: 'cube',
    nativeCurrency: {
      decimals: 18,
      name: 'Cube Chain Native Token',
      symbol: 'CUBE'
    },
    explorers: [
      {
        url: 'https://cubescan.network',
        name: 'cube-scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '070b51ad-02e9-5881-9a9b-f38fe311eade',
    name: 'Cube Chain Testnet',
    chain: 'Cube',
    chainId: 1819,
    rpc: [
      'https://http-testnet.cube.network',
      'wss://ws-testnet.cube.network',
      'https://http-testnet-sg.cube.network',
      'wss://ws-testnet-sg.cube.network',
      'https://http-testnet-jp.cube.network',
      'wss://ws-testnet-jp.cube.network',
      'https://http-testnet-us.cube.network',
      'wss://ws-testnet-us.cube.network'
    ],
    icon: 'cube',
    nativeCurrency: {
      decimals: 18,
      name: 'Cube Chain Test Native Token',
      symbol: 'CUBET'
    },
    explorers: [
      {
        url: 'https://testnet.cubescan.network',
        name: 'cubetest-scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dbcade05-cc65-5eb5-a5fa-efee1e5ce9af',
    name: 'Teslafunds',
    chain: 'TSF',
    chainId: 1856,
    rpc: ['https://tsfapi.europool.me'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Teslafunds Ether',
      symbol: 'TSF'
    },
    explorers: null
  },
  {
    id: 'b480b1a6-ad10-51bc-9ac6-11452a7408f7',
    name: 'Gitshock Cartenz Testnet',
    chain: 'Gitshock Cartenz',
    chainId: 1881,
    rpc: ['https://rpc.cartenz.works'],
    icon: 'gitshockchain',
    nativeCurrency: {
      decimals: 18,
      name: 'Gitshock Cartenz',
      symbol: 'tGTFX'
    },
    explorers: [
      {
        url: 'https://scan.cartenz.works',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '848bd0bb-026e-540f-b908-ec9315b2959b',
    name: 'BON Network',
    chain: 'BON',
    chainId: 1898,
    rpc: ['http://rpc.boyanet.org:8545', 'ws://rpc.boyanet.org:8546'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BOYACoin',
      symbol: 'BOY'
    },
    explorers: [
      {
        url: 'https://explorer.boyanet.org:4001',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c04a8229-b61c-53b5-af42-d8b0f9623277',
    name: 'Bitcichain Mainnet',
    chain: 'BITCI',
    chainId: 1907,
    rpc: ['https://rpc.bitci.com'],
    icon: 'bitci',
    nativeCurrency: {
      decimals: 18,
      name: 'Bitci',
      symbol: 'BITCI'
    },
    explorers: [
      {
        url: 'https://bitciexplorer.com',
        name: 'Bitci Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e55275a8-d47a-51b2-9270-327471aa6f69',
    name: 'Bitcichain Testnet',
    chain: 'TBITCI',
    chainId: 1908,
    rpc: ['https://testnet.bitcichain.com'],
    icon: 'bitci',
    nativeCurrency: {
      decimals: 18,
      name: 'Test Bitci',
      symbol: 'TBITCI'
    },
    explorers: [
      {
        url: 'https://testnet.bitciexplorer.com',
        name: 'Bitci Explorer Testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c05eecac-d3f4-516e-8e85-44237863e0f2',
    name: 'ONUS Chain Testnet',
    chain: 'onus',
    chainId: 1945,
    rpc: ['https://rpc-testnet.onuschain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONUS',
      symbol: 'ONUS'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.onuschain.io',
        name: 'Onus explorer testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3ac3ba37-958a-5ce6-88b9-8d99172d8cbf',
    name: 'D-Chain Mainnet',
    chain: 'D-Chain',
    chainId: 1951,
    rpc: [
      'https://mainnet.d-chain.network/ext/bc/2ZiR1Bro5E59siVuwdNuRFzqL95NkvkbzyLBdrsYR9BLSHV7H4/rpc'
    ],
    icon: 'dchain',
    nativeCurrency: {
      decimals: 18,
      name: 'DOINX',
      symbol: 'DOINX'
    },
    explorers: null
  },
  {
    id: '4666d81c-195d-526f-997d-403672e8af9c',
    name: 'Eleanor',
    chain: 'MTC',
    chainId: 1967,
    rpc: ['https://rpc.metatime.com/eleanor', 'wss://ws.metatime.com/eleanor'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Eleanor Metacoin',
      symbol: 'MTC'
    },
    explorers: [
      {
        url: 'https://explorer.metatime.com/eleanor',
        name: 'metaexplorer-eleanor',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1af16982-4904-5306-9277-d6112a6cbfd9',
    name: 'Atelier',
    chain: 'ALTR',
    chainId: 1971,
    rpc: ['https://1971.network/atlr', 'wss://1971.network/atlr'],
    icon: 'atlr',
    nativeCurrency: {
      decimals: 18,
      name: 'ATLR',
      symbol: 'ATLR'
    },
    explorers: null
  },
  {
    id: '9b0da1bb-666c-5e51-81ce-6b2ff10823e2',
    name: 'ONUS Chain Mainnet',
    chain: 'onus',
    chainId: 1975,
    rpc: ['https://rpc.onuschain.io', 'wss://ws.onuschain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONUS',
      symbol: 'ONUS'
    },
    explorers: [
      {
        url: 'https://explorer.onuschain.io',
        name: 'Onus explorer mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '71e7b077-9d1f-5bda-9ab7-effb1d878c1e',
    name: 'Eurus Testnet',
    chain: 'EUN',
    chainId: 1984,
    rpc: ['https://testnet.eurus.network'],
    icon: 'eurus',
    nativeCurrency: {
      decimals: 18,
      name: 'Eurus',
      symbol: 'EUN'
    },
    explorers: [
      {
        url: 'https://testnetexplorer.eurus.network',
        name: 'testnetexplorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '1dbe301a-ec74-54ce-8db5-1016d4c24539',
    name: 'EtherGem',
    chain: 'EGEM',
    chainId: 1987,
    rpc: ['https://jsonrpc.egem.io/custom'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'EtherGem Ether',
      symbol: 'EGEM'
    },
    explorers: null
  },
  {
    id: 'd252864c-4f2e-5db7-94be-884b7e50c624',
    name: 'Ekta',
    chain: 'EKTA',
    chainId: 1994,
    rpc: ['https://main.ekta.io'],
    icon: 'ekta',
    nativeCurrency: {
      decimals: 18,
      name: 'EKTA',
      symbol: 'EKTA'
    },
    explorers: [
      {
        url: 'https://ektascan.io',
        name: 'ektascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '44292f5e-b8e2-5763-bc14-c2e4fc3689fc',
    name: 'edeXa Testnet',
    chain: 'edeXa TestNetwork',
    chainId: 1995,
    rpc: [
      'https://testnet.edexa.com/rpc',
      'https://io-dataseed1.testnet.edexa.io-market.com/rpc'
    ],
    icon: 'edexa',
    nativeCurrency: {
      decimals: 18,
      name: 'EDEXA',
      symbol: 'EDX'
    },
    explorers: [
      {
        url: 'https://explorer.edexa.com',
        name: 'edexa-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8f3a98b3-9c0d-51da-bbd2-ef51e08f1d3f',
    name: 'Dogechain Mainnet',
    chain: 'DC',
    chainId: 2000,
    rpc: [
      'https://rpc.dogechain.dog',
      'https://rpc-us.dogechain.dog',
      'https://rpc01.dogechain.dog'
    ],
    icon: 'dogechain',
    nativeCurrency: {
      decimals: 18,
      name: 'Dogecoin',
      symbol: 'DOGE'
    },
    explorers: [
      {
        url: 'https://explorer.dogechain.dog',
        name: 'dogechain explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '90bf68bd-6dc2-5943-b717-ffea984c125c',
    name: 'Milkomeda C1 Mainnet',
    chain: 'milkAda',
    chainId: 2001,
    rpc: [
      'https://rpc-mainnet-cardano-evm.c1.milkomeda.com',
      'wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'
    ],
    icon: 'milkomeda',
    nativeCurrency: {
      decimals: 18,
      name: 'milkAda',
      symbol: 'mADA'
    },
    explorers: [
      {
        url: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '3f9c6ee8-46a4-5fb6-9a56-286b530b89af',
    name: 'Milkomeda A1 Mainnet',
    chain: 'milkALGO',
    chainId: 2002,
    rpc: [
      'https://rpc-mainnet-algorand-rollup.a1.milkomeda.com',
      'wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws'
    ],
    icon: 'milkomeda',
    nativeCurrency: {
      decimals: 18,
      name: 'milkALGO',
      symbol: 'mALGO'
    },
    explorers: [
      {
        url: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a1954dce-6c11-5ecb-82d6-66df593ceb61',
    name: 'CloudWalk Testnet',
    chain: 'CloudWalk Testnet',
    chainId: 2008,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CloudWalk Native Token',
      symbol: 'CWN'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.cloudwalk.io',
        name: 'CloudWalk Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '5654317d-8cf5-5dd5-babe-431dde8d6d14',
    name: 'CloudWalk Mainnet',
    chain: 'CloudWalk Mainnet',
    chainId: 2009,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CloudWalk Native Token',
      symbol: 'CWN'
    },
    explorers: [
      {
        url: 'https://explorer.mainnet.cloudwalk.io',
        name: 'CloudWalk Mainnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '0fb461e1-2f27-5172-9537-673ac1efd9e5',
    name: 'MainnetZ Mainnet',
    chain: 'NetZ',
    chainId: 2016,
    rpc: ['https://mainnet-rpc.mainnetz.io'],
    icon: 'mainnetz',
    nativeCurrency: {
      decimals: 18,
      name: 'MainnetZ',
      symbol: 'NetZ'
    },
    explorers: [
      {
        url: 'https://explorer.mainnetz.io',
        name: 'MainnetZ',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1372f1e7-1157-5e79-a4e8-13d992dbd33b',
    name: 'PublicMint Devnet',
    chain: 'PublicMint',
    chainId: 2018,
    rpc: ['https://rpc.dev.publicmint.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'USD',
      symbol: 'USD'
    },
    explorers: [
      {
        url: 'https://explorer.dev.publicmint.io',
        name: 'PublicMint Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8cb680a5-af4c-58f3-a860-61b69d6ed1e3',
    name: 'PublicMint Testnet',
    chain: 'PublicMint',
    chainId: 2019,
    rpc: ['https://rpc.tst.publicmint.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'USD',
      symbol: 'USD'
    },
    explorers: [
      {
        url: 'https://explorer.tst.publicmint.io',
        name: 'PublicMint Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd8f80dfa-eb9e-5e3c-9079-2cdbb07bcf5d',
    name: 'PublicMint Mainnet',
    chain: 'PublicMint',
    chainId: 2020,
    rpc: ['https://rpc.publicmint.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'USD',
      symbol: 'USD'
    },
    explorers: [
      {
        url: 'https://explorer.publicmint.io',
        name: 'PublicMint Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a1f8f8c1-1080-59e5-9a17-2ddd69b04e96',
    name: 'Edgeware Mainnet',
    chain: 'EDG',
    chainId: 2021,
    rpc: ['https://mainnet1.edgewa.re'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Edge',
      symbol: 'EDG'
    },
    explorers: null
  },
  {
    id: 'a0278152-21e8-58cb-a743-7c1548e19190',
    name: 'Beresheet Testnet',
    chain: 'EDG',
    chainId: 2022,
    rpc: ['https://beresheet1.edgewa.re'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet Edge',
      symbol: 'tEDG'
    },
    explorers: null
  },
  {
    id: '1a7d30a7-b443-5289-8603-f6e42b2eb02b',
    name: 'Taycan Testnet',
    chain: 'Taycan',
    chainId: 2023,
    rpc: ['https://test-taycan.hupayx.io'],
    icon: 'shuffle',
    nativeCurrency: {
      decimals: 18,
      name: 'test-Shuffle',
      symbol: 'tSFL'
    },
    explorers: [
      {
        url: 'https://evmscan-test.hupayx.io',
        name: 'Taycan Explorer(Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://cosmoscan-test.hupayx.io',
        name: 'Taycan Cosmos Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '3f70c0d5-df77-52bf-868f-beef3ea05824',
    name: 'Rangers Protocol Mainnet',
    chain: 'Rangers',
    chainId: 2025,
    rpc: ['https://mainnet.rangersprotocol.com/api/jsonrpc'],
    icon: 'rangers',
    nativeCurrency: {
      decimals: 18,
      name: 'Rangers Protocol Gas',
      symbol: 'RPG'
    },
    explorers: [
      {
        url: 'https://scan.rangersprotocol.com',
        name: 'rangersscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '1c57acf4-50ff-57fc-9677-69ba59a3ea8d',
    name: 'OriginTrail Parachain',
    chain: 'OTP',
    chainId: 2043,
    rpc: [
      'https://astrosat.origintrail.network',
      'wss://parachain-rpc.origin-trail.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 12,
      name: 'OriginTrail Parachain Token',
      symbol: 'OTP'
    },
    explorers: null
  },
  {
    id: 'a7059f49-3520-56dd-b1af-3935ee4c0680',
    name: 'Stratos Testnet',
    chain: 'STOS',
    chainId: 2047,
    rpc: ['https://web3-testnet-rpc.thestratos.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'STOS',
      symbol: 'STOS'
    },
    explorers: [
      {
        url: 'https://web3-testnet-explorer.thestratos.org',
        name: 'Stratos EVM Explorer (Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://big-dipper-dev.thestratos.org',
        name: 'Stratos Cosmos Explorer (BigDipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: 'eb1344bb-cf54-5d64-a02f-f13c9afb21af',
    name: 'Stratos Mainnet',
    chain: 'STOS',
    chainId: 2048,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'STOS',
      symbol: 'STOS'
    },
    explorers: null
  },
  {
    id: 'ec50515f-4bc3-561e-baf5-b0a9c612972a',
    name: 'Quokkacoin Mainnet',
    chain: 'Qkacoin',
    chainId: 2077,
    rpc: ['https://rpc.qkacoin.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Qkacoin',
      symbol: 'QKA'
    },
    explorers: [
      {
        url: 'https://explorer.qkacoin.org',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '67297e5f-53ed-5c1a-8250-9826bbea8898',
    name: 'Ecoball Mainnet',
    chain: 'ECO',
    chainId: 2100,
    rpc: ['https://api.ecoball.org/ecoball/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ecoball Coin',
      symbol: 'ECO'
    },
    explorers: [
      {
        url: 'https://scan.ecoball.org',
        name: 'Ecoball Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '882d1ff6-62e9-5279-bfcd-dba7802b3488',
    name: 'Ecoball Testnet Espuma',
    chain: 'ECO',
    chainId: 2101,
    rpc: ['https://api.ecoball.org/espuma/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Espuma Coin',
      symbol: 'ECO'
    },
    explorers: [
      {
        url: 'https://espuma-scan.ecoball.org',
        name: 'Ecoball Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a90d05f4-8bb2-5a96-ac82-648d385f0b07',
    name: 'Exosama Network',
    chain: 'EXN',
    chainId: 2109,
    rpc: ['https://rpc.exosama.com', 'wss://rpc.exosama.com'],
    icon: 'exn',
    nativeCurrency: {
      decimals: 18,
      name: 'Sama Token',
      symbol: 'SAMA'
    },
    explorers: [
      {
        url: 'https://explorer.exosama.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '252b7632-6cc9-57d3-9846-fc578865b936',
    name: 'Metaplayerone Mainnet',
    chain: 'METAD',
    chainId: 2122,
    rpc: ['https://rpc.metaplayer.one/'],
    icon: 'metad',
    nativeCurrency: {
      decimals: 18,
      name: 'METAD',
      symbol: 'METAD'
    },
    explorers: [
      {
        url: 'https://scan.metaplayer.one',
        name: 'Metad Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '237f0ccb-f3aa-507c-b042-404df657b68a',
    name: 'BOSagora Mainnet',
    chain: 'ETH',
    chainId: 2151,
    rpc: ['https://mainnet.bosagora.org', 'https://rpc.bosagora.org'],
    icon: 'agora',
    nativeCurrency: {
      decimals: 18,
      name: 'BOSAGORA',
      symbol: 'BOA'
    },
    explorers: [
      {
        url: 'https://boascan.io',
        name: 'BOASCAN',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1fda2846-9c4d-5282-959c-05054b3a58c7',
    name: 'Findora Mainnet',
    chain: 'Findora',
    chainId: 2152,
    rpc: ['https://rpc-mainnet.findora.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'FRA',
      symbol: 'FRA'
    },
    explorers: [
      {
        url: 'https://evm.findorascan.io',
        name: 'findorascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '954cfe1a-59e7-51c8-8f2c-28f28bd9bc53',
    name: 'Findora Testnet',
    chain: 'Testnet-anvil',
    chainId: 2153,
    rpc: ['https://prod-testnet.prod.findora.org:8545/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'FRA',
      symbol: 'FRA'
    },
    explorers: [
      {
        url: 'https://testnet-anvil.evm.findorascan.io',
        name: 'findorascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '033aead5-4edc-576a-a0ec-8205e39df040',
    name: 'Findora Forge',
    chain: 'Testnet-forge',
    chainId: 2154,
    rpc: ['https://prod-forge.prod.findora.org:8545/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'FRA',
      symbol: 'FRA'
    },
    explorers: [
      {
        url: 'https://testnet-forge.evm.findorascan.io',
        name: 'findorascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd4050bd9-9489-5af4-8f5a-bba3706b2f97',
    name: 'Bitcoin EVM',
    chain: 'Bitcoin EVM',
    chainId: 2203,
    rpc: ['https://connect.bitcoinevm.com'],
    icon: 'ebtc',
    nativeCurrency: {
      decimals: 18,
      name: 'Bitcoin',
      symbol: 'eBTC'
    },
    explorers: [
      {
        url: 'https://explorer.bitcoinevm.com',
        name: 'Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '78342aa5-62b2-5407-bd5d-8beb4453f49e',
    name: 'Evanesco Mainnet',
    chain: 'EVA',
    chainId: 2213,
    rpc: ['https://seed4.evanesco.org:8546'],
    icon: 'evanesco',
    nativeCurrency: {
      decimals: 18,
      name: 'EVA',
      symbol: 'EVA'
    },
    explorers: [
      {
        url: 'https://explorer.evanesco.org',
        name: 'Evanesco Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e7aaba43-383c-5943-bae3-67d8c369d1a4',
    name: 'Kava EVM Testnet',
    chain: 'KAVA',
    chainId: 2221,
    rpc: ['https://evm.testnet.kava.io', 'wss://wevm.testnet.kava.io'],
    icon: 'kava',
    nativeCurrency: {
      decimals: 18,
      name: 'TKava',
      symbol: 'TKAVA'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.kava.io',
        name: 'Kava Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '854707f4-5e41-524c-b3cb-e3e962f9e729',
    name: 'Kava EVM',
    chain: 'KAVA',
    chainId: 2222,
    rpc: [
      'https://evm.kava.io',
      'https://evm2.kava.io',
      'wss://wevm.kava.io',
      'wss://wevm2.kava.io'
    ],
    icon: 'kava',
    nativeCurrency: {
      decimals: 18,
      name: 'Kava',
      symbol: 'KAVA'
    },
    explorers: [
      {
        url: 'https://explorer.kava.io',
        name: 'Kava EVM Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ba50ada3-bf9a-58bd-bed8-d1466f5231b5',
    name: 'VChain Mainnet',
    chain: 'VChain',
    chainId: 2223,
    rpc: ['https://bc.vcex.xyz'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'VNDT',
      symbol: 'VNDT'
    },
    explorers: [
      {
        url: 'https://scan.vcex.xyz',
        name: 'VChain Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '9ddc08c3-063b-5bd1-a10d-e4f53f5d117e',
    name: 'BOMB Chain',
    chain: 'BOMB',
    chainId: 2300,
    rpc: ['https://rpc.bombchain.com'],
    icon: 'bomb',
    nativeCurrency: {
      decimals: 18,
      name: 'BOMB Token',
      symbol: 'BOMB'
    },
    explorers: [
      {
        url: 'https://bombscan.com',
        name: 'bombscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '85223b90-e2a0-5b7f-acc3-349c2194af65',
    name: 'Arevia',
    chain: 'Arevia',
    chainId: 2309,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Arev',
      symbol: 'ARÉV'
    },
    explorers: []
  },
  {
    id: '65124c74-35f0-55ab-aeda-0425d57a1dbe',
    name: 'Altcoinchain',
    chain: 'mainnet',
    chainId: 2330,
    rpc: ['https://rpc0.altcoinchain.org/rpc'],
    icon: 'altcoinchain',
    nativeCurrency: {
      decimals: 18,
      name: 'Altcoin',
      symbol: 'ALT'
    },
    explorers: [
      {
        url: 'http://expedition.altcoinchain.org',
        name: 'expedition',
        standard: 'none'
      }
    ]
  },
  {
    id: 'bf6a1f38-c6d7-5cf9-ba37-a163c3112699',
    name: 'BOMB Chain Testnet',
    chain: 'BOMB',
    chainId: 2399,
    rpc: ['https://bombchain-testnet.ankr.com/bas_full_rpc_1'],
    icon: 'bomb',
    nativeCurrency: {
      decimals: 18,
      name: 'BOMB Token',
      symbol: 'tBOMB'
    },
    explorers: [
      {
        url: 'https://explorer.bombchain-testnet.ankr.com',
        name: 'bombscan-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7910a266-b7bb-51cb-89c5-ca46d2c896da',
    name: 'TCG Verse Mainnet',
    chain: 'TCG Verse',
    chainId: 2400,
    rpc: ['https://rpc.tcgverse.xyz'],
    icon: 'tcg_verse',
    nativeCurrency: {
      decimals: 18,
      name: 'OAS',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer.tcgverse.xyz',
        name: 'TCG Verse Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '666553ca-c6b5-5fd3-a0b0-3494f310db8a',
    name: 'XODEX',
    chain: 'XODEX',
    chainId: 2415,
    rpc: ['https://mainnet.xo-dex.com/rpc', 'https://xo-dex.io'],
    icon: 'xodex',
    nativeCurrency: {
      decimals: 18,
      name: 'XODEX Native Token',
      symbol: 'XODEX'
    },
    explorers: [
      {
        url: 'https://explorer.xo-dex.com',
        name: 'XODEX Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c41c6e0a-db7b-54f2-9106-8e15298c0a73',
    name: 'Kortho Mainnet',
    chain: 'Kortho Chain',
    chainId: 2559,
    rpc: ['https://www.kortho-chain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 11,
      name: 'KorthoChain',
      symbol: 'KTO'
    },
    explorers: null
  },
  {
    id: '38909bb7-1b5e-56ba-b9c9-7d18e21a9c09',
    name: 'TechPay Mainnet',
    chain: 'TPC',
    chainId: 2569,
    rpc: ['https://api.techpay.io/'],
    icon: 'techpay',
    nativeCurrency: {
      decimals: 18,
      name: 'TechPay',
      symbol: 'TPC'
    },
    explorers: [
      {
        url: 'https://tpcscan.com',
        name: 'tpcscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ee2e6583-2fc6-52b8-be7e-fea2ad5c9156',
    name: 'PoCRNet',
    chain: 'CRC',
    chainId: 2606,
    rpc: [
      'https://pocrnet.westeurope.cloudapp.azure.com/http',
      'wss://pocrnet.westeurope.cloudapp.azure.com/ws'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Carbon Reduction Coin',
      symbol: 'CRC'
    },
    explorers: [
      {
        url: 'https://ethereum-pocr.github.io/explorer/pocrnet',
        name: 'Lite Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '12303221-4883-540a-b511-83df96e733f3',
    name: 'Redlight Chain Mainnet',
    chain: 'REDLC',
    chainId: 2611,
    rpc: ['https://dataseed2.redlightscan.finance'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Redlight Coin',
      symbol: 'REDLC'
    },
    explorers: [
      {
        url: 'https://redlightscan.finance',
        name: 'REDLC Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '236894dd-69c4-539c-9d19-127f39216309',
    name: 'EZChain C-Chain Mainnet',
    chain: 'EZC',
    chainId: 2612,
    rpc: ['https://api.ezchain.com/ext/bc/C/rpc'],
    icon: 'ezchain',
    nativeCurrency: {
      decimals: 18,
      name: 'EZChain',
      symbol: 'EZC'
    },
    explorers: [
      {
        url: 'https://cchain-explorer.ezchain.com',
        name: 'ezchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6bb7e26e-27a5-5750-9cd0-5134f2fbb8f1',
    name: 'EZChain C-Chain Testnet',
    chain: 'EZC',
    chainId: 2613,
    rpc: ['https://testnet-api.ezchain.com/ext/bc/C/rpc'],
    icon: 'ezchain',
    nativeCurrency: {
      decimals: 18,
      name: 'EZChain',
      symbol: 'EZC'
    },
    explorers: [
      {
        url: 'https://testnet-cchain-explorer.ezchain.com',
        name: 'ezchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e7f82351-65f9-5672-a320-c3546376d8ef',
    name: 'Boba Network Goerli Testnet',
    chain: 'ETH',
    chainId: 2888,
    rpc: ['https://goerli.boba.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://testnet.bobascan.com',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '465733de-3d8d-54f9-9237-a4868819b09a',
    name: 'BitYuan Mainnet',
    chain: 'BTY',
    chainId: 2999,
    rpc: ['https://mainnet.bityuan.com/eth'],
    icon: 'bty',
    nativeCurrency: {
      decimals: 18,
      name: 'BTY',
      symbol: 'BTY'
    },
    explorers: [
      {
        url: 'https://mainnet.bityuan.com',
        name: 'BitYuan Block Chain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a241c758-8db9-57e2-b5a6-e62c150f050e',
    name: 'CENNZnet Rata',
    chain: 'CENNZnet',
    chainId: 3000,
    rpc: [],
    icon: 'cennz',
    nativeCurrency: {
      decimals: 18,
      name: 'CPAY',
      symbol: 'CPAY'
    },
    explorers: null
  },
  {
    id: 'b055b135-18d1-5c8c-9fd0-50360041f651',
    name: 'CENNZnet Nikau',
    chain: 'CENNZnet',
    chainId: 3001,
    rpc: ['https://nikau.centrality.me/public'],
    icon: 'cennz',
    nativeCurrency: {
      decimals: 18,
      name: 'CPAY',
      symbol: 'CPAY'
    },
    explorers: [
      {
        url: 'https://www.uncoverexplorer.com/?network=Nikau',
        name: 'UNcover',
        standard: 'none'
      }
    ]
  },
  {
    id: '94d1a87e-04f6-5c7f-8048-a96285ec2083',
    name: 'Orlando Chain',
    chain: 'ORL',
    chainId: 3031,
    rpc: ['https://rpc-testnet.orlchain.com'],
    icon: 'orl',
    nativeCurrency: {
      decimals: 18,
      name: 'Orlando',
      symbol: 'ORL'
    },
    explorers: [
      {
        url: 'https://orlscan.com',
        name: 'Orlando (ORL) Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '45002844-0fd0-5716-883d-5f4f79564e68',
    name: 'Bifrost Mainnet',
    chain: 'BFC',
    chainId: 3068,
    rpc: [
      'https://public-01.mainnet.thebifrost.io/rpc',
      'https://public-02.mainnet.thebifrost.io/rpc'
    ],
    icon: 'bifrost',
    nativeCurrency: {
      decimals: 18,
      name: 'Bifrost',
      symbol: 'BFC'
    },
    explorers: [
      {
        url: 'https://explorer.mainnet.thebifrost.io',
        name: 'explorer-thebifrost',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b19c4990-3cf5-5763-b65a-812fe73a4454',
    name: 'Filecoin - Hyperspace testnet',
    chain: 'FIL',
    chainId: 3141,
    rpc: [
      'https://api.hyperspace.node.glif.io/rpc/v1',
      'https://rpc.ankr.com/filecoin_testnet',
      'https://filecoin-hyperspace.chainstacklabs.com/rpc/v1'
    ],
    icon: 'filecoin',
    nativeCurrency: {
      decimals: 18,
      name: 'testnet filecoin',
      symbol: 'tFIL'
    },
    explorers: [
      {
        url: 'https://hyperspace.filfox.info/en',
        name: 'Filfox - Hyperspace',
        standard: 'none'
      },
      {
        url: 'https://explorer.glif.io/?network=hyperspace',
        name: 'Glif Explorer - Hyperspace',
        standard: 'none'
      },
      {
        url: 'https://beryx.zondax.ch',
        name: 'Beryx',
        standard: 'none'
      },
      {
        url: 'https://explorer.filmine.io',
        name: 'Filmine',
        standard: 'none'
      },
      {
        url: 'https://hyperspace.filscan.io',
        name: 'Filscan - Hyperspace',
        standard: 'none'
      }
    ]
  },
  {
    id: 'fe950317-5b34-5db0-b0fe-fcc01641d811',
    name: 'Debounce Subnet Testnet',
    chain: 'Debounce Network',
    chainId: 3306,
    rpc: ['https://dev-rpc.debounce.network'],
    icon: 'debounce',
    nativeCurrency: {
      decimals: 18,
      name: 'Debounce Network',
      symbol: 'DB'
    },
    explorers: [
      {
        url: 'https://explorer.debounce.network',
        name: 'Debounce Devnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2860f09c-72ef-5af6-b22a-567f4ef16ec1',
    name: 'ZCore Testnet',
    chain: 'Beach',
    chainId: 3331,
    rpc: ['https://rpc-testnet.zcore.cash'],
    icon: 'zcore',
    nativeCurrency: {
      decimals: 18,
      name: 'ZCore',
      symbol: 'ZCR'
    },
    explorers: null
  },
  {
    id: '27728cdd-0cbc-5fbe-9edf-208383ca452e',
    name: 'Web3Q Testnet',
    chain: 'Web3Q',
    chainId: 3333,
    rpc: ['https://testnet.web3q.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Web3Q',
      symbol: 'W3Q'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.web3q.io',
        name: 'w3q-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5e35dbba-8ae2-51d0-bbe0-7ee9186950a8',
    name: 'Web3Q Galileo',
    chain: 'Web3Q',
    chainId: 3334,
    rpc: ['https://galileo.web3q.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Web3Q',
      symbol: 'W3Q'
    },
    explorers: [
      {
        url: 'https://explorer.galileo.web3q.io',
        name: 'w3q-galileo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '507f72d0-b648-530f-8036-3bd6ab8d4043',
    name: 'Paribu Net Mainnet',
    chain: 'PRB',
    chainId: 3400,
    rpc: ['https://rpc.paribu.network'],
    icon: 'prb',
    nativeCurrency: {
      decimals: 18,
      name: 'PRB',
      symbol: 'PRB'
    },
    explorers: [
      {
        url: 'https://explorer.paribu.network',
        name: 'Paribu Net Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bf7ed662-23ed-53c4-ad97-b2d4c790795b',
    name: 'Paribu Net Testnet',
    chain: 'PRB',
    chainId: 3500,
    rpc: ['https://rpc.testnet.paribuscan.com'],
    icon: 'prb',
    nativeCurrency: {
      decimals: 18,
      name: 'PRB',
      symbol: 'PRB'
    },
    explorers: [
      {
        url: 'https://testnet.paribuscan.com',
        name: 'Paribu Net Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3850d3ad-a243-5980-84c9-12c46f72fec2',
    name: 'JFIN Chain',
    chain: 'JFIN',
    chainId: 3501,
    rpc: ['https://rpc.jfinchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'JFIN Coin',
      symbol: 'jfin'
    },
    explorers: [
      {
        url: 'https://exp.jfinchain.com',
        name: 'JFIN Chain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '533af805-cc02-531a-84ba-d178fffcbfac',
    name: 'PandoProject Mainnet',
    chain: 'PandoProject',
    chainId: 3601,
    rpc: ['https://eth-rpc-api.pandoproject.org/rpc'],
    icon: 'pando',
    nativeCurrency: {
      decimals: 18,
      name: 'pando-token',
      symbol: 'PTX'
    },
    explorers: [
      {
        url: 'https://explorer.pandoproject.org',
        name: 'Pando Mainnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '6514141d-9bd4-5e8f-bcaf-3513220143da',
    name: 'PandoProject Testnet',
    chain: 'PandoProject',
    chainId: 3602,
    rpc: ['https://testnet.ethrpc.pandoproject.org/rpc'],
    icon: 'pando',
    nativeCurrency: {
      decimals: 18,
      name: 'pando-token',
      symbol: 'PTX'
    },
    explorers: [
      {
        url: 'https://testnet.explorer.pandoproject.org',
        name: 'Pando Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '90c8f426-ba5c-5383-8871-00752bd589c8',
    name: 'Metacodechain',
    chain: 'metacode',
    chainId: 3666,
    rpc: ['https://j.blockcoach.com:8503'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'J',
      symbol: 'J'
    },
    explorers: [
      {
        url: 'https://j.blockcoach.com:8089',
        name: 'meta',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3d9e659f-76b2-5a96-aa74-a5d91e0c5e22',
    name: 'Bittex Mainnet',
    chain: 'BTX',
    chainId: 3690,
    rpc: ['https://rpc1.bittexscan.info', 'https://rpc2.bittexscan.info'],
    icon: 'ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Bittex',
      symbol: 'BTX'
    },
    explorers: [
      {
        url: 'https://bittexscan.com',
        name: 'bittexscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '16e2862d-f0a0-527b-80cc-ebc87f2a0c93',
    name: 'Empire Network',
    chain: 'EMPIRE',
    chainId: 3693,
    rpc: ['https://rpc.empirenetwork.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Empire',
      symbol: 'EMPIRE'
    },
    explorers: [
      {
        url: 'https://explorer.empirenetwork.io',
        name: 'Empire Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '30e4e57c-3195-5d93-a61f-8a01219684a6',
    name: 'Crossbell',
    chain: 'Crossbell',
    chainId: 3737,
    rpc: ['https://rpc.crossbell.io'],
    icon: 'crossbell',
    nativeCurrency: {
      decimals: 18,
      name: 'Crossbell Token',
      symbol: 'CSB'
    },
    explorers: [
      {
        url: 'https://scan.crossbell.io',
        name: 'Crossbell Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd61fc19f-97f3-5994-b681-39ad9a089074',
    name: 'DRAC Network',
    chain: 'DRAC',
    chainId: 3912,
    rpc: ['https://www.dracscan.com/rpc'],
    icon: 'drac',
    nativeCurrency: {
      decimals: 18,
      name: 'DRAC',
      symbol: 'DRAC'
    },
    explorers: [
      {
        url: 'https://www.dracscan.io',
        name: 'DRAC_Network Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '353a22bf-eeaf-58eb-b4f3-9b524341c2bd',
    name: 'DYNO Mainnet',
    chain: 'DYNO',
    chainId: 3966,
    rpc: ['https://api.dynoprotocol.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'DYNO Token',
      symbol: 'DYNO'
    },
    explorers: [
      {
        url: 'https://dynoscan.io',
        name: 'DYNO Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bf59eabc-6f02-58d9-8c05-5a4e65101750',
    name: 'DYNO Testnet',
    chain: 'DYNO',
    chainId: 3967,
    rpc: ['https://tapi.dynoprotocol.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'DYNO Token',
      symbol: 'tDYNO'
    },
    explorers: [
      {
        url: 'https://testnet.dynoscan.io',
        name: 'DYNO Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '420f3bf3-9ab6-570a-8421-fce761774d0e',
    name: 'YuanChain Mainnet',
    chain: 'YCC',
    chainId: 3999,
    rpc: ['https://mainnet.yuan.org/eth'],
    icon: 'ycc',
    nativeCurrency: {
      decimals: 18,
      name: 'YCC',
      symbol: 'YCC'
    },
    explorers: [
      {
        url: 'https://mainnet.yuan.org',
        name: 'YuanChain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '42835a81-aac0-5b6d-bc20-8a159b7046f5',
    name: 'Fantom Testnet',
    chain: 'FTM',
    chainId: 4002,
    rpc: ['https://rpc.testnet.fantom.network'],
    icon: 'fantom',
    nativeCurrency: {
      decimals: 18,
      name: 'Fantom',
      symbol: 'FTM'
    },
    explorers: [
      {
        url: 'https://testnet.ftmscan.com',
        name: 'ftmscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '267be7a6-d625-5b22-b9d9-20389d0c1fc2',
    name: 'Bobaopera Testnet',
    chain: 'Bobaopera Testnet',
    chainId: 4051,
    rpc: [
      'https://testnet.bobaopera.boba.network',
      'wss://wss.testnet.bobaopera.boba.network',
      'https://replica.testnet.bobaopera.boba.network',
      'wss://replica-wss.testnet.bobaopera.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.testnet.bobaopera.boba.network',
        name: 'Bobaopera Testnet block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'f998b4e9-9c72-54b4-a3b8-8c45d62d119e',
    name: 'Nahmii 3 Mainnet',
    chain: 'Nahmii',
    chainId: 4061,
    rpc: [],
    icon: 'nahmii',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: '30eec5b4-b00b-533c-9f2b-4b78d0ed88f4',
    name: 'Nahmii 3 Testnet',
    chain: 'Nahmii',
    chainId: 4062,
    rpc: ['https://ngeth.testnet.n3.nahmii.io'],
    icon: 'nahmii',
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.n3.nahmii.io',
        name: 'Nahmii 3 Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'faf5cf09-34e7-5e80-9a34-622e425a219e',
    name: 'Bitindi Testnet',
    chain: 'BNI',
    chainId: 4096,
    rpc: ['https://testnet-rpc.bitindi.org'],
    icon: 'bitindiTestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'BNI',
      symbol: '$BNI'
    },
    explorers: [
      {
        url: 'https://testnet.bitindiscan.com',
        name: 'Bitindi',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'cb923a51-47d3-5929-b012-c3e8687ad8ff',
    name: 'Bitindi Mainnet',
    chain: 'BNI',
    chainId: 4099,
    rpc: ['https://mainnet-rpc.bitindi.org'],
    icon: 'bitindi',
    nativeCurrency: {
      decimals: 18,
      name: 'BNI',
      symbol: '$BNI'
    },
    explorers: [
      {
        url: 'https://bitindiscan.com',
        name: 'Bitindi',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5c05f7e4-d10d-5063-b0e4-d7fe824cac3c',
    name: 'AIOZ Network Testnet',
    chain: 'AIOZ',
    chainId: 4102,
    rpc: ['https://eth-ds.testnet.aioz.network'],
    icon: 'aioz',
    nativeCurrency: {
      decimals: 18,
      name: 'testAIOZ',
      symbol: 'AIOZ'
    },
    explorers: [
      {
        url: 'https://testnet.explorer.aioz.network',
        name: 'AIOZ Network Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4ad8254c-7211-5f8b-bbca-db552e7eeba7',
    name: 'Tipboxcoin Testnet',
    chain: 'TPBX',
    chainId: 4141,
    rpc: ['https://testnet-rpc.tipboxcoin.net'],
    icon: 'tipboxcoinIcon',
    nativeCurrency: {
      decimals: 18,
      name: 'Tipboxcoin',
      symbol: 'TPBX'
    },
    explorers: [
      {
        url: 'https://testnet.tipboxcoin.net',
        name: 'Tipboxcoin',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7f72e673-c1df-5274-9348-94cb3993c0e0',
    name: 'PHI Network V1',
    chain: 'PHI V1',
    chainId: 4181,
    rpc: ['https://rpc1.phi.network', 'https://rpc2.phi.network'],
    icon: 'phi',
    nativeCurrency: {
      decimals: 18,
      name: 'PHI',
      symbol: 'Φ'
    },
    explorers: [
      {
        url: 'https://explorer.phi.network',
        name: 'PHI Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '42bce7fc-f2f2-5afb-b471-ff670b5daa49',
    name: 'Bobafuji Testnet',
    chain: 'Bobafuji Testnet',
    chainId: 4328,
    rpc: [
      'https://testnet.avax.boba.network',
      'wss://wss.testnet.avax.boba.network',
      'https://replica.testnet.avax.boba.network',
      'wss://replica-wss.testnet.avax.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.testnet.avax.boba.network',
        name: 'Bobafuji Testnet block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'dd026e01-539d-5a1e-9d7a-8c6cb2067476',
    name: 'Htmlcoin Mainnet',
    chain: 'mainnet',
    chainId: 4444,
    rpc: ['https://janus.htmlcoin.com/api/'],
    icon: 'htmlcoin',
    nativeCurrency: {
      decimals: 8,
      name: 'Htmlcoin',
      symbol: 'HTML'
    },
    explorers: [
      {
        url: 'https://explorer.htmlcoin.com',
        name: 'htmlcoin',
        standard: 'none'
      }
    ]
  },
  {
    id: '41021884-2067-52b5-b884-ce1d7e0104eb',
    name: 'IoTeX Network Mainnet',
    chain: 'iotex.io',
    chainId: 4689,
    rpc: ['https://babel-api.mainnet.iotex.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'IoTeX',
      symbol: 'IOTX'
    },
    explorers: [
      {
        url: 'https://iotexscan.io',
        name: 'iotexscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4255e7e2-a086-544d-8130-fe113110cccf',
    name: 'IoTeX Network Testnet',
    chain: 'iotex.io',
    chainId: 4690,
    rpc: ['https://babel-api.testnet.iotex.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'IoTeX',
      symbol: 'IOTX'
    },
    explorers: [
      {
        url: 'https://testnet.iotexscan.io',
        name: 'testnet iotexscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5044b3cb-6d29-5566-ab86-de63acd8ad23',
    name: 'BlackFort Exchange Network Testnet',
    chain: 'TBXN',
    chainId: 4777,
    rpc: ['https://testnet.blackfort.network/rpc'],
    icon: 'bxn',
    nativeCurrency: {
      decimals: 18,
      name: 'BlackFort Testnet Token',
      symbol: 'TBXN'
    },
    explorers: [
      {
        url: 'https://testnet-explorer.blackfort.network',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '027d4ce4-a49a-58c8-bcb1-8820746815c4',
    name: 'Venidium Testnet',
    chain: 'XVM',
    chainId: 4918,
    rpc: ['https://rpc-evm-testnet.venidium.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Venidium',
      symbol: 'XVM'
    },
    explorers: [
      {
        url: 'https://evm-testnet.venidiumexplorer.com',
        name: 'Venidium EVM Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c2b026e5-54aa-5d37-b19b-bb849681e7b8',
    name: 'Venidium Mainnet',
    chain: 'XVM',
    chainId: 4919,
    rpc: ['https://rpc.venidium.io'],
    icon: 'venidium',
    nativeCurrency: {
      decimals: 18,
      name: 'Venidium',
      symbol: 'XVM'
    },
    explorers: [
      {
        url: 'https://evm.venidiumexplorer.com',
        name: 'Venidium Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dbe82b59-0c5a-5038-b38c-117228378f99',
    name: 'BlackFort Exchange Network',
    chain: 'BXN',
    chainId: 4999,
    rpc: [
      'https://mainnet.blackfort.network/rpc',
      'https://mainnet-1.blackfort.network/rpc',
      'https://mainnet-2.blackfort.network/rpc',
      'https://mainnet-3.blackfort.network/rpc'
    ],
    icon: 'bxn',
    nativeCurrency: {
      decimals: 18,
      name: 'BlackFort Token',
      symbol: 'BXN'
    },
    explorers: [
      {
        url: 'https://explorer.blackfort.network',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '107f8a5c-237f-5536-a465-25601562b3be',
    name: 'Mantle',
    chain: 'ETH',
    chainId: 5000,
    rpc: ['https://rpc.mantle.xyz'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BitDAO',
      symbol: 'BIT'
    },
    explorers: [
      {
        url: 'https://explorer.mantle.xyz',
        name: 'Mantle Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3a96d47f-25c2-5752-a488-b308c132a2c9',
    name: 'Mantle Testnet',
    chain: 'ETH',
    chainId: 5001,
    rpc: ['https://rpc.testnet.mantle.xyz'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet BitDAO',
      symbol: 'BIT'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.mantle.xyz',
        name: 'Mantle Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ad96ae61-df30-5541-bd59-4c81f408d47c',
    name: 'TLChain Network Mainnet',
    chain: 'TLC',
    chainId: 5177,
    rpc: ['https://mainnet-rpc.tlxscan.com/'],
    icon: 'tlc',
    nativeCurrency: {
      decimals: 18,
      name: 'TLChain Network',
      symbol: 'TLC'
    },
    explorers: [
      {
        url: 'https://explorer.tlchain.network',
        name: 'TLChain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '7f20e1c9-2788-5fa4-a633-4f6d9c6e04b2',
    name: 'EraSwap Mainnet',
    chain: 'ESN',
    chainId: 5197,
    rpc: [
      'https://mainnet.eraswap.network',
      'https://rpc-mumbai.mainnet.eraswap.network'
    ],
    icon: 'eraswap',
    nativeCurrency: {
      decimals: 18,
      name: 'EraSwap',
      symbol: 'ES'
    },
    explorers: null
  },
  {
    id: 'ab656816-9b0b-5a5b-b506-3acb49384163',
    name: 'Humanode Mainnet',
    chain: 'HMND',
    chainId: 5234,
    rpc: ['https://explorer-rpc-http.mainnet.stages.humanode.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'HMND',
      symbol: 'HMND'
    },
    explorers: []
  },
  {
    id: 'b0c6b4f4-6bf2-5285-8357-c4221122f067',
    name: 'Firechain Mainnet Old',
    chain: 'FIRE',
    chainId: 5290,
    rpc: ['https://mainnet.rpc1.thefirechain.com'],
    icon: 'firechain',
    nativeCurrency: {
      decimals: 18,
      name: 'Firechain',
      symbol: 'FIRE'
    },
    explorers: []
  },
  {
    id: '22f81460-a5b9-5b93-8053-2ef897e2d978',
    name: 'Uzmi Network Mainnet',
    chain: 'UZMI',
    chainId: 5315,
    rpc: ['https://network.uzmigames.com.br/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'UZMI',
      symbol: 'UZMI'
    },
    explorers: null
  },
  {
    id: 'df1cbc18-964e-518f-a93b-2c2f37dffbc4',
    name: 'Nahmii Mainnet',
    chain: 'Nahmii',
    chainId: 5551,
    rpc: ['https://l2.nahmii.io'],
    icon: 'nahmii',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.nahmii.io',
        name: 'Nahmii mainnet explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3170d925-dd90-5acf-9261-0f788c91ec83',
    name: 'Nahmii Testnet',
    chain: 'Nahmii',
    chainId: 5553,
    rpc: ['https://l2.testnet.nahmii.io'],
    icon: 'nahmii',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.nahmii.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '173d299b-84b1-547e-add2-3f68163b3be5',
    name: 'Chain Verse Mainnet',
    chain: 'CVERSE',
    chainId: 5555,
    rpc: ['https://rpc.chainverse.info'],
    icon: 'chain_verse',
    nativeCurrency: {
      decimals: 18,
      name: 'Oasys',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer.chainverse.info',
        name: 'Chain Verse Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '20e38127-5d76-5c11-a46d-1290dbbee07c',
    name: 'Syscoin Tanenbaum Testnet',
    chain: 'SYS',
    chainId: 5700,
    rpc: ['https://rpc.tanenbaum.io', 'wss://rpc.tanenbaum.io/wss'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet Syscoin',
      symbol: 'tSYS'
    },
    explorers: [
      {
        url: 'https://tanenbaum.io',
        name: 'Syscoin Testnet Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '563ba16d-91a7-5041-9779-559dcf354932',
    name: 'Hika Network Testnet',
    chain: 'HIK',
    chainId: 5729,
    rpc: ['https://rpc-testnet.hika.network/'],
    icon: 'hik',
    nativeCurrency: {
      decimals: 18,
      name: 'Hik Token',
      symbol: 'HIK'
    },
    explorers: [
      {
        url: 'https://scan-testnet.hika.network',
        name: 'Hika Network Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '56265080-a09a-5e78-a028-ca66597b6bd8',
    name: 'Ganache',
    chain: 'ETH',
    chainId: 5777,
    rpc: ['https://127.0.0.1:7545'],
    icon: 'ganache',
    nativeCurrency: {
      decimals: 18,
      name: 'Ganache Test Ether',
      symbol: 'ETH'
    },
    explorers: []
  },
  {
    id: '3f3fdd77-671d-5cae-a032-dd3d3ea191f9',
    name: 'Ontology Testnet',
    chain: 'Ontology',
    chainId: 5851,
    rpc: [
      'http://polaris1.ont.io:20339',
      'http://polaris2.ont.io:20339',
      'http://polaris3.ont.io:20339',
      'http://polaris4.ont.io:20339',
      'https://polaris1.ont.io:10339',
      'https://polaris2.ont.io:10339',
      'https://polaris3.ont.io:10339',
      'https://polaris4.ont.io:10339'
    ],
    icon: 'ontology',
    nativeCurrency: {
      decimals: 18,
      name: 'ONG',
      symbol: 'ONG'
    },
    explorers: [
      {
        url: 'https://explorer.ont.io/testnet',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1edf1ea1-f3bc-56e9-8021-36f5e680bc40',
    name: 'Wegochain Rubidium Mainnet',
    chain: 'RBD',
    chainId: 5869,
    rpc: ['https://proxy.wegochain.io', 'http://wallet.wegochain.io:7764'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Rubid',
      symbol: 'RBD'
    },
    explorers: [
      {
        url: 'https://scan2.wegochain.io',
        name: 'wegoscan2',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '45c8521b-2791-5bfb-88ea-2cb030c6fef3',
    name: 'Tres Testnet',
    chain: 'TresLeches',
    chainId: 6065,
    rpc: ['https://rpc-test.tresleches.finance/'],
    icon: 'tresleches',
    nativeCurrency: {
      decimals: 18,
      name: 'TRES',
      symbol: 'TRES'
    },
    explorers: [
      {
        url: 'https://explorer-test.tresleches.finance',
        name: 'treslechesexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '14db7d08-3a8d-5380-af0e-78f1d161d606',
    name: 'Tres Mainnet',
    chain: 'TresLeches',
    chainId: 6066,
    rpc: ['https://rpc.tresleches.finance/', 'https://rpc.treschain.io/'],
    icon: 'tresleches',
    nativeCurrency: {
      decimals: 18,
      name: 'TRES',
      symbol: 'TRES'
    },
    explorers: [
      {
        url: 'https://explorer.tresleches.finance',
        name: 'treslechesexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1a549ce6-0b02-5964-b686-aa0ab29a2f08',
    name: 'Pixie Chain Mainnet',
    chain: 'PixieChain',
    chainId: 6626,
    rpc: [
      'https://http-mainnet.chain.pixie.xyz',
      'wss://ws-mainnet.chain.pixie.xyz'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Pixie Chain Native Token',
      symbol: 'PIX'
    },
    explorers: [
      {
        url: 'https://scan.chain.pixie.xyz',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '6c9cb666-c22c-546a-bf96-555c282662ef',
    name: 'Gold Smart Chain Mainnet',
    chain: 'STAND',
    chainId: 6789,
    rpc: ['https://rpc-mainnet.goldsmartchain.com'],
    icon: 'stand',
    nativeCurrency: {
      decimals: 18,
      name: 'Standard in Gold',
      symbol: 'STAND'
    },
    explorers: [
      {
        url: 'https://mainnet.goldsmartchain.com',
        name: 'Gold Smart Chain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd55e0da3-21f6-5f8f-80c7-128a7cb9b5db',
    name: 'Tomb Chain Mainnet',
    chain: 'Tomb Chain',
    chainId: 6969,
    rpc: ['https://rpc.tombchain.com/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Tomb',
      symbol: 'TOMB'
    },
    explorers: [
      {
        url: 'https://tombscout.com',
        name: 'tombscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ed1cebfb-fcee-599e-aaef-b42f7c291517',
    name: 'PolySmartChain',
    chain: 'PSC',
    chainId: 6999,
    rpc: [
      'https://seed0.polysmartchain.com/',
      'https://seed1.polysmartchain.com/',
      'https://seed2.polysmartchain.com/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'PSC',
      symbol: 'PSC'
    },
    explorers: null
  },
  {
    id: 'da4d1a9d-8b6f-5834-a03e-2fce191452fa',
    name: 'ZetaChain Mainnet',
    chain: 'ZetaChain',
    chainId: 7000,
    rpc: ['https://api.mainnet.zetachain.com/evm'],
    icon: 'zetachain',
    nativeCurrency: {
      decimals: 18,
      name: 'Zeta',
      symbol: 'ZETA'
    },
    explorers: [
      {
        url: 'https://explorer.mainnet.zetachain.com',
        name: 'ZetaChain Mainnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '988aca88-4c4d-57e0-a73c-248da28096a6',
    name: 'ZetaChain Athens Testnet',
    chain: 'ZetaChain',
    chainId: 7001,
    rpc: ['https://api.athens2.zetachain.com/evm'],
    icon: 'zetachain',
    nativeCurrency: {
      decimals: 18,
      name: 'Zeta',
      symbol: 'aZETA'
    },
    explorers: [
      {
        url: 'https://explorer.athens.zetachain.com',
        name: 'ZetaChain Athens Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '07ccfd9a-7881-5f36-9ddc-f3ba4daefcb3',
    name: 'Ella the heart',
    chain: 'ella',
    chainId: 7027,
    rpc: ['https://rpc.ella.network'],
    icon: 'ella',
    nativeCurrency: {
      decimals: 18,
      name: 'Ella',
      symbol: 'ELLA'
    },
    explorers: [
      {
        url: 'https://ella.network',
        name: 'Ella',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c7921454-ff62-5ef2-8f91-9a841cbfffee',
    name: 'Planq Mainnet',
    chain: 'Planq',
    chainId: 7070,
    rpc: ['https://evm-rpc.planq.network'],
    icon: 'planq',
    nativeCurrency: {
      decimals: 18,
      name: 'Planq',
      symbol: 'PLQ'
    },
    explorers: [
      {
        url: 'https://evm.planq.network',
        name: 'Planq EVM Explorer (Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://explorer.planq.network',
        name: 'Planq Cosmos Explorer (BigDipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ba74306d-c4d3-59d4-acaf-783a38e74f23',
    name: 'KLYNTAR',
    chain: 'KLY',
    chainId: 7331,
    rpc: [
      'https://evm.klyntar.org/kly_evm_rpc',
      'https://evm.klyntarscan.org/kly_evm_rpc'
    ],
    icon: 'klyntar',
    nativeCurrency: {
      decimals: 18,
      name: 'KLYNTAR',
      symbol: 'KLY'
    },
    explorers: []
  },
  {
    id: 'bcf5cf63-06e3-585c-a825-95d13b6a876a',
    name: 'Shyft Mainnet',
    chain: 'SHYFT',
    chainId: 7341,
    rpc: ['https://rpc.shyft.network/'],
    icon: 'shyft',
    nativeCurrency: {
      decimals: 18,
      name: 'Shyft',
      symbol: 'SHYFT'
    },
    explorers: [
      {
        url: 'https://bx.shyft.network',
        name: 'Shyft BX',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '83745ad9-8803-5e89-96b0-91d85158ea8c',
    name: 'Canto',
    chain: 'Canto',
    chainId: 7700,
    rpc: [
      'https://canto.slingshot.finance',
      'https://canto.neobase.one',
      'https://mainnode.plexnode.org:8545'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Canto',
      symbol: 'CANTO'
    },
    explorers: [
      {
        url: 'https://evm.explorer.canto.io',
        name: 'Canto EVM Explorer (Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://cosmos-explorers.neobase.one',
        name: 'Canto Cosmos Explorer',
        standard: 'none'
      },
      {
        url: 'https://tuber.build',
        name: 'Canto EVM Explorer (Blockscout)',
        standard: 'none'
      }
    ]
  },
  {
    id: '193b360d-859c-5479-b5f6-61622f4928bf',
    name: 'Rise of the Warbots Testnet',
    chain: 'nmactest',
    chainId: 7777,
    rpc: [
      'https://testnet1.riseofthewarbots.com',
      'https://testnet2.riseofthewarbots.com',
      'https://testnet3.riseofthewarbots.com',
      'https://testnet4.riseofthewarbots.com',
      'https://testnet5.riseofthewarbots.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Nano Machines',
      symbol: 'NMAC'
    },
    explorers: [
      {
        url: 'https://testnet.avascan.info/blockchain/2mZ9doojfwHzXN3VXDQELKnKyZYxv7833U8Yq5eTfFx3hxJtiy',
        name: 'avascan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'f67c184b-99d9-500a-9f12-cbf6650a6db1',
    name: 'Hazlor Testnet',
    chain: 'SCAS',
    chainId: 7878,
    rpc: [
      'https://hatlas.rpc.hazlor.com:8545',
      'wss://hatlas.rpc.hazlor.com:8546'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Hazlor Test Coin',
      symbol: 'TSCAS'
    },
    explorers: [
      {
        url: 'https://explorer.hazlor.com',
        name: 'Hazlor Testnet Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '52281c92-e4cc-57b6-b400-7a6223190187',
    name: 'Teleport',
    chain: 'Teleport',
    chainId: 8000,
    rpc: ['https://evm-rpc.teleport.network'],
    icon: 'teleport',
    nativeCurrency: {
      decimals: 18,
      name: 'Tele',
      symbol: 'TELE'
    },
    explorers: [
      {
        url: 'https://evm-explorer.teleport.network',
        name: 'Teleport EVM Explorer (Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://explorer.teleport.network',
        name: 'Teleport Cosmos Explorer (Big Dipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b156f3da-8b87-5835-8727-89df2a1b9091',
    name: 'Teleport Testnet',
    chain: 'Teleport',
    chainId: 8001,
    rpc: ['https://evm-rpc.testnet.teleport.network'],
    icon: 'teleport',
    nativeCurrency: {
      decimals: 18,
      name: 'Tele',
      symbol: 'TELE'
    },
    explorers: [
      {
        url: 'https://evm-explorer.testnet.teleport.network',
        name: 'Teleport EVM Explorer (Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://explorer.testnet.teleport.network',
        name: 'Teleport Cosmos Explorer (Big Dipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: '8bee26b3-e6a4-5560-9ab5-6dc1cf92f7d3',
    name: 'MDGL Testnet',
    chain: 'MDGL',
    chainId: 8029,
    rpc: ['https://testnet.mdgl.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MDGL Token',
      symbol: 'MDGLT'
    },
    explorers: null
  },
  {
    id: 'e9d2eae9-5e14-5735-9945-eb8e407a317d',
    name: 'Shardeum Liberty 1.X',
    chain: 'Shardeum',
    chainId: 8080,
    rpc: ['https://liberty10.shardeum.org/'],
    icon: 'shardeum',
    nativeCurrency: {
      decimals: 18,
      name: 'Shardeum SHM',
      symbol: 'SHM'
    },
    explorers: [
      {
        url: 'https://explorer-liberty10.shardeum.org',
        name: 'Shardeum Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '3262b69c-756c-519a-9b7e-3e9022cb1bfd',
    name: 'Shardeum Liberty 2.X',
    chain: 'Shardeum',
    chainId: 8081,
    rpc: ['https://liberty20.shardeum.org/'],
    icon: 'shardeum',
    nativeCurrency: {
      decimals: 18,
      name: 'Shardeum SHM',
      symbol: 'SHM'
    },
    explorers: [
      {
        url: 'https://explorer-liberty20.shardeum.org',
        name: 'Shardeum Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '704e4f1b-3e94-5430-809c-b2ade3c9dd12',
    name: 'Shardeum Sphinx 1.X',
    chain: 'Shardeum',
    chainId: 8082,
    rpc: ['https://sphinx.shardeum.org/'],
    icon: 'shardeum',
    nativeCurrency: {
      decimals: 18,
      name: 'Shardeum SHM',
      symbol: 'SHM'
    },
    explorers: [
      {
        url: 'https://explorer-sphinx.shardeum.org',
        name: 'Shardeum Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '7a241cb7-ff7f-5cfc-a519-c21f84d31a07',
    name: 'StreamuX Blockchain',
    chain: 'StreamuX',
    chainId: 8098,
    rpc: [
      'https://u0ma6t6heb:KDNwOsRDGcyM2Oeui1p431Bteb4rvcWkuPgQNHwB4FM@u0xy4x6x82-u0e2mg517m-rpc.us0-aws.kaleido.io/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'StreamuX',
      symbol: 'SmuX'
    },
    explorers: null
  },
  {
    id: 'ca29efb3-3595-5d49-8f6e-8e3b1946f97f',
    name: 'Qitmeer Network Testnet',
    chain: 'MEER',
    chainId: 8131,
    rpc: [],
    icon: 'meer',
    nativeCurrency: {
      decimals: 18,
      name: 'Qitmeer Testnet',
      symbol: 'MEER-T'
    },
    explorers: [
      {
        url: 'https://testnet.qng.meerscan.io',
        name: 'meerscan testnet',
        standard: 'none'
      }
    ]
  },
  {
    id: '4823cff8-effe-5e53-8124-2d3ccaaca293',
    name: 'BeOne Chain Testnet',
    chain: 'BOC',
    chainId: 8181,
    rpc: [
      'https://pre-boc1.beonechain.com',
      'https://pre-boc2.beonechain.com',
      'https://pre-boc3.beonechain.com'
    ],
    icon: 'beonechain',
    nativeCurrency: {
      decimals: 18,
      name: 'BeOne Chain Testnet',
      symbol: 'BOC'
    },
    explorers: [
      {
        url: 'https://testnet.beonescan.com',
        name: 'BeOne Chain Testnet',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a70cdeba-7feb-5c75-acbd-1a323ef07828',
    name: 'Klaytn Mainnet Cypress',
    chain: 'KLAY',
    chainId: 8217,
    rpc: ['https://public-node-api.klaytnapi.com/v1/cypress'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'KLAY',
      symbol: 'KLAY'
    },
    explorers: [
      {
        url: 'https://scope.klaytn.com',
        name: 'Klaytnscope',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c0af0cdd-fcdc-57cb-8bdb-738bbe63f7ae',
    name: 'Blockton Blockchain',
    chain: 'Blockton Blockchain',
    chainId: 8272,
    rpc: ['https://rpc.blocktonscan.com/'],
    icon: 'bton',
    nativeCurrency: {
      decimals: 18,
      name: 'BLOCKTON',
      symbol: 'BTON'
    },
    explorers: [
      {
        url: 'https://blocktonscan.com',
        name: 'Blockton Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd1709abb-8ab1-53c1-984e-a764860b2635',
    name: 'KorthoTest',
    chain: 'Kortho',
    chainId: 8285,
    rpc: ['https://www.krotho-test.net'],
    icon: null,
    nativeCurrency: {
      decimals: 11,
      name: 'Kortho Test',
      symbol: 'KTO'
    },
    explorers: null
  },
  {
    id: 'a3deeb1d-a859-502d-b455-4863957d8f3a',
    name: 'Base',
    chain: 'ETH',
    chainId: 8453,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: '633d190c-2c51-511c-b7b8-e46b51692a25',
    name: 'Toki Network',
    chain: 'TOKI',
    chainId: 8654,
    rpc: ['https://mainnet.buildwithtoki.com/v0/rpc'],
    icon: 'toki',
    nativeCurrency: {
      decimals: 18,
      name: 'Toki',
      symbol: 'TOKI'
    },
    explorers: []
  },
  {
    id: 'f04f9485-2776-5c32-bacf-e77fecdfa8cc',
    name: 'Toki Testnet',
    chain: 'TOKI',
    chainId: 8655,
    rpc: ['https://testnet.buildwithtoki.com/v0/rpc'],
    icon: 'toki',
    nativeCurrency: {
      decimals: 18,
      name: 'Toki',
      symbol: 'TOKI'
    },
    explorers: []
  },
  {
    id: '81614497-27c2-5de9-860f-fdc321a56053',
    name: 'TOOL Global Mainnet',
    chain: 'OLO',
    chainId: 8723,
    rpc: ['https://mainnet-web3.wolot.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TOOL Global',
      symbol: 'OLO'
    },
    explorers: [
      {
        url: 'https://www.olo.network',
        name: 'OLO Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8bb51dc4-9802-58a6-9ef3-e9d8c0967134',
    name: 'TOOL Global Testnet',
    chain: 'OLO',
    chainId: 8724,
    rpc: ['https://testnet-web3.wolot.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TOOL Global',
      symbol: 'OLO'
    },
    explorers: null
  },
  {
    id: '7d8d33c7-cd0d-55ff-a110-db245f6828f6',
    name: 'Alph Network',
    chain: 'ALPH',
    chainId: 8738,
    rpc: ['https://rpc.alph.network', 'wss://rpc.alph.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Alph Network',
      symbol: 'ALPH'
    },
    explorers: [
      {
        url: 'https://explorer.alph.network',
        name: 'alphscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8476c3fb-a751-5f5f-8d72-30460c3b2b18',
    name: 'TMY Chain',
    chain: 'TMY',
    chainId: 8768,
    rpc: ['https://node1.tmyblockchain.org/rpc'],
    icon: 'tmychain',
    nativeCurrency: {
      decimals: 18,
      name: 'TMY',
      symbol: 'TMY'
    },
    explorers: null
  },
  {
    id: '96591fd0-65d9-536a-a853-a2fce99256cd',
    name: 'MARO Blockchain Mainnet',
    chain: 'MARO Blockchain',
    chainId: 8848,
    rpc: ['https://rpc-mainnet.ma.ro'],
    icon: 'MARO',
    nativeCurrency: {
      decimals: 18,
      name: 'MARO',
      symbol: 'MARO'
    },
    explorers: [
      {
        url: 'https://scan.ma.ro/#',
        name: 'MARO Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c75146d8-72fe-50f4-8fe5-ce3d3687e728',
    name: 'Unique',
    chain: 'UNQ',
    chainId: 8880,
    rpc: [
      'https://rpc.unique.network',
      'https://eu-rpc.unique.network',
      'https://asia-rpc.unique.network',
      'https://us-rpc.unique.network'
    ],
    icon: 'unique',
    nativeCurrency: {
      decimals: 18,
      name: 'Unique',
      symbol: 'UNQ'
    },
    explorers: [
      {
        url: 'https://uniquescan.io/unique',
        name: 'Unique Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '24203350-7912-5867-92aa-88f06926284b',
    name: 'Quartz by Unique',
    chain: 'UNQ',
    chainId: 8881,
    rpc: [
      'https://rpc-quartz.unique.network',
      'https://quartz.api.onfinality.io/public-ws',
      'https://eu-rpc-quartz.unique.network',
      'https://asia-rpc-quartz.unique.network',
      'https://us-rpc-quartz.unique.network'
    ],
    icon: 'quartz',
    nativeCurrency: {
      decimals: 18,
      name: 'Quartz',
      symbol: 'QTZ'
    },
    explorers: [
      {
        url: 'https://uniquescan.io/quartz',
        name: 'Unique Scan / Quartz',
        standard: 'none'
      }
    ]
  },
  {
    id: '071820ac-19fc-5553-85b8-1087bb5f1ebe',
    name: 'Opal testnet by Unique',
    chain: 'UNQ',
    chainId: 8882,
    rpc: [
      'https://rpc-opal.unique.network',
      'https://us-rpc-opal.unique.network',
      'https://eu-rpc-opal.unique.network',
      'https://asia-rpc-opal.unique.network'
    ],
    icon: 'opal',
    nativeCurrency: {
      decimals: 18,
      name: 'Opal',
      symbol: 'UNQ'
    },
    explorers: [
      {
        url: 'https://uniquescan.io/opal',
        name: 'Unique Scan / Opal',
        standard: 'none'
      }
    ]
  },
  {
    id: '3ca0f328-ab07-551a-a3e6-512e1ae1f12b',
    name: 'Sapphire by Unique',
    chain: 'UNQ',
    chainId: 8883,
    rpc: [
      'https://rpc-sapphire.unique.network',
      'https://us-rpc-sapphire.unique.network',
      'https://eu-rpc-sapphire.unique.network',
      'https://asia-rpc-sapphire.unique.network'
    ],
    icon: 'sapphire',
    nativeCurrency: {
      decimals: 18,
      name: 'Quartz',
      symbol: 'QTZ'
    },
    explorers: [
      {
        url: 'https://uniquescan.io/sapphire',
        name: 'Unique Scan / Sapphire',
        standard: 'none'
      }
    ]
  },
  {
    id: '320c702f-3415-5642-9513-6ccd805dbc84',
    name: 'XANAChain',
    chain: 'XANAChain',
    chainId: 8888,
    rpc: ['https://mainnet.xana.net/rpc'],
    icon: 'xeta',
    nativeCurrency: {
      decimals: 18,
      name: 'XETA',
      symbol: 'XETA'
    },
    explorers: [
      {
        url: 'https://xanachain.xana.net',
        name: 'XANAChain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '36feb298-8f34-5ced-a19a-5a13e7848853',
    name: 'Vyvo Smart Chain',
    chain: 'VSC',
    chainId: 8889,
    rpc: ['https://vsc-dataseed.vyvo.org:8889'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'VSC',
      symbol: 'VSC'
    },
    explorers: null
  },
  {
    id: '4f6df0f4-c8b5-53fc-a669-c7a107e68b3c',
    name: 'Mammoth Mainnet',
    chain: 'MMT',
    chainId: 8898,
    rpc: [
      'https://dataseed.mmtscan.io',
      'https://dataseed1.mmtscan.io',
      'https://dataseed2.mmtscan.io'
    ],
    icon: 'mmt',
    nativeCurrency: {
      decimals: 18,
      name: 'Mammoth Token',
      symbol: 'MMT'
    },
    explorers: [
      {
        url: 'https://mmtscan.io',
        name: 'mmtscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6fd3a235-9652-5b39-a3cc-dd5680b7ca5a',
    name: 'JIBCHAIN L1',
    chain: 'JBC',
    chainId: 8899,
    rpc: ['https://rpc-l1.jibchain.net'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'JIBCOIN',
      symbol: 'JBC'
    },
    explorers: [
      {
        url: 'https://exp-l1.jibchain.net',
        name: 'JIBCHAIN Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2e1d708f-06c2-55f5-bfe7-5314a848b8b3',
    name: 'Giant Mammoth Mainnet',
    chain: 'GMMT',
    chainId: 8989,
    rpc: ['https://rpc-asia.gmmtchain.io'],
    icon: 'gmmt',
    nativeCurrency: {
      decimals: 18,
      name: 'Giant Mammoth Coin',
      symbol: 'GMMT'
    },
    explorers: [
      {
        url: 'https://scan.gmmtchain.io',
        name: 'gmmtscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'baeb4b39-b161-59fa-8c26-45224c7fbf44',
    name: 'bloxberg',
    chain: 'bloxberg',
    chainId: 8995,
    rpc: ['https://core.bloxberg.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BERG',
      symbol: 'U+25B3'
    },
    explorers: null
  },
  {
    id: '1a465e18-5df7-516c-9efc-f1fe85fcc0a9',
    name: 'Evmos Testnet',
    chain: 'Evmos',
    chainId: 9000,
    rpc: ['https://eth.bd.evmos.dev:8545'],
    icon: 'evmos',
    nativeCurrency: {
      decimals: 18,
      name: 'test-Evmos',
      symbol: 'tEVMOS'
    },
    explorers: [
      {
        url: 'https://evm.evmos.dev',
        name: 'Evmos EVM Explorer',
        standard: 'EIP3091'
      },
      {
        url: 'https://explorer.evmos.dev',
        name: 'Evmos Cosmos Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '68fb42a1-cd64-567e-879d-301560e3bc59',
    name: 'Evmos',
    chain: 'Evmos',
    chainId: 9001,
    rpc: ['https://eth.bd.evmos.org:8545', 'https://evmos-evm.publicnode.com'],
    icon: 'evmos',
    nativeCurrency: {
      decimals: 18,
      name: 'Evmos',
      symbol: 'EVMOS'
    },
    explorers: [
      {
        url: 'https://escan.live',
        name: 'Evmos EVM Explorer (Escan)',
        standard: 'none'
      },
      {
        url: 'https://www.mintscan.io/evmos',
        name: 'Evmos Cosmos Explorer (Mintscan)',
        standard: 'none'
      }
    ]
  },
  {
    id: '2b2d8fb4-89ac-501a-8aa9-758a7f0888d3',
    name: 'BerylBit Mainnet',
    chain: 'BRB',
    chainId: 9012,
    rpc: ['https://mainnet.berylbit.io'],
    icon: 'berylbit',
    nativeCurrency: {
      decimals: 18,
      name: 'BerylBit Chain Native Token',
      symbol: 'BRB'
    },
    explorers: [
      {
        url: 'https://explorer.berylbit.io',
        name: 'berylbit-explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'fd6e72d2-3d6f-57f9-bb06-8ad4a7f0ee26',
    name: 'Genesis Coin',
    chain: 'Genesis',
    chainId: 9100,
    rpc: ['https://genesis-gn.com', 'wss://genesis-gn.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GN Coin',
      symbol: 'GNC'
    },
    explorers: null
  },
  {
    id: '5ae076fb-aa0e-5857-99c3-00f13e8cecac',
    name: 'Rinia Testnet Old',
    chain: 'FIRE',
    chainId: 9170,
    rpc: [],
    icon: 'rinia',
    nativeCurrency: {
      decimals: 18,
      name: 'Firechain',
      symbol: 'FIRE'
    },
    explorers: []
  },
  {
    id: '472a3cf0-a56e-5cb8-8ca4-4a4223084e30',
    name: 'Dogcoin Testnet',
    chain: 'DOGS',
    chainId: 9339,
    rpc: ['https://testnet-rpc.dogcoin.me'],
    icon: 'dogs',
    nativeCurrency: {
      decimals: 18,
      name: 'Dogcoin',
      symbol: 'DOGS'
    },
    explorers: [
      {
        url: 'https://testnet.dogcoin.network',
        name: 'Dogcoin',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8a468d87-7cb0-5a1c-86ef-b4982e32cabd',
    name: 'Rangers Protocol Testnet Robin',
    chain: 'Rangers',
    chainId: 9527,
    rpc: ['https://robin.rangersprotocol.com/api/jsonrpc'],
    icon: 'rangers',
    nativeCurrency: {
      decimals: 18,
      name: 'Rangers Protocol Gas',
      symbol: 'tRPG'
    },
    explorers: [
      {
        url: 'https://robin-rangersscan.rangersprotocol.com',
        name: 'rangersscan-robin',
        standard: 'none'
      }
    ]
  },
  {
    id: '2514a53a-6043-57d6-9032-1d0008671eb3',
    name: 'QEasyWeb3 Testnet',
    chain: 'QET',
    chainId: 9528,
    rpc: ['https://qeasyweb3.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QET',
      symbol: 'QET'
    },
    explorers: [
      {
        url: 'https://www.qeasyweb3.com',
        name: 'QEasyWeb3 Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3efe5d7c-5692-5e4a-8d67-19667a1a3490',
    name: 'Oort MainnetDev',
    chain: 'MainnetDev',
    chainId: 9700,
    rpc: [],
    icon: 'ccn',
    nativeCurrency: {
      decimals: 18,
      name: 'Oort',
      symbol: 'CCN'
    },
    explorers: null
  },
  {
    id: 'ed130d02-8047-582f-be79-0a3df9ff81cd',
    name: 'Boba BNB Testnet',
    chain: 'Boba BNB Testnet',
    chainId: 9728,
    rpc: [
      'https://testnet.bnb.boba.network',
      'wss://wss.testnet.bnb.boba.network',
      'https://replica.testnet.bnb.boba.network',
      'wss://replica-wss.testnet.bnb.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.testnet.bnb.boba.network',
        name: 'Boba BNB Testnet block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '4a48118c-9807-5ff7-b843-4197ee1abfb5',
    name: 'MainnetZ Testnet',
    chain: 'NetZ',
    chainId: 9768,
    rpc: ['https://testnet-rpc.mainnetz.io'],
    icon: 'mainnetzTestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'MainnetZ',
      symbol: 'NetZ'
    },
    explorers: [
      {
        url: 'https://testnet.mainnetz.io',
        name: 'MainnetZ',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6f76d0d3-4ed7-5358-990d-93a5012b9859',
    name: 'myOwn Testnet',
    chain: 'myOwn',
    chainId: 9999,
    rpc: ['https://geth.dev.bccloud.net'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MYN',
      symbol: 'MYN'
    },
    explorers: null
  },
  {
    id: '7fc5ed91-c59d-538a-a6f7-efbd0e17585b',
    name: 'Smart Bitcoin Cash',
    chain: 'smartBCH',
    chainId: 10000,
    rpc: [
      'https://smartbch.greyh.at',
      'https://rpc-mainnet.smartbch.org',
      'https://smartbch.fountainhead.cash/mainnet',
      'https://smartbch.devops.cash/mainnet'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Bitcoin Cash',
      symbol: 'BCH'
    },
    explorers: null
  },
  {
    id: 'f32d57fa-266e-592e-ae5d-3d91f52820bb',
    name: 'Smart Bitcoin Cash Testnet',
    chain: 'smartBCHTest',
    chainId: 10001,
    rpc: [
      'https://rpc-testnet.smartbch.org',
      'https://smartbch.devops.cash/testnet'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Bitcoin Cash Test Token',
      symbol: 'BCHT'
    },
    explorers: null
  },
  {
    id: 'feadba0a-9a19-51dd-9647-683e789c9e9b',
    name: 'Gon Chain',
    chain: 'GonChain',
    chainId: 10024,
    rpc: [
      'https://node1.testnet.gaiaopen.network',
      'http://database1.gaiaopen.network'
    ],
    icon: 'gonchain',
    nativeCurrency: {
      decimals: 18,
      name: 'Gon Token',
      symbol: 'GT'
    },
    explorers: [
      {
        url: 'https://gonscan.com',
        name: 'Gon Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '2dc4914f-2bf4-559e-8f7c-970f989b4391',
    name: 'SJATSH',
    chain: 'ETH',
    chainId: 10086,
    rpc: ['http://geth.free.idcfengye.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: '95ea5802-403f-52f9-ab98-4d69a0db5afe',
    name: 'Blockchain Genesis Mainnet',
    chain: 'GEN',
    chainId: 10101,
    rpc: [
      'https://eu.mainnet.xixoio.com',
      'https://us.mainnet.xixoio.com',
      'https://asia.mainnet.xixoio.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GEN',
      symbol: 'GEN'
    },
    explorers: null
  },
  {
    id: 'e909fb63-6acf-565c-8e0b-d5edc2a0005f',
    name: 'Chiado Testnet',
    chain: 'CHI',
    chainId: 10200,
    rpc: [
      'https://rpc.chiadochain.net',
      'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado'
    ],
    icon: 'gnosis',
    nativeCurrency: {
      decimals: 18,
      name: 'Chiado xDAI',
      symbol: 'xDAI'
    },
    explorers: [
      {
        url: 'https://blockscout.chiadochain.net',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '9f108350-6956-5b14-8e3a-6e94fcdafcde',
    name: '0XTade',
    chain: '0XTade Chain',
    chainId: 10248,
    rpc: ['https://node.0xtchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: '0XT',
      symbol: '0XT'
    },
    explorers: [
      {
        url: 'https://www.0xtscan.com',
        name: '0xtrade Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '3b2c8dea-daf8-56a2-8d6f-88147275a356',
    name: 'Numbers Mainnet',
    chain: 'NUM',
    chainId: 10507,
    rpc: ['https://mainnetrpc.num.network'],
    icon: 'num',
    nativeCurrency: {
      decimals: 18,
      name: 'NUM Token',
      symbol: 'NUM'
    },
    explorers: [
      {
        url: 'https://mainnet.num.network',
        name: 'ethernal',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '56dec5d8-ca68-52df-96e0-1da84406306a',
    name: 'Numbers Testnet',
    chain: 'NUM',
    chainId: 10508,
    rpc: ['https://testnetrpc.num.network'],
    icon: 'num',
    nativeCurrency: {
      decimals: 18,
      name: 'NUM Token',
      symbol: 'NUM'
    },
    explorers: [
      {
        url: 'https://testnet.num.network',
        name: 'ethernal',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c8b6aaf5-4986-5c71-a667-4c6aaef61e04',
    name: 'CryptoCoinPay',
    chain: 'CCP',
    chainId: 10823,
    rpc: [
      'http://node106.cryptocoinpay.info:8545',
      'ws://node106.cryptocoinpay.info:8546'
    ],
    icon: 'ccp',
    nativeCurrency: {
      decimals: 18,
      name: 'CryptoCoinPay',
      symbol: 'CCP'
    },
    explorers: [
      {
        url: 'https://cryptocoinpay.info',
        name: 'CCP Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e5030655-87ac-5dac-b82c-0ff18aa0ea15',
    name: 'Quadrans Blockchain',
    chain: 'QDC',
    chainId: 10946,
    rpc: [
      'https://rpc.quadrans.io',
      'https://rpcna.quadrans.io',
      'https://rpceu.quadrans.io'
    ],
    icon: 'quadrans',
    nativeCurrency: {
      decimals: 18,
      name: 'Quadrans Coin',
      symbol: 'QDC'
    },
    explorers: [
      {
        url: 'https://explorer.quadrans.io',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ee183549-072a-507d-b326-5ecd05100aa2',
    name: 'Quadrans Blockchain Testnet',
    chain: 'tQDC',
    chainId: 10947,
    rpc: ['https://rpctest.quadrans.io', 'https://rpctest2.quadrans.io'],
    icon: 'quadrans',
    nativeCurrency: {
      decimals: 18,
      name: 'Quadrans Testnet Coin',
      symbol: 'tQDC'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.quadrans.io',
        name: 'explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'da645e05-7137-596b-b041-c14356cb0866',
    name: 'Astra',
    chain: 'Astra',
    chainId: 11110,
    rpc: ['https://rpc.astranaut.io', 'https://rpc1.astranaut.io'],
    icon: 'astra',
    nativeCurrency: {
      decimals: 18,
      name: 'Astra',
      symbol: 'ASA'
    },
    explorers: [
      {
        url: 'https://explorer.astranaut.io',
        name: 'Astra EVM Explorer (Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://ping.astranaut.io/astra',
        name: 'Astra PingPub Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e58aa295-5b5e-5442-a86f-29d7b9062b81',
    name: 'WAGMI',
    chain: 'WAGMI',
    chainId: 11111,
    rpc: ['https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc'],
    icon: 'wagmi',
    nativeCurrency: {
      decimals: 18,
      name: 'WAGMI',
      symbol: 'WGM'
    },
    explorers: [
      {
        url: 'https://subnets-test.avax.network/wagmi',
        name: 'Avalanche Subnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0fac662c-952a-5e72-b272-7ed5e31aeadd',
    name: 'Astra Testnet',
    chain: 'Astra',
    chainId: 11115,
    rpc: ['https://rpc.astranaut.dev'],
    icon: 'astra',
    nativeCurrency: {
      decimals: 18,
      name: 'test-Astra',
      symbol: 'tASA'
    },
    explorers: [
      {
        url: 'https://explorer.astranaut.dev',
        name: 'Astra EVM Explorer',
        standard: 'EIP3091'
      },
      {
        url: 'https://ping.astranaut.dev/astra',
        name: 'Astra PingPub Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '313cb33c-4749-5b01-ac00-a91eeab505c0',
    name: 'HashBit Mainnet',
    chain: 'HBIT',
    chainId: 11119,
    rpc: ['https://mainnet-rpc.hashbit.org', 'https://rpc.hashbit.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'HashBit Native Token',
      symbol: 'HBIT'
    },
    explorers: [
      {
        url: 'https://explorer.hashbit.org',
        name: 'hashbitscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '06030abd-9885-5069-a908-4ec7788264a5',
    name: 'Haqq Network',
    chain: 'Haqq',
    chainId: 11235,
    rpc: ['https://rpc.eth.haqq.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Islamic Coin',
      symbol: 'ISLM'
    },
    explorers: [
      {
        url: 'https://explorer.haqq.network',
        name: 'Mainnet HAQQ Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd8aed609-e672-5ea4-b94d-4bd818bb3381',
    name: 'Shyft Testnet',
    chain: 'SHYFTT',
    chainId: 11437,
    rpc: [],
    icon: 'shyft',
    nativeCurrency: {
      decimals: 18,
      name: 'Shyft Test Token',
      symbol: 'SHYFTT'
    },
    explorers: [
      {
        url: 'https://bx.testnet.shyft.network',
        name: 'Shyft Testnet BX',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ed8a9492-ef42-5cbf-b926-d68846bbc04b',
    name: 'Sardis Testnet',
    chain: 'SRDX',
    chainId: 11612,
    rpc: ['https://testnet-rpc.sardisnetwork.com'],
    icon: 'sardisTestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Sardis',
      symbol: 'SRDX'
    },
    explorers: [
      {
        url: 'https://testnet.sardisnetwork.com',
        name: 'Sardis',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '33f3fee6-03b8-5bbf-9fb6-cd2ea05adf79',
    name: 'SanR Chain',
    chain: 'SanRChain',
    chainId: 11888,
    rpc: ['https://sanrchain-node.santiment.net'],
    icon: 'sanrchain',
    nativeCurrency: {
      decimals: 18,
      name: 'nSAN',
      symbol: 'nSAN'
    },
    explorers: [
      {
        url: 'https://sanrchain-explorer.santiment.net',
        name: 'SanR Chain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b7fb2dd7-5134-5655-8ffe-82d28dbf90d3',
    name: 'Singularity ZERO Testnet',
    chain: 'ZERO',
    chainId: 12051,
    rpc: ['https://betaenv.singularity.gold:18545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ZERO',
      symbol: 'tZERO'
    },
    explorers: [
      {
        url: 'https://betaenv.singularity.gold:18002',
        name: 'zeroscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b65f5f5b-d4a1-5485-985c-3a204d3b5a02',
    name: 'Singularity ZERO Mainnet',
    chain: 'ZERO',
    chainId: 12052,
    rpc: ['https://zerorpc.singularity.gold'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ZERO',
      symbol: 'ZERO'
    },
    explorers: [
      {
        url: 'https://zeroscan.singularity.gold',
        name: 'zeroscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bb0cb439-4a8c-5b3d-b2cd-050a39af5c26',
    name: 'Fibonacci Mainnet',
    chain: 'FIBO',
    chainId: 12306,
    rpc: ['https://node1.fibo-api.asia'],
    icon: 'fibonacci',
    nativeCurrency: {
      decimals: 18,
      name: 'FIBONACCI UTILITY TOKEN',
      symbol: 'FIBO'
    },
    explorers: [
      {
        url: 'https://scan.fibochain.org',
        name: 'fiboscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bb390df5-9dca-52a1-a079-02da2a26bfe9',
    name: 'BLG Testnet',
    chain: 'BLG',
    chainId: 12321,
    rpc: ['https://rpc.blgchain.com'],
    icon: 'blg',
    nativeCurrency: {
      decimals: 18,
      name: 'Blg',
      symbol: 'BLG'
    },
    explorers: null
  },
  {
    id: '00d0d2af-88c0-5549-8a98-ab7c82a337e6',
    name: 'Step Testnet',
    chain: 'STEP',
    chainId: 12345,
    rpc: ['https://rpc.testnet.step.network'],
    icon: 'step',
    nativeCurrency: {
      decimals: 18,
      name: 'FITFI',
      symbol: 'FITFI'
    },
    explorers: [
      {
        url: 'https://testnet.stepscan.io',
        name: 'StepScan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd14d4d5e-a09c-55eb-94cf-8420af5c7bcc',
    name: 'SPS',
    chain: 'SPS',
    chainId: 13000,
    rpc: ['https://rpc.ssquad.games'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ECG',
      symbol: 'ECG'
    },
    explorers: [
      {
        url: 'http://spsscan.ssquad.games',
        name: 'SPS Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8711d731-27e1-53aa-a3dc-0212c6680e5d',
    name: 'Credit Smartchain Mainnet',
    chain: 'CREDIT',
    chainId: 13308,
    rpc: ['https://mainnet-rpc.cscscan.io'],
    icon: 'credit',
    nativeCurrency: {
      decimals: 18,
      name: 'Credit',
      symbol: 'CREDIT'
    },
    explorers: [
      {
        url: 'https://explorer.cscscan.io',
        name: 'CSC Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '59f33cd3-eb67-5837-9bc6-ba8acfbaec07',
    name: 'Phoenix Mainnet',
    chain: 'Phoenix',
    chainId: 13381,
    rpc: ['https://rpc.phoenixplorer.com/'],
    icon: 'phoenix',
    nativeCurrency: {
      decimals: 18,
      name: 'Phoenix',
      symbol: 'PHX'
    },
    explorers: [
      {
        url: 'https://phoenixplorer.com',
        name: 'phoenixplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '850830ed-0f57-51f0-97d9-109f4697e3d4',
    name: 'Susono',
    chain: 'SUS',
    chainId: 13812,
    rpc: [
      'https://gateway.opn.network/node/ext/bc/2VsZe5DstWw2bfgdx3YbjKcMsJnNDjni95sZorBEdk9L9Qr9Fr/rpc'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Susono',
      symbol: 'OPN'
    },
    explorers: [
      {
        url: 'http://explorer.opn.network',
        name: 'Susono',
        standard: 'none'
      }
    ]
  },
  {
    id: '5a469307-d923-5384-9ea0-59e0109e214c',
    name: 'SPS Testnet',
    chain: 'SPS-Testnet',
    chainId: 14000,
    rpc: ['https://www.3sps.net'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ECG',
      symbol: 'ECG'
    },
    explorers: [
      {
        url: 'https://explorer.3sps.net',
        name: 'SPS Test Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '34c4c6c1-db3a-5981-9017-2417da94ac7d',
    name: 'Trust EVM Testnet',
    chain: 'Trust EVM Testnet',
    chainId: 15555,
    rpc: ['https://api.testnet-dev.trust.one'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Trust EVM',
      symbol: 'EVM'
    },
    explorers: [
      {
        url: 'https://trustscan.one',
        name: 'Trust EVM Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a850b28f-5d8e-5a8e-91db-32048ffbedec',
    name: 'MetaDot Mainnet',
    chain: 'MTT',
    chainId: 16000,
    rpc: ['https://mainnet.metadot.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MetaDot Token',
      symbol: 'MTT'
    },
    explorers: null
  },
  {
    id: '53d6acd5-4f0c-5334-a7ac-941370dcc27e',
    name: 'MetaDot Testnet',
    chain: 'MTTTest',
    chainId: 16001,
    rpc: ['https://testnet.metadot.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MetaDot Token TestNet',
      symbol: 'MTTest'
    },
    explorers: null
  },
  {
    id: '16057937-9aba-55c4-a962-f5b90823da37',
    name: 'AirDAO Mainnet',
    chain: 'ambnet',
    chainId: 16718,
    rpc: ['https://network.ambrosus.io'],
    icon: 'airdao',
    nativeCurrency: {
      decimals: 18,
      name: 'Amber',
      symbol: 'AMB'
    },
    explorers: [
      {
        url: 'https://airdao.io/explorer',
        name: 'AirDAO Network Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '030a1495-2b1f-5c03-bdd0-406b8e9c86a3',
    name: 'IVAR Chain Testnet',
    chain: 'IVAR',
    chainId: 16888,
    rpc: ['https://testnet-rpc.ivarex.com'],
    icon: 'ivar',
    nativeCurrency: {
      decimals: 18,
      name: 'tIvar',
      symbol: 'tIVAR'
    },
    explorers: [
      {
        url: 'https://testnet.ivarscan.com',
        name: 'ivarscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1e70e544-7583-5932-a980-bfcec0cef46d',
    name: 'Frontier of Dreams Testnet',
    chain: 'Game Network',
    chainId: 18000,
    rpc: ['https://rpc.fod.games/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ZKST',
      symbol: 'ZKST'
    },
    explorers: [
      {
        url: 'https://explorer.fod.games',
        name: 'Game Network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bb0286b8-22c9-587f-8e50-7de284d088f3',
    name: 'Proof Of Memes',
    chain: 'POM',
    chainId: 18159,
    rpc: [
      'https://mainnet-rpc.memescan.io',
      'https://mainnet-rpc2.memescan.io',
      'https://mainnet-rpc3.memescan.io',
      'https://mainnet-rpc4.memescan.io'
    ],
    icon: 'pom',
    nativeCurrency: {
      decimals: 18,
      name: 'Proof Of Memes',
      symbol: 'POM'
    },
    explorers: [
      {
        url: 'https://memescan.io',
        name: 'explorer-proofofmemes',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd9c32f74-25c0-5526-8218-bf388a00623d',
    name: 'HOME Verse Mainnet',
    chain: 'HOME Verse',
    chainId: 19011,
    rpc: ['https://rpc.mainnet.oasys.homeverse.games/'],
    icon: 'home_verse',
    nativeCurrency: {
      decimals: 18,
      name: 'OAS',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer.oasys.homeverse.games',
        name: 'HOME Verse Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e8e156dc-7608-5fe8-84ce-ee2b9a89ef85',
    name: 'BTCIX Network',
    chain: 'BTCIX',
    chainId: 19845,
    rpc: ['https://seed.btcix.org/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BTCIX Network',
      symbol: 'BTCIX'
    },
    explorers: [
      {
        url: 'https://btcixscan.com',
        name: 'BTCIXScan',
        standard: 'none'
      }
    ]
  },
  {
    id: '1c765ab0-4dd3-5e0d-81f6-0a0ead37464a',
    name: 'Callisto Testnet',
    chain: 'CLO',
    chainId: 20729,
    rpc: ['https://testnet-rpc.callisto.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Callisto',
      symbol: 'CLO'
    },
    explorers: null
  },
  {
    id: 'fbfa51c0-2fb5-5cde-8cc4-9b69f2ec2b04',
    name: 'P12 Chain',
    chain: 'P12',
    chainId: 20736,
    rpc: ['https://rpc-chain.p12.games'],
    icon: 'p12',
    nativeCurrency: {
      decimals: 18,
      name: 'Hooked P2',
      symbol: 'hP2'
    },
    explorers: [
      {
        url: 'https://explorer.p12.games',
        name: 'P12 Chain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '86e25abc-4ab4-5d79-9ec5-91528f28b117',
    name: 'CENNZnet Azalea',
    chain: 'CENNZnet',
    chainId: 21337,
    rpc: ['https://cennznet.unfrastructure.io/public'],
    icon: 'cennz',
    nativeCurrency: {
      decimals: 18,
      name: 'CPAY',
      symbol: 'CPAY'
    },
    explorers: [
      {
        url: 'https://uncoverexplorer.com',
        name: 'UNcover',
        standard: 'none'
      }
    ]
  },
  {
    id: '8132b614-7f1d-5975-8891-0c83f40d2784',
    name: 'omChain Mainnet',
    chain: 'OML',
    chainId: 21816,
    rpc: ['https://seed.omchain.io'],
    icon: 'omlira',
    nativeCurrency: {
      decimals: 18,
      name: 'omChain',
      symbol: 'OMC'
    },
    explorers: [
      {
        url: 'https://explorer.omchain.io',
        name: 'omChain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '314a26fa-0e94-5749-9746-58fbe36290cc',
    name: 'Taycan',
    chain: 'Taycan',
    chainId: 22023,
    rpc: ['https://taycan-rpc.hupayx.io:8545'],
    icon: 'shuffle',
    nativeCurrency: {
      decimals: 18,
      name: 'shuffle',
      symbol: 'SFL'
    },
    explorers: [
      {
        url: 'https://taycan-evmscan.hupayx.io',
        name: 'Taycan Explorer(Blockscout)',
        standard: 'none'
      },
      {
        url: 'https://taycan-cosmoscan.hupayx.io',
        name: 'Taycan Cosmos Explorer(BigDipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a15b7f4b-eb2b-5c20-ae8c-20f6e5f042b0',
    name: 'AirDAO Testnet',
    chain: 'ambnet-test',
    chainId: 22040,
    rpc: ['https://network.ambrosus-test.io'],
    icon: 'airdao',
    nativeCurrency: {
      decimals: 18,
      name: 'Amber',
      symbol: 'AMB'
    },
    explorers: [
      {
        url: 'https://testnet.airdao.io/explorer',
        name: 'AirDAO Network Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '7531e59b-80a9-5906-a1f4-eec18113f515',
    name: 'MAP Mainnet',
    chain: 'MAP',
    chainId: 22776,
    rpc: ['https://rpc.maplabs.io'],
    icon: 'map',
    nativeCurrency: {
      decimals: 18,
      name: 'MAP',
      symbol: 'MAP'
    },
    explorers: [
      {
        url: 'https://mapscan.io',
        name: 'mapscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a9923d16-ad3c-5378-aa52-e730681f17c8',
    name: 'Opside Testnet',
    chain: 'Opside',
    chainId: 23118,
    rpc: ['https://testrpc.opside.network'],
    icon: 'opside',
    nativeCurrency: {
      decimals: 18,
      name: 'IDE',
      symbol: 'IDE'
    },
    explorers: [
      {
        url: 'https://opside.info',
        name: 'opsideInfo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2fbcb797-ad10-50b7-9c63-3aa5143ea1a0',
    name: 'Oasis Sapphire',
    chain: 'Sapphire',
    chainId: 23294,
    rpc: ['https://sapphire.oasis.io', 'wss://sapphire.oasis.io/ws'],
    icon: 'oasis',
    nativeCurrency: {
      decimals: 18,
      name: 'Sapphire Rose',
      symbol: 'ROSE'
    },
    explorers: [
      {
        url: 'https://explorer.sapphire.oasis.io',
        name: 'Oasis Sapphire Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '34f38feb-4be5-5fe8-90d4-e780304bf6cc',
    name: 'Oasis Sapphire Testnet',
    chain: 'Sapphire',
    chainId: 23295,
    rpc: [
      'https://testnet.sapphire.oasis.dev',
      'wss://testnet.sapphire.oasis.dev/ws'
    ],
    icon: 'oasis',
    nativeCurrency: {
      decimals: 18,
      name: 'Sapphire Test Rose',
      symbol: 'TEST'
    },
    explorers: [
      {
        url: 'https://testnet.explorer.sapphire.oasis.dev',
        name: 'Oasis Sapphire Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b2a27486-fdee-50a7-9ebc-b735ccbfa16c',
    name: 'Webchain',
    chain: 'WEB',
    chainId: 24484,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Webchain Ether',
      symbol: 'WEB'
    },
    explorers: null
  },
  {
    id: '72016536-6a4c-559b-8638-cf3c7cc38613',
    name: 'MintMe.com Coin',
    chain: 'MINTME',
    chainId: 24734,
    rpc: ['https://node1.mintme.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MintMe.com Coin',
      symbol: 'MINTME'
    },
    explorers: null
  },
  {
    id: '5eca0ebf-5ebc-59ea-80cf-80adee9fc041',
    name: 'Hammer Chain Mainnet',
    chain: 'HammerChain',
    chainId: 25888,
    rpc: ['https://www.hammerchain.io/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GOLDT',
      symbol: 'GOLDT'
    },
    explorers: [
      {
        url: 'https://www.hammerchain.io',
        name: 'Hammer Chain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '42ea97c0-8194-527c-8660-06f31925694d',
    name: 'Bitkub Chain Testnet',
    chain: 'BKC',
    chainId: 25925,
    rpc: [
      'https://rpc-testnet.bitkubchain.io',
      'wss://wss-testnet.bitkubchain.io'
    ],
    icon: 'bkc',
    nativeCurrency: {
      decimals: 18,
      name: 'Bitkub Coin',
      symbol: 'tKUB'
    },
    explorers: [
      {
        url: 'https://testnet.bkcscan.com',
        name: 'bkcscan-testnet',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e4fc5521-7666-53aa-a8ad-a776f0debdda',
    name: 'Hertz Network Mainnet',
    chain: 'HTZ',
    chainId: 26600,
    rpc: ['https://mainnet-rpc.hertzscan.com'],
    icon: 'hertz-network',
    nativeCurrency: {
      decimals: 18,
      name: 'Hertz',
      symbol: 'HTZ'
    },
    explorers: [
      {
        url: 'https://hertzscan.com',
        name: 'Hertz Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7a6e47eb-bb05-5bd4-8182-1c0f4d64f7f0',
    name: 'OasisChain Mainnet',
    chain: 'OasisChain',
    chainId: 26863,
    rpc: [
      'https://rpc1.oasischain.io',
      'https://rpc2.oasischain.io',
      'https://rpc3.oasischain.io'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'OAC',
      symbol: 'OAC'
    },
    explorers: [
      {
        url: 'https://scan.oasischain.io',
        name: 'OasisChain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '75a62fc7-9164-54de-9004-519bd7191b16',
    name: 'Optimism Bedrock (Goerli Alpha Testnet)',
    chain: 'ETH',
    chainId: 28528,
    rpc: [
      'https://alpha-1-replica-0.bedrock-goerli.optimism.io',
      'https://alpha-1-replica-1.bedrock-goerli.optimism.io',
      'https://alpha-1-replica-2.bedrock-goerli.optimism.io',
      'https://alpha-1-replica-2.bedrock-goerli.optimism.io'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://blockscout.com/optimism/bedrock-alpha',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '45159139-7e4f-5a93-a43d-d96c930e42cd',
    name: 'Piece testnet',
    chain: 'PieceNetwork',
    chainId: 30067,
    rpc: ['https://testnet-rpc0.piecenetwork.com'],
    icon: 'piecechain',
    nativeCurrency: {
      decimals: 18,
      name: 'ECE',
      symbol: 'ECE'
    },
    explorers: [
      {
        url: 'https://testnet-scan.piecenetwork.com',
        name: 'Piece Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '781b054a-9fe9-5116-b7be-2861e65ee31c',
    name: 'Ethersocial Network',
    chain: 'ESN',
    chainId: 31102,
    rpc: ['https://api.esn.gonspool.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ethersocial Network Ether',
      symbol: 'ESN'
    },
    explorers: null
  },
  {
    id: 'f9e9a714-08d1-5763-95f0-0b15f03a0e94',
    name: 'CloudTx Mainnet',
    chain: 'CLD',
    chainId: 31223,
    rpc: ['https://mainnet-rpc.cloudtx.finance'],
    icon: 'cloudtx',
    nativeCurrency: {
      decimals: 18,
      name: 'CloudTx',
      symbol: 'CLD'
    },
    explorers: [
      {
        url: 'https://scan.cloudtx.finance',
        name: 'cloudtxscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'eaa51a5b-8b03-54a1-8d16-5e2de37df5d7',
    name: 'CloudTx Testnet',
    chain: 'CloudTx',
    chainId: 31224,
    rpc: ['https://testnet-rpc.cloudtx.finance'],
    icon: 'cloudtx',
    nativeCurrency: {
      decimals: 18,
      name: 'CloudTx',
      symbol: 'CLD'
    },
    explorers: [
      {
        url: 'https://explorer.cloudtx.finance',
        name: 'cloudtxexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f895af97-b80e-523d-802e-c81dc5fbc2e1',
    name: 'GoChain Testnet',
    chain: 'GO',
    chainId: 31337,
    rpc: ['https://testnet-rpc.gochain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GoChain Coin',
      symbol: 'GO'
    },
    explorers: [
      {
        url: 'https://testnet-explorer.gochain.io',
        name: 'GoChain Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1ad29014-d847-56df-afdf-44b4b9444407',
    name: 'Filecoin - Wallaby testnet',
    chain: 'FIL',
    chainId: 31415,
    rpc: ['https://wallaby.node.glif.io/rpc/v1'],
    icon: 'filecoin',
    nativeCurrency: {
      decimals: 18,
      name: 'testnet filecoin',
      symbol: 'tFIL'
    },
    explorers: []
  },
  {
    id: 'aac764e9-46dd-5037-bdf2-99f1f1fb7118',
    name: 'Bitgert Mainnet',
    chain: 'Brise',
    chainId: 32520,
    rpc: [
      'https://rpc.icecreamswap.com',
      'https://mainnet-rpc.brisescan.com',
      'https://chainrpc.com',
      'https://serverrpc.com'
    ],
    icon: 'brise',
    nativeCurrency: {
      decimals: 18,
      name: 'Bitrise Token',
      symbol: 'Brise'
    },
    explorers: [
      {
        url: 'https://brisescan.com',
        name: 'Brise Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5c8843d9-1fd8-5efe-b5e6-c6a2f12511be',
    name: 'Fusion Mainnet',
    chain: 'FSN',
    chainId: 32659,
    rpc: ['https://mainnet.fusionnetwork.io', 'wss://mainnet.fusionnetwork.io'],
    icon: 'fusion',
    nativeCurrency: {
      decimals: 18,
      name: 'Fusion',
      symbol: 'FSN'
    },
    explorers: [
      {
        url: 'https://fsnscan.com',
        name: 'fsnscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7ac81efe-70e1-56d7-b589-98c440116711',
    name: 'Aves Mainnet',
    chain: 'AVS',
    chainId: 33333,
    rpc: ['https://rpc.avescoin.io'],
    icon: 'aves',
    nativeCurrency: {
      decimals: 18,
      name: 'Aves',
      symbol: 'AVS'
    },
    explorers: [
      {
        url: 'https://avescan.io',
        name: 'avescan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c30a11a0-e8ab-5273-b067-ce3d88b10160',
    name: 'J2O Taro',
    chain: 'TARO',
    chainId: 35011,
    rpc: ['https://rpc.j2o.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TARO Coin',
      symbol: 'taro'
    },
    explorers: [
      {
        url: 'https://exp.j2o.io',
        name: 'J2O Taro Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c7b539bc-8371-59a9-8547-bd366e8edf64',
    name: 'Q Mainnet',
    chain: 'Q',
    chainId: 35441,
    rpc: ['https://rpc.q.org'],
    icon: 'q',
    nativeCurrency: {
      decimals: 18,
      name: 'Q token',
      symbol: 'Q'
    },
    explorers: [
      {
        url: 'https://explorer.q.org',
        name: 'Q explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2313ab27-960f-50d9-9560-cc61f03ca768',
    name: 'Q Testnet',
    chain: 'Q',
    chainId: 35443,
    rpc: ['https://rpc.qtestnet.org'],
    icon: 'q',
    nativeCurrency: {
      decimals: 18,
      name: 'Q token',
      symbol: 'Q'
    },
    explorers: [
      {
        url: 'https://explorer.qtestnet.org',
        name: 'Q explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bd0c3851-fb89-5290-b67d-0b73f1fd4f62',
    name: 'Energi Mainnet',
    chain: 'NRG',
    chainId: 39797,
    rpc: ['https://nodeapi.energi.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Energi',
      symbol: 'NRG'
    },
    explorers: null
  },
  {
    id: 'b1e90214-6200-515b-8071-3738640c0f06',
    name: 'OHO Mainnet',
    chain: 'OHO',
    chainId: 39815,
    rpc: ['https://mainnet.oho.ai'],
    icon: 'oho',
    nativeCurrency: {
      decimals: 18,
      name: 'OHO',
      symbol: 'OHO'
    },
    explorers: [
      {
        url: 'https://ohoscan.com',
        name: 'ohoscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '053ba58d-29d2-564f-a26c-e2b4ac3b5083',
    name: 'Opulent-X BETA',
    chain: 'Opulent-X',
    chainId: 41500,
    rpc: ['https://connect.opulent-x.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Oxyn Gas',
      symbol: 'OXYN'
    },
    explorers: [
      {
        url: 'https://explorer.opulent-x.com',
        name: 'Opulent-X BETA Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '77c01e2b-1a85-5cd2-8f35-0b782f0175a4',
    name: 'pegglecoin',
    chain: '42069',
    chainId: 42069,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'pegglecoin',
      symbol: 'peggle'
    },
    explorers: null
  },
  {
    id: '062ba7f7-a73f-50b1-b896-f2eecfc13998',
    name: 'Arbitrum One',
    chain: 'ETH',
    chainId: 42161,
    rpc: [
      'https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}',
      'https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
      'https://arb1.arbitrum.io/rpc'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://arbiscan.io',
        name: 'Arbiscan',
        standard: 'EIP3091'
      },
      {
        url: 'https://explorer.arbitrum.io',
        name: 'Arbitrum Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '63b650f6-e5f8-5331-b6a9-c25ba0e08bf5',
    name: 'Arbitrum Nova',
    chain: 'ETH',
    chainId: 42170,
    rpc: ['https://nova.arbitrum.io/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://nova-explorer.arbitrum.io',
        name: 'Arbitrum Nova Chain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '920d6638-ee65-5100-ad52-fcd4d57f2d7d',
    name: 'Celo Mainnet',
    chain: 'CELO',
    chainId: 42220,
    rpc: ['https://forno.celo.org', 'wss://forno.celo.org/ws'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CELO',
      symbol: 'CELO'
    },
    explorers: [
      {
        url: 'https://celoscan.io',
        name: 'Celoscan',
        standard: 'EIP3091'
      },
      {
        url: 'https://explorer.celo.org',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'cef2cffd-e59e-5b8b-87f5-fce51b3dc0ae',
    name: 'Oasis Emerald Testnet',
    chain: 'Emerald',
    chainId: 42261,
    rpc: [
      'https://testnet.emerald.oasis.dev/',
      'wss://testnet.emerald.oasis.dev/ws'
    ],
    icon: 'oasis',
    nativeCurrency: {
      decimals: 18,
      name: 'Emerald Rose',
      symbol: 'ROSE'
    },
    explorers: [
      {
        url: 'https://testnet.explorer.emerald.oasis.dev',
        name: 'Oasis Emerald Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6b3f3279-5b1a-5185-8695-235a10191bad',
    name: 'Oasis Emerald',
    chain: 'Emerald',
    chainId: 42262,
    rpc: ['https://emerald.oasis.dev', 'wss://emerald.oasis.dev/ws'],
    icon: 'oasis',
    nativeCurrency: {
      decimals: 18,
      name: 'Emerald Rose',
      symbol: 'ROSE'
    },
    explorers: [
      {
        url: 'https://explorer.emerald.oasis.dev',
        name: 'Oasis Emerald Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6625c72c-f354-5508-929e-dbd089b04805',
    name: 'Athereum',
    chain: 'ATH',
    chainId: 43110,
    rpc: ['https://ava.network:21015/ext/evm/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Athereum Ether',
      symbol: 'ATH'
    },
    explorers: null
  },
  {
    id: 'bcf0920e-9dfc-5343-a9a7-009a5c213e2a',
    name: 'Avalanche Fuji Testnet',
    chain: 'AVAX',
    chainId: 43113,
    rpc: ['https://api.avax-test.network/ext/bc/C/rpc'],
    icon: 'avax',
    nativeCurrency: {
      decimals: 18,
      name: 'Avalanche',
      symbol: 'AVAX'
    },
    explorers: [
      {
        url: 'https://testnet.snowtrace.io',
        name: 'snowtrace',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'deacf15e-5def-541e-9bd3-3d420b59a14f',
    name: 'Avalanche C-Chain',
    chain: 'AVAX',
    chainId: 43114,
    rpc: [
      'https://api.avax.network/ext/bc/C/rpc',
      'https://avalanche-c-chain.publicnode.com'
    ],
    icon: 'avax',
    nativeCurrency: {
      decimals: 18,
      name: 'Avalanche',
      symbol: 'AVAX'
    },
    explorers: [
      {
        url: 'https://snowtrace.io',
        name: 'snowtrace',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0b0e9e14-99af-54a1-a614-12bf7795c0c5',
    name: 'Boba Avax',
    chain: 'Boba Avax',
    chainId: 43288,
    rpc: [
      'https://avax.boba.network',
      'wss://wss.avax.boba.network',
      'https://replica.avax.boba.network',
      'wss://replica-wss.avax.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.avax.boba.network',
        name: 'Boba Avax Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '9b657d1a-f6f8-5619-ad56-4f0cd64e35b7',
    name: 'Frenchain',
    chain: 'fren',
    chainId: 44444,
    rpc: ['https://rpc-02.frenscan.io'],
    icon: 'fren',
    nativeCurrency: {
      decimals: 18,
      name: 'FREN',
      symbol: 'FREN'
    },
    explorers: [
      {
        url: 'https://frenscan.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a1379513-f5ae-573e-b97f-97d3de97c209',
    name: 'Celo Alfajores Testnet',
    chain: 'CELO',
    chainId: 44787,
    rpc: [
      'https://alfajores-forno.celo-testnet.org',
      'wss://alfajores-forno.celo-testnet.org/ws'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CELO',
      symbol: 'CELO'
    },
    explorers: [
      {
        url: 'https://celoscan.io',
        name: 'Celoscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3ac955b1-a0a5-50e6-a0d1-549eb39f206e',
    name: 'Autobahn Network',
    chain: 'TXL',
    chainId: 45000,
    rpc: ['https://rpc.autobahn.network'],
    icon: 'autobahn',
    nativeCurrency: {
      decimals: 18,
      name: 'TXL',
      symbol: 'TXL'
    },
    explorers: [
      {
        url: 'https://explorer.autobahn.network',
        name: 'autobahn explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '46e3d708-e3f9-58e0-bde1-c4bd4d8bc33e',
    name: 'Fusion Testnet',
    chain: 'FSN',
    chainId: 46688,
    rpc: ['https://testnet.fusionnetwork.io', 'wss://testnet.fusionnetwork.io'],
    icon: 'fusion',
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet Fusion',
      symbol: 'T-FSN'
    },
    explorers: [
      {
        url: 'https://testnet.fsnscan.com',
        name: 'fsnscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e550b93d-c058-5cd0-a941-00a00077c4fc',
    name: 'REI Network',
    chain: 'REI',
    chainId: 47805,
    rpc: ['https://rpc.rei.network', 'wss://rpc.rei.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'REI',
      symbol: 'REI'
    },
    explorers: [
      {
        url: 'https://scan.rei.network',
        name: 'rei-scan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'aa039c0a-2c99-5cb8-a78e-d494a72294a4',
    name: 'Floripa',
    chain: 'Wireshape',
    chainId: 49049,
    rpc: ['https://rpc-floripa.wireshape.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'WIRE',
      symbol: 'WIRE'
    },
    explorers: [
      {
        url: 'https://floripa-explorer.wireshape.org',
        name: 'Wire Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'aa3357e5-e822-513f-a5eb-ea757bb664a7',
    name: 'Bifrost Testnet',
    chain: 'BFC',
    chainId: 49088,
    rpc: [
      'https://public-01.testnet.thebifrost.io/rpc',
      'https://public-02.testnet.thebifrost.io/rpc'
    ],
    icon: 'bifrost',
    nativeCurrency: {
      decimals: 18,
      name: 'Bifrost',
      symbol: 'BFC'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.thebifrost.io',
        name: 'explorer-thebifrost',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f3a482d7-eb3a-54c1-b23d-7c64e0b3ebb5',
    name: 'Energi Testnet',
    chain: 'NRG',
    chainId: 49797,
    rpc: ['https://nodeapi.test.energi.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Energi',
      symbol: 'NRG'
    },
    explorers: null
  },
  {
    id: '4a358c90-2299-559d-8e11-34752d9c50d4',
    name: 'Liveplex OracleEVM',
    chain: 'Liveplex OracleEVM Network',
    chainId: 50001,
    rpc: ['https://rpc.oracle.liveplex.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: []
  },
  {
    id: 'cca04e85-987b-55cb-86bb-915dae7b7b6f',
    name: 'GTON Testnet',
    chain: 'GTON Testnet',
    chainId: 50021,
    rpc: ['https://testnet.gton.network/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'GCD',
      symbol: 'GCD'
    },
    explorers: [
      {
        url: 'https://explorer.testnet.gton.network',
        name: 'GTON Testnet Network Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '53e3413b-fceb-56e8-ae3e-766c3be6ce30',
    name: 'Sardis Mainnet',
    chain: 'SRDX',
    chainId: 51712,
    rpc: ['https://mainnet-rpc.sardisnetwork.com'],
    icon: 'sardis',
    nativeCurrency: {
      decimals: 18,
      name: 'Sardis',
      symbol: 'SRDX'
    },
    explorers: [
      {
        url: 'https://contract-mainnet.sardisnetwork.com',
        name: 'Sardis',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd6a4e0fb-daf4-56b2-8d60-183abba6ce1a',
    name: 'DFK Chain',
    chain: 'DFK',
    chainId: 53935,
    rpc: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
    icon: 'dfk',
    nativeCurrency: {
      decimals: 18,
      name: 'Jewel',
      symbol: 'JEWEL'
    },
    explorers: [
      {
        url: 'https://explorer.dfkchain.com',
        name: 'ethernal',
        standard: 'none'
      }
    ]
  },
  {
    id: '666824d7-8450-59ff-a1b2-482c11611335',
    name: 'Haqq Chain Testnet',
    chain: 'TestEdge2',
    chainId: 54211,
    rpc: ['https://rpc.eth.testedge2.haqq.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Islamic Coin',
      symbol: 'ISLMT'
    },
    explorers: [
      {
        url: 'https://explorer.testedge2.haqq.network',
        name: 'TestEdge HAQQ Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7dd09b81-d80a-536a-bc17-0c64a942ed1d',
    name: 'REI Chain Mainnet',
    chain: 'REI',
    chainId: 55555,
    rpc: ['https://rei-rpc.moonrhythm.io'],
    icon: 'reichain',
    nativeCurrency: {
      decimals: 18,
      name: 'Rei',
      symbol: 'REI'
    },
    explorers: [
      {
        url: 'https://reiscan.com',
        name: 'reiscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '9da61260-c70c-5079-88c9-5556e1c2f3a1',
    name: 'REI Chain Testnet',
    chain: 'REI',
    chainId: 55556,
    rpc: ['https://rei-testnet-rpc.moonrhythm.io'],
    icon: 'reichain',
    nativeCurrency: {
      decimals: 18,
      name: 'tRei',
      symbol: 'tREI'
    },
    explorers: [
      {
        url: 'https://testnet.reiscan.com',
        name: 'reiscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8ed81695-9dea-5cf3-ac34-028d90c0e1f6',
    name: 'Boba BNB Mainnet',
    chain: 'Boba BNB Mainnet',
    chainId: 56288,
    rpc: [
      'https://bnb.boba.network',
      'wss://wss.bnb.boba.network',
      'https://replica.bnb.boba.network',
      'wss://replica-wss.bnb.boba.network'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.bnb.boba.network',
        name: 'Boba BNB block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd4f376e8-7c53-518d-9585-22ce906ba85c',
    name: 'Thinkium Testnet Chain 0',
    chain: 'Thinkium',
    chainId: 60000,
    rpc: ['https://test.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://test0.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8992b92c-4d90-5b6e-b7b1-5f4679f248d6',
    name: 'Thinkium Testnet Chain 1',
    chain: 'Thinkium',
    chainId: 60001,
    rpc: ['https://test1.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://test1.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd6187079-8339-5b5b-bca1-f14e35aff68b',
    name: 'Thinkium Testnet Chain 2',
    chain: 'Thinkium',
    chainId: 60002,
    rpc: ['https://test2.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://test2.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '8978e6d3-fb62-5667-a7c0-b9391e9a24a0',
    name: 'Thinkium Testnet Chain 103',
    chain: 'Thinkium',
    chainId: 60103,
    rpc: ['https://test103.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://test103.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '16ddba4f-7f56-54ac-98ed-a33b6aa6e512',
    name: 'Etica Mainnet',
    chain: 'Etica Protocol (ETI/EGAZ)',
    chainId: 61803,
    rpc: [
      'https://eticamainnet.eticascan.org',
      'https://eticamainnet.eticaprotocol.org'
    ],
    icon: 'etica',
    nativeCurrency: {
      decimals: 18,
      name: 'EGAZ',
      symbol: 'EGAZ'
    },
    explorers: [
      {
        url: 'https://eticascan.org',
        name: 'eticascan',
        standard: 'EIP3091'
      },
      {
        url: 'http://explorer.etica-stats.org',
        name: 'eticastats',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5d835cbd-38ef-5cda-889c-38ff09ec051e',
    name: 'DoKEN Super Chain Mainnet',
    chain: 'DoKEN Super Chain',
    chainId: 61916,
    rpc: [
      'https://sgrpc.doken.dev',
      'https://nyrpc.doken.dev',
      'https://ukrpc.doken.dev'
    ],
    icon: 'doken',
    nativeCurrency: {
      decimals: 18,
      name: 'DoKEN',
      symbol: 'DKN'
    },
    explorers: [
      {
        url: 'https://explore.doken.dev',
        name: 'DSC Scan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '703d6c63-6143-5922-b49a-cb8110e19b1f',
    name: 'Celo Baklava Testnet',
    chain: 'CELO',
    chainId: 62320,
    rpc: ['https://baklava-forno.celo-testnet.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'CELO',
      symbol: 'CELO'
    },
    explorers: null
  },
  {
    id: '000a802a-8283-5376-9837-c73edf60469d',
    name: 'MultiVAC Mainnet',
    chain: 'MultiVAC',
    chainId: 62621,
    rpc: ['https://rpc.mtv.ac', 'https://rpc-eu.mtv.ac'],
    icon: 'multivac',
    nativeCurrency: {
      decimals: 18,
      name: 'MultiVAC',
      symbol: 'MTV'
    },
    explorers: [
      {
        url: 'https://e.mtv.ac',
        name: 'MultiVAC Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b8c8e047-5743-5093-a06a-1a6d5478cf64',
    name: 'eCredits Mainnet',
    chain: 'ECS',
    chainId: 63000,
    rpc: ['https://rpc.ecredits.com'],
    icon: 'ecredits',
    nativeCurrency: {
      decimals: 18,
      name: 'eCredits',
      symbol: 'ECS'
    },
    explorers: [
      {
        url: 'https://explorer.ecredits.com',
        name: 'eCredits MainNet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f85a04e5-d45a-51e5-838f-b2a19f096fa3',
    name: 'eCredits Testnet',
    chain: 'ECS',
    chainId: 63001,
    rpc: ['https://rpc.tst.ecredits.com'],
    icon: 'ecredits',
    nativeCurrency: {
      decimals: 18,
      name: 'eCredits',
      symbol: 'ECS'
    },
    explorers: [
      {
        url: 'https://explorer.tst.ecredits.com',
        name: 'eCredits TestNet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '36e62206-2550-55ac-ba47-bbf7220f9df9',
    name: 'SiriusNet',
    chain: 'SIN',
    chainId: 67390,
    rpc: [
      'https://u0tnafcv6j:o2T045sxuCNXL878RDQLp5__Zj-es2cvdjtgkl4etn0@u0v7kwtvtg-u0wj114sve-rpc.us0-aws.kaleido.io/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'MCD',
      symbol: 'MCD'
    },
    explorers: [
      {
        url: 'https://siriusnet.tryethernal.com',
        name: 'siriusnetscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd2915ade-f576-56ae-95b8-a83391b9a34f',
    name: 'Condrieu',
    chain: 'ETH',
    chainId: 69420,
    rpc: ['https://rpc.condrieu.ethdevops.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Condrieu Testnet Ether',
      symbol: 'CTE'
    },
    explorers: [
      {
        url: 'https://explorer.condrieu.ethdevops.io',
        name: 'Condrieu explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'caba1a19-21b9-5db2-bc94-5cf33c7e87fd',
    name: 'Thinkium Mainnet Chain 0',
    chain: 'Thinkium',
    chainId: 70000,
    rpc: ['https://proxy.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://chain0.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'caae0f70-eccc-55f8-9d60-6a6aeb1df35c',
    name: 'Thinkium Mainnet Chain 1',
    chain: 'Thinkium',
    chainId: 70001,
    rpc: ['https://proxy1.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://chain1.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a57e7e4c-083d-5640-ae4f-2fab2bae07fa',
    name: 'Thinkium Mainnet Chain 2',
    chain: 'Thinkium',
    chainId: 70002,
    rpc: ['https://proxy2.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://chain2.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '18a7256c-8895-5f80-b483-39b95448bb0c',
    name: 'Thinkium Mainnet Chain 103',
    chain: 'Thinkium',
    chainId: 70103,
    rpc: ['https://proxy103.thinkiumrpc.net/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TKM',
      symbol: 'TKM'
    },
    explorers: [
      {
        url: 'https://chain103.thinkiumscan.net',
        name: 'thinkiumscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b1e342fe-3e16-5912-87c5-47695e225165',
    name: 'Polyjuice Testnet',
    chain: 'CKB',
    chainId: 71393,
    rpc: [
      'https://godwoken-testnet-web3-rpc.ckbapp.dev',
      'ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws'
    ],
    icon: 'polyjuice',
    nativeCurrency: {
      decimals: 8,
      name: 'CKB',
      symbol: 'CKB'
    },
    explorers: null
  },
  {
    id: 'f197467f-d6ef-5562-b3f9-baecc939f976',
    name: 'Godwoken Testnet v1',
    chain: 'GWT',
    chainId: 71401,
    rpc: [
      'https://godwoken-testnet-v1.ckbapp.dev',
      'https://v1.testnet.godwoken.io/rpc'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'pCKB',
      symbol: 'pCKB'
    },
    explorers: [
      {
        url: 'https://gw-testnet-explorer.nervosdao.community',
        name: 'GWScout Explorer',
        standard: 'none'
      },
      {
        url: 'https://v1.testnet.gwscan.com',
        name: 'GWScan Block Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ae6cd4c1-e44f-5b53-9473-2a762e54f8db',
    name: 'Godwoken Mainnet',
    chain: 'GWT',
    chainId: 71402,
    rpc: ['https://v1.mainnet.godwoken.io/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'pCKB',
      symbol: 'pCKB'
    },
    explorers: [
      {
        url: 'https://gw-mainnet-explorer.nervosdao.community',
        name: 'GWScout Explorer',
        standard: 'none'
      },
      {
        url: 'https://v1.gwscan.com',
        name: 'GWScan Block Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'd984d15c-fe1d-53ea-a3ad-3069cbfde105',
    name: 'Energy Web Volta Testnet',
    chain: 'Volta',
    chainId: 73799,
    rpc: [
      'https://volta-rpc.energyweb.org',
      'wss://volta-rpc.energyweb.org/ws'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Volta Token',
      symbol: 'VT'
    },
    explorers: null
  },
  {
    id: '35f08cf4-15d6-5b51-ae2f-b30591ec3d81',
    name: 'Mixin Virtual Machine',
    chain: 'MVM',
    chainId: 73927,
    rpc: ['https://geth.mvm.dev'],
    icon: 'mvm',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://scan.mvm.dev',
        name: 'mvmscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7fda8c8d-c8a9-5c5b-b41d-1b8db6a0381c',
    name: 'ResinCoin Mainnet',
    chain: 'RESIN',
    chainId: 75000,
    rpc: [],
    icon: 'resincoin',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'RESIN'
    },
    explorers: [
      {
        url: 'https://explorer.resincoin.dev',
        name: 'ResinScan',
        standard: 'none'
      }
    ]
  },
  {
    id: '9c2b415d-7927-57e7-a9b2-7e9df84ea63f',
    name: 'Vention Smart Chain Mainnet',
    chain: 'VSC',
    chainId: 77612,
    rpc: ['https://mainnet-rpc.vention.network'],
    icon: 'vention',
    nativeCurrency: {
      decimals: 18,
      name: 'VNT',
      symbol: 'VNT'
    },
    explorers: [
      {
        url: 'https://ventionscan.io',
        name: 'ventionscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5a5fdf9b-e3e6-5df3-9fc6-63ed046a2d6a',
    name: 'Firenze test network',
    chain: 'ETH',
    chainId: 78110,
    rpc: ['https://ethnode.primusmoney.com/firenze'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Firenze Ether',
      symbol: 'FIN'
    },
    explorers: null
  },
  {
    id: '23651dc9-4e2f-55d3-a391-23f0b6188fa0',
    name: 'Gold Smart Chain Testnet',
    chain: 'STAND',
    chainId: 79879,
    rpc: ['https://rpc-testnet.goldsmartchain.com'],
    icon: 'standTestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Standard in Gold',
      symbol: 'STAND'
    },
    explorers: [
      {
        url: 'https://testnet.goldsmartchain.com',
        name: 'Gold Smart Chain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '58771d74-77bd-53ed-9d71-47234ef386a6',
    name: 'Mumbai',
    chain: 'Polygon',
    chainId: 80001,
    rpc: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-mumbai.maticvigil.com',
      'https://matic-testnet-archive-rpc.bwarelabs.com'
    ],
    icon: 'polygon',
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC'
    },
    explorers: [
      {
        url: 'https://mumbai.polygonscan.com',
        name: 'polygonscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2cf72f45-430c-5bc7-9169-f7eacc512afa',
    name: 'Base Goerli Testnet',
    chain: 'ETH',
    chainId: 84531,
    rpc: ['https://goerli.base.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Goerli Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://goerli.basescan.org',
        name: 'basescan',
        standard: 'none'
      },
      {
        url: 'https://base-goerli.blockscout.com',
        name: 'basescout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'deb0d500-2446-5201-b86f-39822e58cc7d',
    name: 'Chiliz Scoville Testnet',
    chain: 'CHZ',
    chainId: 88880,
    rpc: ['https://scoville-rpc.chiliz.com'],
    icon: 'chiliz',
    nativeCurrency: {
      decimals: 18,
      name: 'Chiliz',
      symbol: 'CHZ'
    },
    explorers: [
      {
        url: 'https://scoville-explorer.chiliz.com',
        name: 'scoville-explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e977e12c-cd91-5ea0-885b-3463c449ed79',
    name: 'IVAR Chain Mainnet',
    chain: 'IVAR',
    chainId: 88888,
    rpc: ['https://mainnet-rpc.ivarex.com'],
    icon: 'ivar',
    nativeCurrency: {
      decimals: 18,
      name: 'Ivar',
      symbol: 'IVAR'
    },
    explorers: [
      {
        url: 'https://ivarscan.com',
        name: 'ivarscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'cd551daa-d28f-508f-889a-ad4f40fc9801',
    name: 'Beverly Hills',
    chain: 'ETH',
    chainId: 90210,
    rpc: ['https://rpc.beverlyhills.ethdevops.io:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Beverly Hills Testnet Ether',
      symbol: 'BVE'
    },
    explorers: [
      {
        url: 'https://explorer.beverlyhills.ethdevops.io',
        name: 'Beverly Hills explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '26f3113b-d3f1-51ab-a409-a80a70464e77',
    name: 'Lambda Testnet',
    chain: 'Lambda',
    chainId: 92001,
    rpc: ['https://evm.lambda.top/'],
    icon: 'lambda',
    nativeCurrency: {
      decimals: 18,
      name: 'test-Lamb',
      symbol: 'LAMB'
    },
    explorers: [
      {
        url: 'https://explorer.lambda.top',
        name: 'Lambda EVM Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '84c2a306-1f34-58ab-8927-a9d16e6ed29a',
    name: 'Boba BNB Mainnet Old',
    chain: 'Boba BNB Mainnet',
    chainId: 97288,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Boba Token',
      symbol: 'BOBA'
    },
    explorers: [
      {
        url: 'https://blockexplorer.bnb.boba.network',
        name: 'Boba BNB block explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '8e38dda6-5365-5f1b-a4a7-3d4e42c8f331',
    name: 'UB Smart Chain(testnet)',
    chain: 'USC',
    chainId: 99998,
    rpc: ['https://testnet.rpc.uschain.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'UBC',
      symbol: 'UBC'
    },
    explorers: null
  },
  {
    id: '94d6547f-93e7-5655-bb5e-70f18464daf3',
    name: 'UB Smart Chain',
    chain: 'USC',
    chainId: 99999,
    rpc: ['https://rpc.uschain.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'UBC',
      symbol: 'UBC'
    },
    explorers: null
  },
  {
    id: 'f713158b-90c5-5342-a02a-6289fdbfb9c9',
    name: 'QuarkChain Mainnet Root',
    chain: 'QuarkChain',
    chainId: 100000,
    rpc: ['http://jrpc.mainnet.quarkchain.io:38391'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: null
  },
  {
    id: '05916c13-e7ff-5e80-95fd-ef9d778335f3',
    name: 'QuarkChain Mainnet Shard 0',
    chain: 'QuarkChain',
    chainId: 100001,
    rpc: [
      'https://mainnet-s0-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39000'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/0',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bbc9f852-100e-5022-a371-2ab30e77ffe8',
    name: 'QuarkChain Mainnet Shard 1',
    chain: 'QuarkChain',
    chainId: 100002,
    rpc: [
      'https://mainnet-s1-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39001'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/1',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7422f8d4-f443-5074-8afc-207d6e564de7',
    name: 'QuarkChain Mainnet Shard 2',
    chain: 'QuarkChain',
    chainId: 100003,
    rpc: [
      'https://mainnet-s2-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39002'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/2',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e8886e5d-d40f-52d9-89b3-f73961769244',
    name: 'QuarkChain Mainnet Shard 3',
    chain: 'QuarkChain',
    chainId: 100004,
    rpc: [
      'https://mainnet-s3-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39003'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/3',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0fc4f90a-8c0b-5029-86a1-d98ca7e66b72',
    name: 'QuarkChain Mainnet Shard 4',
    chain: 'QuarkChain',
    chainId: 100005,
    rpc: [
      'https://mainnet-s4-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39004'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/4',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '134db05e-7532-58a0-bd63-86070e767c45',
    name: 'QuarkChain Mainnet Shard 5',
    chain: 'QuarkChain',
    chainId: 100006,
    rpc: [
      'https://mainnet-s5-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39005'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/5',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6fd58406-644b-5d0a-a44a-bd627544c987',
    name: 'QuarkChain Mainnet Shard 6',
    chain: 'QuarkChain',
    chainId: 100007,
    rpc: [
      'https://mainnet-s6-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39006'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/6',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '60010ecd-fb48-54db-a9ee-bf969427b448',
    name: 'QuarkChain Mainnet Shard 7',
    chain: 'QuarkChain',
    chainId: 100008,
    rpc: [
      'https://mainnet-s7-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39007'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://mainnet.quarkchain.io/7',
        name: 'quarkchain-mainnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '7e0a35d9-883e-52cb-98f8-0248af326c74',
    name: 'VeChain',
    chain: 'VeChain',
    chainId: 100009,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'VeChain',
      symbol: 'VET'
    },
    explorers: [
      {
        url: 'https://vechainstats.com',
        name: 'VeChain Stats',
        standard: 'none'
      },
      {
        url: 'https://explore.vechain.org',
        name: 'VeChain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c3088bf2-09df-5547-af60-a76409605028',
    name: 'VeChain Testnet',
    chain: 'VeChain',
    chainId: 100010,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'VeChain',
      symbol: 'VET'
    },
    explorers: [
      {
        url: 'https://explore-testnet.vechain.org',
        name: 'VeChain Explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '1411eda8-41e5-5f40-ae0a-1c66ab5ff54d',
    name: 'Deprecated Chiado Testnet',
    chain: 'CHI1',
    chainId: 100100,
    rpc: ['https://rpc-chiado.gnosistestnet.com'],
    icon: 'gnosis',
    nativeCurrency: {
      decimals: 18,
      name: 'Chiado xDAI',
      symbol: 'xDAI'
    },
    explorers: [
      {
        url: 'https://blockscout-chiado.gnosistestnet.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '39f4f0f7-d461-5e34-bf33-ad0c57614b74',
    name: 'Soverun Testnet',
    chain: 'SVRN',
    chainId: 101010,
    rpc: ['https://testnet-rpc.soverun.com'],
    icon: 'soverunTestnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Soverun',
      symbol: 'SVRN'
    },
    explorers: [
      {
        url: 'https://testnet.soverun.com',
        name: 'Soverun',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '105b15e8-c9d9-5e91-96f0-827838e37099',
    name: 'Crystaleum',
    chain: 'crystal',
    chainId: 103090,
    rpc: ['https://evm.cryptocurrencydevs.org', 'https://rpc.crystaleum.org'],
    icon: 'crystal',
    nativeCurrency: {
      decimals: 18,
      name: 'CRFI',
      symbol: '◈'
    },
    explorers: [
      {
        url: 'https://scan.crystaleum.org',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1765c87f-f718-5d58-a41d-485c2d7e2fb3',
    name: 'BROChain Mainnet',
    chain: 'BRO',
    chainId: 108801,
    rpc: [
      'https://rpc.brochain.org',
      'http://rpc.brochain.org',
      'https://rpc.brochain.org/mainnet',
      'http://rpc.brochain.org/mainnet'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Brother',
      symbol: 'BRO'
    },
    explorers: [
      {
        url: 'https://explorer.brochain.org',
        name: 'BROChain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd8e72830-821a-56ac-8acb-cbe41699e60f',
    name: 'QuarkChain Devnet Root',
    chain: 'QuarkChain',
    chainId: 110000,
    rpc: ['http://jrpc.devnet.quarkchain.io:38391'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: null
  },
  {
    id: 'e8b44c15-4bc1-5e52-a25c-4d6120a4ad11',
    name: 'QuarkChain Devnet Shard 0',
    chain: 'QuarkChain',
    chainId: 110001,
    rpc: [
      'https://devnet-s0-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39900'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/0',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a24edc7b-dbab-5427-b7b3-61886afd6766',
    name: 'QuarkChain Devnet Shard 1',
    chain: 'QuarkChain',
    chainId: 110002,
    rpc: [
      'https://devnet-s1-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39901'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/1',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '5b9f24fa-bd01-5264-9691-1cebfe7fbd0c',
    name: 'QuarkChain Devnet Shard 2',
    chain: 'QuarkChain',
    chainId: 110003,
    rpc: [
      'https://devnet-s2-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39902'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/2',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '661dbccd-2454-5267-9ae3-b0ea6097561a',
    name: 'QuarkChain Devnet Shard 3',
    chain: 'QuarkChain',
    chainId: 110004,
    rpc: [
      'https://devnet-s3-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39903'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/3',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b6495ea6-3f69-5136-9604-bea030fae80c',
    name: 'QuarkChain Devnet Shard 4',
    chain: 'QuarkChain',
    chainId: 110005,
    rpc: [
      'https://devnet-s4-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39904'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/4',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c835415d-e687-5c9a-8b58-15dd18ccf1fb',
    name: 'QuarkChain Devnet Shard 5',
    chain: 'QuarkChain',
    chainId: 110006,
    rpc: [
      'https://devnet-s5-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39905'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/5',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4330ddd8-d094-5538-8693-1949f9964725',
    name: 'QuarkChain Devnet Shard 6',
    chain: 'QuarkChain',
    chainId: 110007,
    rpc: [
      'https://devnet-s6-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39906'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/6',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '980046a1-694a-59a0-ae67-a9a09a0c8e56',
    name: 'QuarkChain Devnet Shard 7',
    chain: 'QuarkChain',
    chainId: 110008,
    rpc: [
      'https://devnet-s7-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39907'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'QKC',
      symbol: 'QKC'
    },
    explorers: [
      {
        url: 'https://devnet.quarkchain.io/7',
        name: 'quarkchain-devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f7aa045f-e1e9-5432-ac5d-bc70e5cb0bef',
    name: 'Siberium Network',
    chain: 'SBR',
    chainId: 111111,
    rpc: ['https://rpc.main.siberium.net', 'https://rpc.main.siberium.net.ru'],
    icon: 'siberium',
    nativeCurrency: {
      decimals: 18,
      name: 'Siberium',
      symbol: 'SBR'
    },
    explorers: [
      {
        url: 'https://explorer.main.siberium.net',
        name: 'Siberium Mainnet Explorer - blockscout - 1',
        standard: 'EIP3091'
      },
      {
        url: 'https://explorer.main.siberium.net.ru',
        name: 'Siberium Mainnet Explorer - blockscout - 2',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '78ea4e41-9c40-5cc8-b093-791d5c4144c6',
    name: 'ETND Chain Mainnets',
    chain: 'ETND',
    chainId: 131419,
    rpc: ['https://rpc.node1.etnd.pro/'],
    icon: 'ETND',
    nativeCurrency: {
      decimals: 18,
      name: 'ETND',
      symbol: 'ETND'
    },
    explorers: [
      {
        url: 'https://scan.etnd.pro',
        name: 'etndscan',
        standard: 'none'
      }
    ]
  },
  {
    id: '2980e978-36db-5177-b94f-373b52a7041a',
    name: 'Condor Test Network',
    chain: 'CONDOR',
    chainId: 188881,
    rpc: ['https://testnet.condor.systems/rpc'],
    icon: 'condor',
    nativeCurrency: {
      decimals: 18,
      name: 'Condor Native Token',
      symbol: 'CONDOR'
    },
    explorers: [
      {
        url: 'https://explorer.condor.systems',
        name: 'CondorScan',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ac5ff272-1a1a-5e19-a212-0469c8ccf201',
    name: 'Milkomeda C1 Testnet',
    chain: 'milkTAda',
    chainId: 200101,
    rpc: [
      'https://rpc-devnet-cardano-evm.c1.milkomeda.com',
      'wss://rpc-devnet-cardano-evm.c1.milkomeda.com'
    ],
    icon: 'milkomeda',
    nativeCurrency: {
      decimals: 18,
      name: 'milkTAda',
      symbol: 'mTAda'
    },
    explorers: [
      {
        url: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '5e67a0a1-5e1a-5d15-97c0-2c26143fb136',
    name: 'Milkomeda A1 Testnet',
    chain: 'milkTAlgo',
    chainId: 200202,
    rpc: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com'],
    icon: 'milkomeda',
    nativeCurrency: {
      decimals: 18,
      name: 'milkTAlgo',
      symbol: 'mTAlgo'
    },
    explorers: [
      {
        url: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '6cb91a59-1bf5-5a97-83d2-2984202c77cd',
    name: 'Akroma',
    chain: 'AKA',
    chainId: 200625,
    rpc: ['https://remote.akroma.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Akroma Ether',
      symbol: 'AKA'
    },
    explorers: null
  },
  {
    id: '987ee449-ba99-5ee8-9519-9da26faf902c',
    name: 'Alaya Mainnet',
    chain: 'Alaya',
    chainId: 201018,
    rpc: [
      'https://openapi.alaya.network/rpc',
      'wss://openapi.alaya.network/ws'
    ],
    icon: 'alaya',
    nativeCurrency: {
      decimals: 18,
      name: 'ATP',
      symbol: 'atp'
    },
    explorers: [
      {
        url: 'https://scan.alaya.network',
        name: 'alaya explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'c3253d99-944d-5872-9bb4-04ee114f906c',
    name: 'Alaya Dev Testnet',
    chain: 'Alaya',
    chainId: 201030,
    rpc: [
      'https://devnetopenapi.alaya.network/rpc',
      'wss://devnetopenapi.alaya.network/ws'
    ],
    icon: 'alaya',
    nativeCurrency: {
      decimals: 18,
      name: 'ATP',
      symbol: 'atp'
    },
    explorers: [
      {
        url: 'https://devnetscan.alaya.network',
        name: 'alaya explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e8b6f85a-5d52-578f-8346-266016533aed',
    name: 'Mythical Chain',
    chain: 'MYTH',
    chainId: 201804,
    rpc: ['https://chain-rpc.mythicalgames.com'],
    icon: 'mythical',
    nativeCurrency: {
      decimals: 18,
      name: 'Mythos',
      symbol: 'MYTH'
    },
    explorers: [
      {
        url: 'https://explorer.mythicalgames.com',
        name: 'Mythical Chain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c4ea37fe-340f-58c9-a4c5-9947ca92b9d9',
    name: 'Decimal Smart Chain Testnet',
    chain: 'tDSC',
    chainId: 202020,
    rpc: ['https://testnet-val.decimalchain.com/web3'],
    icon: 'dsc',
    nativeCurrency: {
      decimals: 18,
      name: 'Decimal',
      symbol: 'tDEL'
    },
    explorers: [
      {
        url: 'https://testnet.explorer.decimalchain.com',
        name: 'DSC Explorer Testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '13daaa09-9862-52c8-96ad-0f6f2767ed12',
    name: 'Jellie',
    chain: 'ETH',
    chainId: 202624,
    rpc: ['https://jellie-rpc.twala.io/', 'wss://jellie-rpc-wss.twala.io/'],
    icon: 'twala',
    nativeCurrency: {
      decimals: 18,
      name: 'Twala Coin',
      symbol: 'TWL'
    },
    explorers: [
      {
        url: 'https://jellie.twala.io',
        name: 'Jellie Blockchain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4f8635ff-6987-5c38-af86-cd55c93899bd',
    name: 'PlatON Mainnet',
    chain: 'PlatON',
    chainId: 210425,
    rpc: [
      'https://openapi2.platon.network/rpc',
      'wss://openapi2.platon.network/ws'
    ],
    icon: 'platon',
    nativeCurrency: {
      decimals: 18,
      name: 'LAT',
      symbol: 'lat'
    },
    explorers: [
      {
        url: 'https://scan.platon.network',
        name: 'PlatON explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '45ca8da6-d8a5-5553-9c00-bb01c4ab82ed',
    name: 'Mas Mainnet',
    chain: 'MAS',
    chainId: 220315,
    rpc: ['http://node.masnet.ai:8545'],
    icon: 'mas',
    nativeCurrency: {
      decimals: 18,
      name: 'Master Bank',
      symbol: 'MAS'
    },
    explorers: [
      {
        url: 'https://explorer.masnet.ai',
        name: 'explorer masnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4fc028e3-85ec-551b-8603-8057a4054386',
    name: 'Haymo Testnet',
    chain: 'tHYM',
    chainId: 234666,
    rpc: ['https://testnet1.haymo.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'HAYMO',
      symbol: 'HYM'
    },
    explorers: null
  },
  {
    id: 'c19ef106-43a6-5cf6-b6d5-1bb4105b352b',
    name: 'ARTIS sigma1',
    chain: 'ARTIS',
    chainId: 246529,
    rpc: ['https://rpc.sigma1.artis.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ARTIS sigma1 Ether',
      symbol: 'ATS'
    },
    explorers: null
  },
  {
    id: '81a21d22-0b4c-5bee-b634-81848fd9047a',
    name: 'ARTIS Testnet tau1',
    chain: 'ARTIS',
    chainId: 246785,
    rpc: ['https://rpc.tau1.artis.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ARTIS tau1 Ether',
      symbol: 'tATS'
    },
    explorers: null
  },
  {
    id: 'db21fcee-c1c2-5be9-9cab-e3699b791a07',
    name: 'Saakuru Testnet',
    chain: 'Saakuru',
    chainId: 247253,
    rpc: ['https://rpc-testnet.saakuru.network'],
    icon: 'saakuru',
    nativeCurrency: {
      decimals: 18,
      name: 'OAS',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.saakuru.network',
        name: 'saakuru-explorer-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'fba16014-cdc5-5736-adb8-a1d5c1352639',
    name: 'CMP-Mainnet',
    chain: 'CMP',
    chainId: 256256,
    rpc: [
      'https://mainnet.block.caduceus.foundation',
      'wss://mainnet.block.caduceus.foundation'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Caduceus Token',
      symbol: 'CMP'
    },
    explorers: [
      {
        url: 'https://mainnet.scan.caduceus.foundation',
        name: 'Mainnet Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '8f37004f-2acf-5a40-ba48-4bc1707220a2',
    name: 'Gear Zero Network Testnet',
    chain: 'GearZero',
    chainId: 266256,
    rpc: ['https://gzn-test.linksme.info'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Gear Zero Network Native Token',
      symbol: 'GZN'
    },
    explorers: []
  },
  {
    id: '45288182-7d83-5281-a0ec-2f6b3da629bb',
    name: 'Social Smart Chain Mainnet',
    chain: 'SoChain',
    chainId: 281121,
    rpc: ['https://socialsmartchain.digitalnext.business'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'SoChain',
      symbol: '$OC'
    },
    explorers: []
  },
  {
    id: 'f42319a1-9b72-5951-aa99-6584b44b0702',
    name: 'Filecoin - Calibration testnet',
    chain: 'FIL',
    chainId: 314159,
    rpc: ['https://api.calibration.node.glif.io/rpc/v1'],
    icon: 'filecoin',
    nativeCurrency: {
      decimals: 18,
      name: 'testnet filecoin',
      symbol: 'tFIL'
    },
    explorers: [
      {
        url: 'https://calibration.filscan.io',
        name: 'Filscan - Calibration',
        standard: 'none'
      },
      {
        url: 'https://calibration.filscout.com/en',
        name: 'Filscout - Calibration',
        standard: 'none'
      }
    ]
  },
  {
    id: '6e9217d5-3942-5185-8b16-b39e67d9b4b0',
    name: 'Oone Chain Testnet',
    chain: 'OONE',
    chainId: 333777,
    rpc: ['https://blockchain-test.adigium.world'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Oone',
      symbol: 'tOONE'
    },
    explorers: [
      {
        url: 'https://explorer-test.adigium.world',
        name: 'expedition',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b0c6e23b-6ee2-57fa-8c0f-62630aa8bbab',
    name: 'Polis Testnet',
    chain: 'Sparta',
    chainId: 333888,
    rpc: ['https://sparta-rpc.polis.tech'],
    icon: 'polis',
    nativeCurrency: {
      decimals: 18,
      name: 'tPolis',
      symbol: 'tPOLIS'
    },
    explorers: null
  },
  {
    id: '9688e590-5581-5553-b1eb-68843766da8f',
    name: 'Polis Mainnet',
    chain: 'Olympus',
    chainId: 333999,
    rpc: ['https://rpc.polis.tech'],
    icon: 'polis',
    nativeCurrency: {
      decimals: 18,
      name: 'Polis',
      symbol: 'POLIS'
    },
    explorers: null
  },
  {
    id: '6712bcb2-fa2b-5652-ac20-5927054e6add',
    name: 'Metal C-Chain',
    chain: 'Metal',
    chainId: 381931,
    rpc: ['https://api.metalblockchain.org/ext/bc/C/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Metal',
      symbol: 'METAL'
    },
    explorers: [
      {
        url: 'https://metalscan.io',
        name: 'metalscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '9afc110a-ba4a-591a-a2f4-f394faee4752',
    name: 'Metal Tahoe C-Chain',
    chain: 'Metal',
    chainId: 381932,
    rpc: ['https://tahoe.metalblockchain.org/ext/bc/C/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Metal',
      symbol: 'METAL'
    },
    explorers: [
      {
        url: 'https://tahoe.metalscan.io',
        name: 'metalscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1ba66c21-e008-54f5-8c51-154ee42ea49a',
    name: 'Tipboxcoin Mainnet',
    chain: 'TPBX',
    chainId: 404040,
    rpc: ['https://mainnet-rpc.tipboxcoin.net'],
    icon: 'tipboxcoinIcon',
    nativeCurrency: {
      decimals: 18,
      name: 'Tipboxcoin',
      symbol: 'TPBX'
    },
    explorers: [
      {
        url: 'https://tipboxcoin.net',
        name: 'Tipboxcoin',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '25822590-7843-55eb-ab97-e1f3e1acda31',
    name: 'Kekchain',
    chain: 'kek',
    chainId: 420420,
    rpc: ['https://mainnet.kekchain.com'],
    icon: 'kek',
    nativeCurrency: {
      decimals: 18,
      name: 'KEK',
      symbol: 'KEK'
    },
    explorers: [
      {
        url: 'https://mainnet-explorer.kekchain.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '351f7279-9f06-545d-8876-3abca7dcc4aa',
    name: 'Kekchain (kektest)',
    chain: 'kek',
    chainId: 420666,
    rpc: ['https://testnet.kekchain.com'],
    icon: 'kek',
    nativeCurrency: {
      decimals: 18,
      name: 'tKEK',
      symbol: 'tKEK'
    },
    explorers: [
      {
        url: 'https://testnet-explorer.kekchain.com',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e62cd7dc-43d7-5bfe-9b7a-39dffb18c357',
    name: 'Arbitrum Rinkeby',
    chain: 'ETH',
    chainId: 421611,
    rpc: ['https://rinkeby.arbitrum.io/rpc'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Arbitrum Rinkeby Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://testnet.arbiscan.io',
        name: 'arbiscan-testnet',
        standard: 'EIP3091'
      },
      {
        url: 'https://rinkeby-explorer.arbitrum.io',
        name: 'arbitrum-rinkeby',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6ad355bf-7c6a-5f35-b1d5-f0efa3f8e07f',
    name: 'Arbitrum Goerli',
    chain: 'ETH',
    chainId: 421613,
    rpc: ['https://goerli-rollup.arbitrum.io/rpc/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Arbitrum Goerli Ether',
      symbol: 'AGOR'
    },
    explorers: [
      {
        url: 'https://goerli-rollup-explorer.arbitrum.io',
        name: 'Arbitrum Goerli Rollup Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '62955297-f304-5a52-a44f-6c58b153ce34',
    name: 'Fastex Chain testnet',
    chain: 'FTN',
    chainId: 424242,
    rpc: ['https://rpc.testnet.fastexchain.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'FTN',
      symbol: 'FTN'
    },
    explorers: [
      {
        url: 'https://testnet.ftnscan.com',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ed525f8f-6a7a-5b0b-8d75-7e8918f7de51',
    name: 'Dexalot Subnet Testnet',
    chain: 'DEXALOT',
    chainId: 432201,
    rpc: ['https://subnets.avax.network/dexalot/testnet/rpc'],
    icon: 'dexalot',
    nativeCurrency: {
      decimals: 18,
      name: 'Dexalot',
      symbol: 'ALOT'
    },
    explorers: [
      {
        url: 'https://subnets-test.avax.network/dexalot',
        name: 'Avalanche Subnet Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1555a98c-cf36-5138-a096-9c9572596915',
    name: 'Dexalot Subnet',
    chain: 'DEXALOT',
    chainId: 432204,
    rpc: ['https://subnets.avax.network/dexalot/mainnet/rpc'],
    icon: 'dexalot',
    nativeCurrency: {
      decimals: 18,
      name: 'Dexalot',
      symbol: 'ALOT'
    },
    explorers: [
      {
        url: 'https://subnets.avax.network/dexalot',
        name: 'Avalanche Subnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '59fa79d1-29b3-5e4c-b9b5-5c519dd9e0e7',
    name: 'Weelink Testnet',
    chain: 'WLK',
    chainId: 444900,
    rpc: ['https://weelinknode1c.gw002.oneitfarm.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Weelink Chain Token',
      symbol: 'tWLK'
    },
    explorers: [
      {
        url: 'https://weelink.cloud/#/blockView/overview',
        name: 'weelink-testnet',
        standard: 'none'
      }
    ]
  },
  {
    id: 'a1aa27e2-b969-52d6-bdbf-6ef4108dc3ea',
    name: 'OpenChain Mainnet',
    chain: 'OpenChain',
    chainId: 474142,
    rpc: ['https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539'],
    icon: null,
    nativeCurrency: {
      decimals: 10,
      name: 'OpenCoin',
      symbol: 'OPC'
    },
    explorers: [
      {
        url: 'https://sidescan.luniverse.io/1641349324562974539',
        name: 'SIDE SCAN',
        standard: 'none'
      }
    ]
  },
  {
    id: '7c3edd6c-29a9-5ade-afe6-491fb1de918e',
    name: 'CMP-Testnet',
    chain: 'CMP',
    chainId: 512512,
    rpc: [
      'https://galaxy.block.caduceus.foundation',
      'wss://galaxy.block.caduceus.foundation'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Caduceus Testnet Token',
      symbol: 'CMP'
    },
    explorers: [
      {
        url: 'https://galaxy.scan.caduceus.foundation',
        name: 'Galaxy Scan',
        standard: 'none'
      }
    ]
  },
  {
    id: '8632adf5-f128-5192-9223-fae971ee614a',
    name: 'ethereum Fair',
    chain: 'ETF',
    chainId: 513100,
    rpc: ['https://rpc.etherfair.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'EthereumFair',
      symbol: 'ETHF'
    },
    explorers: [
      {
        url: 'https://explorer.etherfair.org',
        name: 'etherfair',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3221a47a-c95b-5aad-bd44-13e7e332eabc',
    name: 'Scroll',
    chain: 'ETH',
    chainId: 534352,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: []
  },
  {
    id: '31a5ca1a-da53-5241-a2c6-f3a869894017',
    name: 'Scroll Alpha Testnet',
    chain: 'ETH',
    chainId: 534353,
    rpc: ['https://alpha-rpc.scroll.io/l2'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://blockscout.scroll.io',
        name: 'Scroll Alpha Testnet Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e3cf28b6-2ac1-5697-8b9c-59386a812845',
    name: 'Scroll Pre-Alpha Testnet',
    chain: 'ETH',
    chainId: 534354,
    rpc: ['https://prealpha-rpc.scroll.io/l2'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'TSETH'
    },
    explorers: [
      {
        url: 'https://l2scan.scroll.io',
        name: 'Scroll L2 Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '0d21fd18-252e-5642-98a3-55ff32f0fa6e',
    name: 'BeanEco SmartChain',
    chain: 'BESC',
    chainId: 535037,
    rpc: ['https://mainnet-rpc.bescscan.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'BeanEco SmartChain',
      symbol: 'BESC'
    },
    explorers: [
      {
        url: 'https://Bescscan.io',
        name: 'bescscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '78993ed4-eeef-52bb-9dce-33ca414c865b',
    name: 'Bear Network Chain Mainnet',
    chain: 'BRNKC',
    chainId: 641230,
    rpc: [
      'https://brnkc-mainnet.bearnetwork.net',
      'https://brnkc-mainnet1.bearnetwork.net'
    ],
    icon: 'brnkc',
    nativeCurrency: {
      decimals: 18,
      name: 'Bear Network Chain Native Token',
      symbol: 'BRNKC'
    },
    explorers: [
      {
        url: 'https://brnkscan.bearnetwork.net',
        name: 'brnkscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6364729e-af20-5c5f-a209-6f79f7314875',
    name: 'Vision - Vpioneer Test Chain',
    chain: 'Vision-Vpioneer',
    chainId: 666666,
    rpc: ['https://vpioneer.infragrid.v.network/ethereum/compatible'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'VS',
      symbol: 'VS'
    },
    explorers: null
  },
  {
    id: '2332c829-f4c0-5cf2-a612-550853044220',
    name: 'Bear Network Chain Testnet',
    chain: 'BRNKCTEST',
    chainId: 751230,
    rpc: ['https://brnkc-test.bearnetwork.net'],
    icon: 'brnkc',
    nativeCurrency: {
      decimals: 18,
      name: 'Bear Network Chain Testnet Token',
      symbol: 'tBRNKC'
    },
    explorers: [
      {
        url: 'https://brnktest-scan.bearnetwork.net',
        name: 'brnktestscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f024476f-9431-5391-bb28-1b0072628d20',
    name: 'OctaSpace',
    chain: 'OCTA',
    chainId: 800001,
    rpc: ['https://rpc.octa.space', 'wss://rpc.octa.space'],
    icon: 'octaspace',
    nativeCurrency: {
      decimals: 18,
      name: 'OctaSpace',
      symbol: 'OCTA'
    },
    explorers: [
      {
        url: 'https://explorer.octa.space',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e6e89089-d331-5e76-b782-2c9630483be7',
    name: '4GoodNetwork',
    chain: '4GN',
    chainId: 846000,
    rpc: ['https://chain.deptofgood.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'APTA',
      symbol: 'APTA'
    },
    explorers: null
  },
  {
    id: 'ef22ef37-4075-5951-8dd8-4447640cb8aa',
    name: 'Vision - Mainnet',
    chain: 'Vision',
    chainId: 888888,
    rpc: ['https://infragrid.v.network/ethereum/compatible'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'VS',
      symbol: 'VS'
    },
    explorers: [
      {
        url: 'https://www.visionscan.org',
        name: 'Visionscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ad5273cd-8365-5e1a-a811-ba35d1515296',
    name: 'Posichain Mainnet Shard 0',
    chain: 'PSC',
    chainId: 900000,
    rpc: ['https://api.posichain.org', 'https://api.s0.posichain.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Posichain Native Token',
      symbol: 'POSI'
    },
    explorers: [
      {
        url: 'https://explorer.posichain.org',
        name: 'Posichain Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '035c3ba1-dc94-5e0b-b047-b44641eda593',
    name: 'Posichain Testnet Shard 0',
    chain: 'PSC',
    chainId: 910000,
    rpc: ['https://api.s0.t.posichain.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Posichain Native Token',
      symbol: 'POSI'
    },
    explorers: [
      {
        url: 'https://explorer-testnet.posichain.org',
        name: 'Posichain Explorer Testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'd748f958-3eac-5e03-b3fa-8fb6d3a5e0aa',
    name: 'Posichain Devnet Shard 0',
    chain: 'PSC',
    chainId: 920000,
    rpc: ['https://api.s0.d.posichain.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Posichain Native Token',
      symbol: 'POSI'
    },
    explorers: [
      {
        url: 'https://explorer-devnet.posichain.org',
        name: 'Posichain Explorer Devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2c7e78b8-c3e7-502b-89c6-718c9aff5c88',
    name: 'Posichain Devnet Shard 1',
    chain: 'PSC',
    chainId: 920001,
    rpc: ['https://api.s1.d.posichain.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Posichain Native Token',
      symbol: 'POSI'
    },
    explorers: [
      {
        url: 'https://explorer-devnet.posichain.org',
        name: 'Posichain Explorer Devnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b7183df1-b2ed-5aae-a823-fabff400a47c',
    name: 'FNCY Testnet',
    chain: 'FNCY',
    chainId: 923018,
    rpc: ['https://fncy-testnet-seed.fncy.world'],
    icon: 'fncy',
    nativeCurrency: {
      decimals: 18,
      name: 'FNCY',
      symbol: 'FNCY'
    },
    explorers: [
      {
        url: 'https://fncyscan-testnet.fncy.world',
        name: 'fncy scan testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '777075cf-964d-55fd-896f-9dba8fd96706',
    name: 'Eluvio Content Fabric',
    chain: 'Eluvio',
    chainId: 955305,
    rpc: [
      'https://host-76-74-28-226.contentfabric.io/eth/',
      'https://host-76-74-28-232.contentfabric.io/eth/',
      'https://host-76-74-29-2.contentfabric.io/eth/',
      'https://host-76-74-29-8.contentfabric.io/eth/',
      'https://host-76-74-29-34.contentfabric.io/eth/',
      'https://host-76-74-29-35.contentfabric.io/eth/',
      'https://host-154-14-211-98.contentfabric.io/eth/',
      'https://host-154-14-192-66.contentfabric.io/eth/',
      'https://host-60-240-133-202.contentfabric.io/eth/',
      'https://host-64-235-250-98.contentfabric.io/eth/'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ELV',
      symbol: 'ELV'
    },
    explorers: [
      {
        url: 'https://explorer.eluv.io',
        name: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e9db333a-9239-537a-8b8a-ae1ff8280cae',
    name: 'Etho Protocol',
    chain: 'ETHO',
    chainId: 1313114,
    rpc: ['https://rpc.ethoprotocol.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Etho Protocol',
      symbol: 'ETHO'
    },
    explorers: [
      {
        url: 'https://explorer.ethoprotocol.com',
        name: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '0b2ed91d-efda-56e7-8f23-8218b49676ca',
    name: 'Xerom',
    chain: 'XERO',
    chainId: 1313500,
    rpc: ['https://rpc.xerom.org'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Xerom Ether',
      symbol: 'XERO'
    },
    explorers: null
  },
  {
    id: '569f0a7e-dcbe-58df-a034-e87b8a3757bd',
    name: 'Kintsugi',
    chain: 'ETH',
    chainId: 1337702,
    rpc: ['https://rpc.kintsugi.themerge.dev'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'kintsugi Ethere',
      symbol: 'kiETH'
    },
    explorers: [
      {
        url: 'https://explorer.kintsugi.themerge.dev',
        name: 'kintsugi explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c5e1dd3d-0eca-555d-aa59-d980d00e303c',
    name: 'Kiln',
    chain: 'ETH',
    chainId: 1337802,
    rpc: ['https://rpc.kiln.themerge.dev'],
    icon: 'ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet ETH',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://explorer.kiln.themerge.dev',
        name: 'Kiln Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dbfc2dc2-715f-538b-9e47-aad09711482c',
    name: 'Zhejiang',
    chain: 'ETH',
    chainId: 1337803,
    rpc: ['https://rpc.zhejiang.ethpandaops.io'],
    icon: 'ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Testnet ETH',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://zhejiang.beaconcha.in',
        name: 'Zhejiang Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f3ce57e7-c4a7-5e42-a336-fb7c76ff2a9e',
    name: 'Plian Mainnet Main',
    chain: 'Plian',
    chainId: 2099156,
    rpc: ['https://mainnet.plian.io/pchain'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Plian Token',
      symbol: 'PI'
    },
    explorers: [
      {
        url: 'https://piscan.plian.org/pchain',
        name: 'piscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '48fd3bcb-c2b4-5692-bed0-2c4ddfd38f1c',
    name: 'PlatON Dev Testnet Deprecated',
    chain: 'PlatON',
    chainId: 2203181,
    rpc: [
      'https://devnetopenapi2.platon.network/rpc',
      'wss://devnetopenapi2.platon.network/ws'
    ],
    icon: 'platon',
    nativeCurrency: {
      decimals: 18,
      name: 'LAT',
      symbol: 'lat'
    },
    explorers: [
      {
        url: 'https://devnetscan.platon.network',
        name: 'PlatON explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ee6446db-55ab-56ac-bce0-401206aa3b84',
    name: 'PlatON Dev Testnet2',
    chain: 'PlatON',
    chainId: 2206132,
    rpc: [
      'https://devnet2openapi.platon.network/rpc',
      'wss://devnet2openapi.platon.network/ws'
    ],
    icon: 'platon',
    nativeCurrency: {
      decimals: 18,
      name: 'LAT',
      symbol: 'lat'
    },
    explorers: [
      {
        url: 'https://devnet2scan.platon.network',
        name: 'PlatON explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '1a4ff283-0929-5ee3-955f-73ac44b55c11',
    name: 'Filecoin - Butterfly testnet',
    chain: 'FIL',
    chainId: 3141592,
    rpc: [],
    icon: 'filecoin',
    nativeCurrency: {
      decimals: 18,
      name: 'testnet filecoin',
      symbol: 'tFIL'
    },
    explorers: []
  },
  {
    id: '9d1c0392-dbb3-5b49-a2d8-3b1a259127a5',
    name: 'Imversed Mainnet',
    chain: 'Imversed',
    chainId: 5555555,
    rpc: [
      'https://jsonrpc.imversed.network',
      'https://ws-jsonrpc.imversed.network'
    ],
    icon: 'imversed',
    nativeCurrency: {
      decimals: 18,
      name: 'Imversed Token',
      symbol: 'IMV'
    },
    explorers: [
      {
        url: 'https://txe.imversed.network',
        name: 'Imversed EVM explorer (Blockscout)',
        standard: 'EIP3091'
      },
      {
        url: 'https://tex-c.imversed.com',
        name: 'Imversed Cosmos Explorer (Big Dipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: 'b5bc1fc2-981b-5978-9412-d9de1dba63e9',
    name: 'Imversed Testnet',
    chain: 'Imversed',
    chainId: 5555558,
    rpc: [
      'https://jsonrpc-test.imversed.network',
      'https://ws-jsonrpc-test.imversed.network'
    ],
    icon: 'imversed',
    nativeCurrency: {
      decimals: 18,
      name: 'Imversed Token',
      symbol: 'IMV'
    },
    explorers: [
      {
        url: 'https://txe-test.imversed.network',
        name: 'Imversed EVM Explorer (Blockscout)',
        standard: 'EIP3091'
      },
      {
        url: 'https://tex-t.imversed.com',
        name: 'Imversed Cosmos Explorer (Big Dipper)',
        standard: 'none'
      }
    ]
  },
  {
    id: '42afd131-9443-596b-93c1-85a82dcb5a22',
    name: 'Saakuru Mainnet',
    chain: 'Saakuru',
    chainId: 7225878,
    rpc: ['https://rpc.saakuru.network'],
    icon: 'saakuru',
    nativeCurrency: {
      decimals: 18,
      name: 'OAS',
      symbol: 'OAS'
    },
    explorers: [
      {
        url: 'https://explorer.saakuru.network',
        name: 'saakuru-explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e5d7215a-eb66-5549-b36f-33bdcb296522',
    name: 'OpenVessel',
    chain: 'VSL',
    chainId: 7355310,
    rpc: ['https://mainnet-external.openvessel.io'],
    icon: 'vsl',
    nativeCurrency: {
      decimals: 18,
      name: 'Vessel ETH',
      symbol: 'VETH'
    },
    explorers: [
      {
        url: 'https://mainnet-explorer.openvessel.io',
        name: 'openvessel-mainnet',
        standard: 'none'
      }
    ]
  },
  {
    id: '1d705b22-5bdb-5e77-b575-109dd00c3efc',
    name: 'QL1 Testnet',
    chain: 'QOM',
    chainId: 7668378,
    rpc: ['https://rpc.testnet.qom.one'],
    icon: 'qom',
    nativeCurrency: {
      decimals: 18,
      name: 'Shiba Predator',
      symbol: 'QOM'
    },
    explorers: [
      {
        url: 'https://testnet.qom.one',
        name: 'QL1 Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '9ce0dd32-eaa8-5926-a572-2d400752a846',
    name: 'Musicoin',
    chain: 'MUSIC',
    chainId: 7762959,
    rpc: ['https://mewapi.musicoin.tw'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Musicoin',
      symbol: 'MUSIC'
    },
    explorers: null
  },
  {
    id: '7d58d32d-d91b-5a66-b89d-2098a6f20c78',
    name: 'Plian Mainnet Subchain 1',
    chain: 'Plian',
    chainId: 8007736,
    rpc: ['https://mainnet.plian.io/child_0'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Plian Token',
      symbol: 'PI'
    },
    explorers: [
      {
        url: 'https://piscan.plian.org/child_0',
        name: 'piscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1853995b-7d19-56d6-ad84-4ac0bb2b9ce3',
    name: 'Plian Testnet Subchain 1',
    chain: 'Plian',
    chainId: 10067275,
    rpc: ['https://testnet.plian.io/child_test'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Plian Token',
      symbol: 'TPI'
    },
    explorers: [
      {
        url: 'https://testnet.plian.org/child_test',
        name: 'piscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2535f12a-69a0-5c11-a768-b4f4feb01f6b',
    name: 'Soverun Mainnet',
    chain: 'SVRN',
    chainId: 10101010,
    rpc: ['https://mainnet-rpc.soverun.com'],
    icon: 'soverun',
    nativeCurrency: {
      decimals: 18,
      name: 'Soverun',
      symbol: 'SVRN'
    },
    explorers: [
      {
        url: 'https://explorer.soverun.com',
        name: 'Soverun',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '435ce825-229b-5cda-ad27-1d84498429d4',
    name: 'Sepolia',
    chain: 'ETH',
    chainId: 11155111,
    rpc: [
      'https://rpc.sepolia.org',
      'https://rpc2.sepolia.org',
      'https://rpc-sepolia.rockx.com'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Sepolia Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://sepolia.etherscan.io',
        name: 'etherscan-sepolia',
        standard: 'EIP3091'
      },
      {
        url: 'https://sepolia.otterscan.io',
        name: 'otterscan-sepolia',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '66fa013e-e3c9-5eef-bb1b-6e75296534ce',
    name: 'PepChain Churchill',
    chain: 'PEP',
    chainId: 13371337,
    rpc: ['https://churchill-rpc.pepchain.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'PepChain Churchill Ether',
      symbol: 'TPEP'
    },
    explorers: null
  },
  {
    id: 'c3256020-96da-59dd-a8a8-3126fb3b4fe8',
    name: 'Anduschain Mainnet',
    chain: 'anduschain',
    chainId: 14288640,
    rpc: ['https://rpc.anduschain.io/rpc', 'wss://rpc.anduschain.io/ws'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'DAON',
      symbol: 'DEB'
    },
    explorers: [
      {
        url: 'https://explorer.anduschain.io',
        name: 'anduschain explorer',
        standard: 'none'
      }
    ]
  },
  {
    id: '711cca4a-0894-5ec8-bd90-119c6ced1437',
    name: 'Plian Testnet Main',
    chain: 'Plian',
    chainId: 16658437,
    rpc: ['https://testnet.plian.io/testnet'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Plian Testnet Token',
      symbol: 'TPI'
    },
    explorers: [
      {
        url: 'https://testnet.plian.org/testnet',
        name: 'piscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'e38a82ff-6e1d-5054-b92b-616d2dd35287',
    name: 'IOLite',
    chain: 'ILT',
    chainId: 18289463,
    rpc: ['https://net.iolite.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'IOLite Ether',
      symbol: 'ILT'
    },
    explorers: null
  },
  {
    id: '57725f4e-93eb-5505-8cb5-13708f0ca63d',
    name: 'SmartMesh Mainnet',
    chain: 'Spectrum',
    chainId: 20180430,
    rpc: ['https://jsonapi1.smartmesh.cn'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'SmartMesh Native Token',
      symbol: 'SMT'
    },
    explorers: [
      {
        url: 'https://spectrum.pub',
        name: 'spectrum',
        standard: 'none'
      }
    ]
  },
  {
    id: 'ed85e598-b5a4-5261-ae7f-2debc36300d3',
    name: 'quarkblockchain',
    chain: 'QKI',
    chainId: 20181205,
    rpc: ['https://hz.rpc.qkiscan.cn', 'https://jp.rpc.qkiscan.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'quarkblockchain Native Token',
      symbol: 'QKI'
    },
    explorers: null
  },
  {
    id: 'fca0e120-fba6-5b1b-931a-881802a17495',
    name: 'Excelon Mainnet',
    chain: 'XLON',
    chainId: 22052002,
    rpc: ['https://edgewallet1.xlon.org/'],
    icon: 'xlon',
    nativeCurrency: {
      decimals: 18,
      name: 'Excelon',
      symbol: 'xlon'
    },
    explorers: [
      {
        url: 'https://explorer.excelon.io',
        name: 'Excelon explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'f5726454-6fda-5384-8398-bacdee5ebebc',
    name: 'Excoincial Chain Volta-Testnet',
    chain: 'TEXL',
    chainId: 27082017,
    rpc: ['https://testnet-rpc.exlscan.com'],
    icon: 'exl',
    nativeCurrency: {
      decimals: 18,
      name: 'TExlcoin',
      symbol: 'TEXL'
    },
    explorers: [
      {
        url: 'https://testnet-explorer.exlscan.com',
        name: 'exlscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '6fd3ec98-a9a5-59b6-a191-4a19d2fed965',
    name: 'Excoincial Chain Mainnet',
    chain: 'EXL',
    chainId: 27082022,
    rpc: ['https://rpc.exlscan.com'],
    icon: 'exl',
    nativeCurrency: {
      decimals: 18,
      name: 'Exlcoin',
      symbol: 'EXL'
    },
    explorers: [
      {
        url: 'https://exlscan.com',
        name: 'exlscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c7ef480e-61ec-5b81-a7d4-2d4fa3414431',
    name: 'Auxilium Network Mainnet',
    chain: 'AUX',
    chainId: 28945486,
    rpc: ['https://rpc.auxilium.global'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Auxilium coin',
      symbol: 'AUX'
    },
    explorers: null
  },
  {
    id: '0f7120cd-478b-553f-9e64-948f167a5767',
    name: 'Flachain Mainnet',
    chain: 'FLX',
    chainId: 29032022,
    rpc: ['https://flachain.flaexchange.top/'],
    icon: 'flacoin',
    nativeCurrency: {
      decimals: 18,
      name: 'Flacoin',
      symbol: 'FLA'
    },
    explorers: [
      {
        url: 'https://explorer.flaexchange.top',
        name: 'FLXExplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '707469e3-250b-5192-902c-fa443dcb5caa',
    name: 'Filecoin - Local testnet',
    chain: 'FIL',
    chainId: 31415926,
    rpc: [],
    icon: 'filecoin',
    nativeCurrency: {
      decimals: 18,
      name: 'testnet filecoin',
      symbol: 'tFIL'
    },
    explorers: []
  },
  {
    id: '2cf5112c-07ec-5282-8eb8-560aacfe0f8d',
    name: 'Joys Digital Mainnet',
    chain: 'JOYS',
    chainId: 35855456,
    rpc: ['https://node.joys.digital'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'JOYS',
      symbol: 'JOYS'
    },
    explorers: null
  },
  {
    id: '6e40b971-8b05-5350-b079-be9a5e2110fd',
    name: 'maistestsubnet',
    chain: 'MAI',
    chainId: 43214913,
    rpc: [
      'http://174.138.9.169:9650/ext/bc/VUKSzFZKckx4PoZF9gX5QAqLPxbLzvu1vcssPG5QuodaJtdHT/rpc'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'maistestsubnet',
      symbol: 'MAI'
    },
    explorers: [
      {
        url: 'http://174.138.9.169:3006/?network=maistesntet',
        name: 'maistesntet',
        standard: 'none'
      }
    ]
  },
  {
    id: 'e0ae7ef9-9836-584f-b680-6e5a485508a5',
    name: 'Aquachain',
    chain: 'AQUA',
    chainId: 61717561,
    rpc: ['https://c.onical.org', 'https://tx.aquacha.in/api'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Aquachain Ether',
      symbol: 'AQUA'
    },
    explorers: null
  },
  {
    id: '918bb5a0-1847-5123-a2d0-c89874bfe09f',
    name: 'Autonity Bakerloo (Thames) Testnet',
    chain: 'AUT',
    chainId: 65010000,
    rpc: [
      'https://rpc1.bakerloo.autonity.org/',
      'wss://rpc1.bakerloo.autonity.org/ws/'
    ],
    icon: 'autonity',
    nativeCurrency: {
      decimals: 18,
      name: 'Bakerloo Auton',
      symbol: 'ATN'
    },
    explorers: [
      {
        url: 'https://bakerloo.autonity.org',
        name: 'autonity-blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'bb1e8454-76aa-5551-86e6-3713b302353a',
    name: 'Autonity Piccadilly (Thames) Testnet',
    chain: 'AUT',
    chainId: 65100000,
    rpc: [
      'https://rpc1.piccadilly.autonity.org/',
      'wss://rpc1.piccadilly.autonity.org/ws/'
    ],
    icon: 'autonity',
    nativeCurrency: {
      decimals: 18,
      name: 'Piccadilly Auton',
      symbol: 'ATN'
    },
    explorers: [
      {
        url: 'https://piccadilly.autonity.org',
        name: 'autonity-blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1e832df4-7701-517e-a1f5-a53adc867a5b',
    name: 'Joys Digital TestNet',
    chain: 'TOYS',
    chainId: 99415706,
    rpc: ['https://toys.joys.cash/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'TOYS',
      symbol: 'TOYS'
    },
    explorers: null
  },
  {
    id: '979c68a5-9569-5379-9a31-dee189d3e520',
    name: 'Gather Mainnet Network',
    chain: 'GTH',
    chainId: 192837465,
    rpc: ['https://mainnet.gather.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Gather',
      symbol: 'GTH'
    },
    explorers: [
      {
        url: 'https://explorer.gather.network',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '377df150-694e-5df8-b88e-f98beaa85f6c',
    name: 'Neon EVM DevNet',
    chain: 'Solana',
    chainId: 245022926,
    rpc: ['https://devnet.neonevm.org'],
    icon: 'neon',
    nativeCurrency: {
      decimals: 18,
      name: 'Neon',
      symbol: 'NEON'
    },
    explorers: [
      {
        url: 'https://devnet.explorer.neon-labs.org',
        name: 'native',
        standard: 'EIP3091'
      },
      {
        url: 'https://devnet.neonscan.org',
        name: 'neonscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '21a73c0b-7b99-54d3-b507-a4f8f8463725',
    name: 'Neon EVM MainNet',
    chain: 'Solana',
    chainId: 245022934,
    rpc: ['https://mainnet.neonevm.org'],
    icon: 'neon',
    nativeCurrency: {
      decimals: 18,
      name: 'Neon',
      symbol: 'NEON'
    },
    explorers: [
      {
        url: 'https://mainnet.explorer.neon-labs.org',
        name: 'native',
        standard: 'EIP3091'
      },
      {
        url: 'https://mainnet.neonscan.org',
        name: 'neonscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '83a4c754-87f2-5cd7-8ee9-1d2631cbcc07',
    name: 'Neon EVM TestNet',
    chain: 'Solana',
    chainId: 245022940,
    rpc: ['https://testnet.neonevm.org'],
    icon: 'neon',
    nativeCurrency: {
      decimals: 18,
      name: 'Neon',
      symbol: 'NEON'
    },
    explorers: [
      {
        url: 'https://testnet.explorer.neon-labs.org',
        name: 'native',
        standard: 'EIP3091'
      },
      {
        url: 'https://testnet.neonscan.org',
        name: 'neonscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'abf1b43e-a836-5dd5-901a-c59761fc67ad',
    name: 'OneLedger Mainnet',
    chain: 'OLT',
    chainId: 311752642,
    rpc: ['https://mainnet-rpc.oneledger.network'],
    icon: 'oneledger',
    nativeCurrency: {
      decimals: 18,
      name: 'OLT',
      symbol: 'OLT'
    },
    explorers: [
      {
        url: 'https://mainnet-explorer.oneledger.network',
        name: 'OneLedger Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2042a877-7d53-521b-9b50-162d92a2e07c',
    name: 'Calypso NFT Hub (SKALE Testnet)',
    chain: 'staging-utter-unripe-menkar',
    chainId: 344106930,
    rpc: ['https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'sFUEL',
      symbol: 'sFUEL'
    },
    explorers: [
      {
        url: 'https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com',
        name: 'Blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '4dfd8067-9dc2-55c9-a875-9b32f326e220',
    name: 'Gather Testnet Network',
    chain: 'GTH',
    chainId: 356256156,
    rpc: ['https://testnet.gather.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Gather',
      symbol: 'GTH'
    },
    explorers: [
      {
        url: 'https://testnet-explorer.gather.network',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: 'fce24e7d-9d84-5bf1-9a40-8887603a88f5',
    name: 'Gather Devnet Network',
    chain: 'GTH',
    chainId: 486217935,
    rpc: ['https://devnet.gather.network'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Gather',
      symbol: 'GTH'
    },
    explorers: [
      {
        url: 'https://devnet-explorer.gather.network',
        name: 'Blockscout',
        standard: 'none'
      }
    ]
  },
  {
    id: '24a46ac9-c11b-55d0-b965-49209ad85454',
    name: 'Nebula Staging',
    chain: 'staging-faint-slimy-achird',
    chainId: 503129905,
    rpc: [
      'https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird',
      'wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'sFUEL',
      symbol: 'sFUEL'
    },
    explorers: [
      {
        url: 'https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com',
        name: 'nebula',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '841990ad-19d4-5ba9-b59a-a7089b758646',
    name: 'IPOS Network',
    chain: 'IPOS',
    chainId: 1122334455,
    rpc: ['https://rpc.iposlab.com', 'https://rpc2.iposlab.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'IPOS Network Ether',
      symbol: 'IPOS'
    },
    explorers: null
  },
  {
    id: '603e4d2b-138d-598e-9cd0-fc6ea3f14b88',
    name: 'Aurora Mainnet',
    chain: 'NEAR',
    chainId: 1313161554,
    rpc: ['https://mainnet.aurora.dev'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://aurorascan.dev',
        name: 'aurorascan.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'b5378aae-551d-51a4-9a48-351bb321491e',
    name: 'Aurora Testnet',
    chain: 'NEAR',
    chainId: 1313161555,
    rpc: ['https://testnet.aurora.dev/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: [
      {
        url: 'https://testnet.aurorascan.dev',
        name: 'aurorascan.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'ab0b1b95-e92a-5ad9-8ad1-500826d1c5b5',
    name: 'Aurora Betanet',
    chain: 'NEAR',
    chainId: 1313161556,
    rpc: [],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH'
    },
    explorers: null
  },
  {
    id: '2d4b2e84-7b18-5a78-a70c-f1b0f9e917ee',
    name: 'Nebula Mainnet',
    chain: 'green-giddy-denebola',
    chainId: 1482601649,
    rpc: [
      'https://mainnet.skalenodes.com/v1/green-giddy-denebola',
      'wss://mainnet-proxy.skalenodes.com/v1/ws/green-giddy-denebola'
    ],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'sFUEL',
      symbol: 'sFUEL'
    },
    explorers: [
      {
        url: 'https://green-giddy-denebola.explorer.mainnet.skalenodes.com',
        name: 'nebula',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '29d24e59-2cbc-5a47-8bb4-7832c7699db7',
    name: 'Calypso NFT Hub (SKALE)',
    chain: 'honorable-steel-rasalhague',
    chainId: 1564830818,
    rpc: ['https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'sFUEL',
      symbol: 'sFUEL'
    },
    explorers: [
      {
        url: 'https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com',
        name: 'Blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '2b8762d5-7fa1-58a9-afdf-b284d7324529',
    name: 'Harmony Mainnet Shard 0',
    chain: 'Harmony',
    chainId: 1666600000,
    rpc: ['https://api.harmony.one', 'https://api.s0.t.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: [
      {
        url: 'https://explorer.harmony.one',
        name: 'Harmony Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '356cba14-5a9d-5f76-873c-7d30e588d0d2',
    name: 'Harmony Mainnet Shard 1',
    chain: 'Harmony',
    chainId: 1666600001,
    rpc: ['https://api.s1.t.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: null
  },
  {
    id: '90800731-ed7d-506c-ad02-249c5381d141',
    name: 'Harmony Mainnet Shard 2',
    chain: 'Harmony',
    chainId: 1666600002,
    rpc: ['https://api.s2.t.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: null
  },
  {
    id: 'aaeea646-1c7a-5b6e-bf0f-462c40695855',
    name: 'Harmony Mainnet Shard 3',
    chain: 'Harmony',
    chainId: 1666600003,
    rpc: ['https://api.s3.t.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: null
  },
  {
    id: '8cbaf784-9fd5-59a3-9670-6befaeb67484',
    name: 'Harmony Testnet Shard 0',
    chain: 'Harmony',
    chainId: 1666700000,
    rpc: ['https://api.s0.b.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: [
      {
        url: 'https://explorer.pops.one',
        name: 'Harmony Testnet Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '79139525-17ea-58e7-93f3-3a5608626482',
    name: 'Harmony Testnet Shard 1',
    chain: 'Harmony',
    chainId: 1666700001,
    rpc: ['https://api.s1.b.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: null
  },
  {
    id: 'a611247c-7adf-570c-8b95-96e3e2cc2f58',
    name: 'Harmony Testnet Shard 2',
    chain: 'Harmony',
    chainId: 1666700002,
    rpc: ['https://api.s2.b.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: null
  },
  {
    id: 'a03d465f-088c-5d32-b87f-292329d47cb0',
    name: 'Harmony Testnet Shard 3',
    chain: 'Harmony',
    chainId: 1666700003,
    rpc: ['https://api.s3.b.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: null
  },
  {
    id: 'd20eaf7c-928d-560a-a6c7-4515a479611e',
    name: 'Harmony Devnet Shard 0',
    chain: 'Harmony',
    chainId: 1666900000,
    rpc: ['https://api.s1.ps.hmny.io', 'https://api.s1.ps.hmny.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'ONE',
      symbol: 'ONE'
    },
    explorers: [
      {
        url: 'https://explorer.ps.hmny.io',
        name: 'Harmony Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'dbde52de-2876-5de2-a673-3f4480187560',
    name: 'DataHopper',
    chain: 'HOP',
    chainId: 2021121117,
    rpc: ['https://23.92.21.121:8545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'DataHoppers',
      symbol: 'HOP'
    },
    explorers: null
  },
  {
    id: '29090f1f-d2a4-5f12-9f56-2fc10c8666b6',
    name: 'Europa SKALE Chain',
    chain: 'europa',
    chainId: 2046399126,
    rpc: [
      'https://mainnet.skalenodes.com/v1/elated-tan-skat',
      'wss://mainnet.skalenodes.com/v1/elated-tan-skat'
    ],
    icon: 'europa',
    nativeCurrency: {
      decimals: 18,
      name: 'sFUEL',
      symbol: 'sFUEL'
    },
    explorers: [
      {
        url: 'https://elated-tan-skat.explorer.mainnet.skalenodes.com',
        name: 'Blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '606732c5-84ef-5f7e-8f11-ca74a3454bc8',
    name: 'Pirl',
    chain: 'PIRL',
    chainId: 3125659152,
    rpc: ['https://wallrpc.pirl.io'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Pirl Ether',
      symbol: 'PIRL'
    },
    explorers: null
  },
  {
    id: '693585b9-4fc5-5476-a13c-19d8bb20a538',
    name: 'OneLedger Testnet Frankenstein',
    chain: 'OLT',
    chainId: 4216137055,
    rpc: ['https://frankenstein-rpc.oneledger.network'],
    icon: 'oneledger',
    nativeCurrency: {
      decimals: 18,
      name: 'OLT',
      symbol: 'OLT'
    },
    explorers: [
      {
        url: 'https://frankenstein-explorer.oneledger.network',
        name: 'OneLedger Block Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'adec3640-ad7b-5c84-bb3b-ee82932c33be',
    name: 'Palm Testnet',
    chain: 'Palm',
    chainId: 11297108099,
    rpc: ['https://palm-testnet.infura.io/v3/${INFURA_API_KEY}'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'PALM',
      symbol: 'PALM'
    },
    explorers: [
      {
        url: 'https://explorer.palm-uat.xyz',
        name: 'Palm Testnet Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '84ff0c5b-0c73-5f2f-9d55-eab710635b38',
    name: 'Palm',
    chain: 'Palm',
    chainId: 11297108109,
    rpc: ['https://palm-mainnet.infura.io/v3/${INFURA_API_KEY}'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'PALM',
      symbol: 'PALM'
    },
    explorers: [
      {
        url: 'https://explorer.palm.io',
        name: 'Palm Explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '1385062e-d43f-5056-88ff-7189a860623a',
    name: 'Ntity Mainnet',
    chain: 'Ntity',
    chainId: 197710212030,
    rpc: ['https://rpc.ntity.io'],
    icon: 'ntity',
    nativeCurrency: {
      decimals: 18,
      name: 'Ntity',
      symbol: 'NTT'
    },
    explorers: [
      {
        url: 'https://blockscout.ntity.io',
        name: 'Ntity Blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'a1f3438d-2da4-53d0-b988-3e189d69058c',
    name: 'Haradev Testnet',
    chain: 'Ntity',
    chainId: 197710212031,
    rpc: ['https://blockchain.haradev.com'],
    icon: 'ntity',
    nativeCurrency: {
      decimals: 18,
      name: 'Ntity Haradev',
      symbol: 'NTTH'
    },
    explorers: [
      {
        url: 'https://blockscout.haradev.com',
        name: 'Ntity Haradev Blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '3c3f3e0f-f58b-5b7a-8e7e-f19718c1788d',
    name: 'Zeniq',
    chain: 'ZENIQ',
    chainId: 383414847825,
    rpc: ['https://smart.zeniq.network:9545'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Zeniq',
      symbol: 'ZENIQ'
    },
    explorers: [
      {
        url: 'https://smart.zeniq.net',
        name: 'zeniq-smart-chain-explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: '72c87815-f13a-5a3a-b476-bdc26bbd54fc',
    name: 'PDC Mainnet',
    chain: 'IPDC',
    chainId: 666301171999,
    rpc: ['https://mainnet.ipdc.io/'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'PDC',
      symbol: 'PDC'
    },
    explorers: [
      {
        url: 'https://scan.ipdc.io',
        name: 'ipdcscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    id: 'c2db0403-28b5-53c7-a899-d4995e26c967',
    name: 'Molereum Network',
    chain: 'ETH',
    chainId: 6022140761023,
    rpc: ['https://molereum.jdubedition.com'],
    icon: null,
    nativeCurrency: {
      decimals: 18,
      name: 'Molereum Ether',
      symbol: 'MOLE'
    },
    explorers: null
  },
  {
    id: '98793651-6ed5-5bec-ad27-1ee8493febec',
    name: 'Godwoken Testnet (V1)',
    chain: 'GWT',
    chainId: 868455272153094,
    rpc: ['https://godwoken-testnet-web3-v1-rpc.ckbapp.dev'],
    icon: null,
    nativeCurrency: {
      decimals: 8,
      name: 'CKB',
      symbol: 'CKB'
    },
    explorers: [
      {
        url: 'https://v1.aggron.gwscan.com',
        name: 'GWScan Block Explorer',
        standard: 'none'
      }
    ]
  }
]
