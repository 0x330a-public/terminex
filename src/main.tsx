import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createConfig, http, WagmiProvider} from "wagmi";
import {optimism} from "viem/chains";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ConnectKitProvider, getDefaultConfig} from "connectkit";

export const config = createConfig(
    getDefaultConfig({
        appIcon: undefined, appUrl: undefined,
        walletConnectProjectId: "4447c65c23be9b6fbabdc13fb5a17700",
        chains: [optimism],
        transports: {
            [optimism.id]: http()
        },

        appName: "Terminex",
        appDescription: "Terminex Farcaster Administration"
    })
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>
                <App />
            </ConnectKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
