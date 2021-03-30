require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name recipe situate company install person food giant'; 
let testAccounts = [
"0xd1044b007ce2ec11e2200f6c6166ac7d0c3c1bb305968fb568aca6d974978aaa",
"0x4d49e0af192d732fb718a50d865f580fc85b464e7c163cbd25f62fe6433d56b8",
"0xd8214ac7558df74064b2c72c4bfedd307d0040ea4e6a73cd45ff699859e0b829",
"0xe8ff1aee6c7007e062adc59a9b6b74000b671dee56a46b18ad1599dc8973c20c",
"0x3e556eceb839c4a08e5ec2b3f1c19b152f3f96b0118752c728f5ee1ebaa04686",
"0x50ee315800ce8ebd8b512003fa190dc9cdb7c53d8debe1e90e34a585088a40bb",
"0x2b47bd5f801164ea3a96e9f644a207c35d8ebad7dbde9c639ef3b36325e0ed31",
"0x06153bb4fc8546f70b274dea67b58916fa8354b6977384e83c0c1aab4f5fa36a",
"0x96fdc46d37e9a2a6a13da06191ee653b48731c1fb0b378ea6b8ce5b37fbc28cb",
"0x8849ab4462095a72318605fb27b87d0873099e66119ee1e1347f5fa994629586"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
