import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import BummyCoreABI from "../abi/BummyCore.json";
import { BummyCore } from "../typechain/BummyCore";

export const getEtherData = async (signer: any) => {
  // 컨트랙트 ABI와 컨트랙트 주소입니다.
  const abi = BummyCoreABI;

  const contractAddress = "0x82356e2dEa4F5b5CBF3d8A2511a7F4BF9631602d";

  // const provider = new JsonRpcProvider(
  //   "https://public-node-api.klaytnapi.com/v1/baobab"
  // );

  //await provider.getBlockNumber().then(console.log);

  const contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
  ) as BummyCore;

  try {
    // 스마트 컨트랙트 함수를 호출합니다.
    const result = await contract.createFirstGen0Bummy();
    console.log(contract);
    return result;
  } catch (error) {
    console.error(error);
  }
};

//https://public-node-api.klaytnapi.com/v1/baobab
