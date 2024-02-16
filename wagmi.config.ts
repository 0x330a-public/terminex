import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import {optimism} from "viem/chains";


export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
      etherscan({
        apiKey: process.env.ETHERSCAN_API!,
        contracts: [
          {
            name: "Bundler",
            address: "0x00000000FC04c910A0b5feA33b03E0447AD0B0aA"
          },
          {
            name: "IdRegistry",
            address: "0x00000000Fc6c5F01Fc30151999387Bb99A9f489b"
          },
          {
            name: "StorageRegistry",
            address: "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D"
          },
          {
            name: "KeyRegistry",
            address: "0x00000000Fc1237824fb747aBDE0FF18990E59b7e"
          },
          {
            name: "IdGateway",
            address: "0x00000000Fc25870C6eD6b6c7E41Fb078b7656f69"
          }
        ],
        chainId: optimism.id,
        cacheDuration: 0,
      }),
      react(),
  ],
})
