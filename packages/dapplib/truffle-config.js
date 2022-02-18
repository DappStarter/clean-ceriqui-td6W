require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stomach razor situate comfort install end army genius'; 
let testAccounts = [
"0xb340a9e52c3c7ead036f09e51cccfc2279fd9ceccecab2dd4d78397ee7581041",
"0x02eda62ebc94824613dd5ce9c8e0037d835d5fd32a25f7745dcf643bb38e0234",
"0x291d33581c07eb186b4bde3e7396b46a2d7a1af261bfb12edf869d3844e2bee1",
"0x1f31a4ec9d45c51fe8ba01cb804a2c2f8da93bcfde83ea8f9395cfe73bfe9b2d",
"0x31c8ca13c2dedd475fbd111039f605eb6ae72cfee876bb509745aaa2010ff3ce",
"0xca7c366d67f59c8ef4bc4053c4fd979574795331bd8709d67823d0400be590f8",
"0x03be1d82abb1abdf8a784053b4598f57c22245ce1ac999f476811756f7781726",
"0x7cd6c79f81802d93aa27e3b5b71eacdb8313f9a69ef6bcc8a76cdf1c88f90387",
"0x77b859d5049b942f9c5c747eb02584f1bea6c9221643178d89eb5316c89cd1d8",
"0x1ab3162a6f33130adb627f5674d49e80facbf57f68c70895b06951ef8a1a3f40"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


