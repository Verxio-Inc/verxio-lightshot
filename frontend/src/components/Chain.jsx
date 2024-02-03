const PegasusTestnet = {
  id: 1891,
  name: "Pegasus Testnet",
  network: "Pegasus Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://replicator.pegasus.lightlink.io/rpc/v1/"] },
    default: { http: ["https://replicator.pegasus.lightlink.io/rpc/v1/"] },
  },
  blockExplorers: {
    etherscan: { name: "ETH", url: "https://pegasus.lightlink.io//" },
    default: { name: "ETH", url: "https://pegasus.lightlink.io//" },
  },
};

export { PegasusTestnet };
