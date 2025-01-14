import * as dotenv from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-contract-sizer';
// import 'hardhat-gas-reporter';
// import 'solidity-coverage';

dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.6.12',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: '0.8.15',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100,
                    },
                },
            },
        ],
        overrides: {
            'contracts/mixologist/Mixologist.sol': {
                version: '0.8.15',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        },
    },
    namedAccounts: {
        deployer: 0,
    },
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            accounts : {count: 101}
        },

    },
    etherscan: {
        apiKey: {
            rinkeby: process.env.RINKEBY_KEY ?? '',
        },
    },
    // gasReporter: {
    //     currency: 'USD',
    //     token: 'BOBA',
    //     coinmarketcap: process.env.COINMARKETCAP_API ?? '',
    // },
    mocha: {
        timeout: 4000000,
    },
};

export default config;
