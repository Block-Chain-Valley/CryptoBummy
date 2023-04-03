import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
export const getEtherData = async (_wallet: string) => {
  // 컨트랙트 ABI와 컨트랙트 주소입니다.
  const abi = [
    // 토큰 컨트랙트 ABI
    "function balanceOf(address owner) view returns (uint256)",
  ];
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // 이더리움 블록체인에 연결합니다.

  const provider = new JsonRpcProvider((window.ethereum as any).provider);

  const walletAddress = _wallet; // 지갑 주소
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const balance = await contract.balanceOf(walletAddress); // balanceOf() 함수 호출
  console.log("Balance:", balance.toString());
};
