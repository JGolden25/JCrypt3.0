require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FtLOI4WsSdmhzdTy7-tpxEcPf0rpq3JT',
      accounts: ['6826ebd007fe1a991baecb782475dafdadcdf109273f8bb046a02779c6ff6d44'],
    },
  },
};