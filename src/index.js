// // Import thirdweb SDK
// import {ThirdwegSDK} from '@3rdweb/sdk'

// // Initialize SDK and NFT module
// const contractAddress = "Ox..."
// const nft = sdk.getNFTModule()

// // Mint an NFT
// const uri ="https://..."
// nft.mint(uri)

// Importing libraries
// import { ThirdwebSDK } from "@3rdweb/sdk";
// import { ethers } from "ethers";
// import dotenv from "dotenv";

// //Importing private key
// dotenv.config();





// import { ThirdwebSDK } from "@3rdweb/sdk";

// // This url indicates which chain you want to connect to
// const rpcUrl = "https://polygon-rpc.com/";

// const sdk = new ThirdwebSDK(rpcUrl);

// // Initialize market module by passing in the module address
// const marketplaceModuleAddress = "<MARKETPLACE_MODULE_ADDRESS>";
// const marketplace = sdk.getMarketplaceModule(marketplaceModuleAddress);

// // Get all the listings
// marketplace.getAllListings();

// // Follow our guides to get a signer (from a connected wallet or your private key)
// const sdk = new ThirdwebSDK(signer);

// // Get your marketplace module
// const marketplaceModuleAddress = "0xC06adC34097afa2085324D4192fbE9206059f8e0";
// const marketplace = sdk.getMarketplaceModule(marketplaceModuleAddress);

// // Now you can buy from the connected signer
// marketplace.buyoutDirectListing({
//   listingId: 1,
//   quantityDesired: 1,
// });
const nftCollection = sdk.getNFTModule("<MODULE_ADDRESS>");

const mintNft = async () => {
  try {
    await nftCollection.mint({
      name: "thirdweb",
      description: "Smart contracts you control. Tools that accelerate your workflow. Intuitive SDKs and widgets for developers.",
      image: "ipfs/<YOUR_IPFS_FOLDER_CID>/1.png",
      properties: {},
    });
  } catch (err) {
    console.log(err);
  }
};

mintNft();





