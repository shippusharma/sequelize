'use strict';
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  clientBaseUrl: process.env.CLIENT_BASE_URL || 'http://localhost:3000',
  serverBaseUrl: process.env.SERVER_BASE_URL || 'http://localhost:5000',
  port: process.env.PORT || 5000,
  //tokens and  salt
  accessToken: process.env.ACCESS_TOKEN,
  refreshToken: process.env.REFRESH_TOKEN,
  cookieToken: process.env.SET_COOKIE,
  salt: process.env.SALT || 'Shippu-Sharma',
  // mongodb database
  webllistoMongodbUri: process.env.WEBLLISTO_MONOGODB_URI,
  mongodbUri: process.env.MONGODB_URI,
  // mySQL database
  mysqlDatabase: process.env.MYSQL_DATABASE,
  mysqlUserName: process.env.MYSQL_USERNAME,
  mysqlPassword: process.env.MYSQL_PASSWORD,
  mysqlHost: process.env.MYSQL_HOST,
  mysqlPhpMyAdmin: process.env.PHP_MYADMIN,
  //for-> infura-and-alchemy
  infuraApiKey: process.env.INFURA_API_KEY,
  alchemyApiKey: process.env.ALCHEMY_API_KEY,
  //smtp for nodemailer
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpUser: process.env.SMTP_USER,
  smtpPassword: process.env.SMTP_PASSWORD,
  // file stack
  smtpFileStackApiKey: process.env.FILE_STACK_API_KEY,
  //fast2sms - phone-otp
  fast2SmsApiKey: process.env.FAST2SMS_API_KEY,
  fast2SmsMessage: process.env.FAST2SMS_MESSAGE,
  // for-> pinata
  pinataApiKey: process.env.PINATA_API_KEY,
  pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
  pinataJWT: process.env.PINATA_JWT,
  // for-> google-recaptcha-api-key
  googleRecaptchaApiKey: process.env.GOOGLE_RECAPTCHA_API_KEY,
  googleRecaptchaSecretKey: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
  // for-> networks
  ethNetworkId: 1,
  goreliNetworkId: 5,
  mumbaiNetworkId: 80001,
  polygonNetworkId: 137,
  bnbTestnetNetworkId: 97,
  bnbMainnetNetworkId: 56,
  bsvNetworkId: 'mainnet',
  bsvTestnetNetworkId: 'testnet',
  // for-> bsv
  bsvAccountLink: process.env.BSV_ACCOUNT_LINK,
  // for-> usd price
  coingeckoBaseUrl: process.env.COINGECKO_BASE_URL || 'https://api.coingecko.com/api/',
  tokenIconUrl: process.env.TOKEN_ICON_URL || 'https://static.metaswap.codefi.network/api/', // for token
  // for-> opensea api
  openseaAssetsApi: process.env.OPENSEA_ASSETS_API || 'https://testnets-api.opensea.io/api/v1/assets',
  openseaEventsApi: process.env.OPENSEA_EVENTS_API || 'https://testnets-api.opensea.io/api/v1/events',
  openseaNftListedApi: process.env.NFT_LISTED_API || 'https://testnets-api.opensea.io/api/v1/asset',
  // for-> etherscan (mainnet/testnet)
  etherscanApiKey: process.env.ETHERSCAN_API_KEY,
  etherscanBaseUrl: process.env.ETHERSCAN_BASE_URL || 'https://api-goerli.etherscan.io/api',
  goreliEtherscanAccountLink: process.env.GORELI_ETHEREUM_ACCOUNT_LINK || 'https://goerli.etherscan.io/',
  mainnetEtherscanAccountLink: process.env.MAINNET_ETHEREUM_ACCOUNT_LINK || 'https://etherscan.io/',
  // for-> polygon (mainnet/testnet)
  polyscanApiKey: process.env.POLYGONSCAN_API_KEY,
  polyscanBaseUrl: process.env.POLYGONSCAN_BASE_URL || 'https://api-testnet.polygonscan.com',
  mumbaiAccountLink: process.env.MUMBAI_POLYGON_ACCOUNT_LINK || 'https://mumbai.polygonscan.com/',
  polyscanAccountLink: process.env.MAINNET_POLYGON_ACCOUNT_LINK || 'https://polygonscan.com/',
};
