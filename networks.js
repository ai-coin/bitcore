var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('bef9b4d9'), // Stephen Reed - swapped first two bytes for aicoin
  addressVersion: 23, // A.I. Coin addresses begin with A
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c726f94ea32887573f95352ae58259e32596a5ea5c475f0e2fcdc7b9a948506c'),
    merkle_root: hex('0123da0013e976472467a8184ac91cd303c69dc8cd98072df4bf8df71dadd2ee'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1417543722, // December 2, 2014 18:8:41 GMT,
    bits: hex('1d00ffff'),
  },
  dnsSeeds: [
  ],
  defaultClientPort: 31416
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('110b0907'), // Stephen Reed - swapped first two bytes for aicoin
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 27184
};
