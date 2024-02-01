import { Chain } from 'wagmi'

export const PegasusTestnet = {
    id: 1891,
    name: 'Pegasus Testnet',
    network: 'Pegasus Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'ETH',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1/'] },
      default: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1/'] },
    },
    blockExplorers: {
      etherscan: { name: 'Pegasus', url: 'https://pegasus.lightlink.io/' },
      default: { name: 'Pegasus', url: 'https://pegasus.lightlink.io' },
    },
  
  } as const satisfies Chain
