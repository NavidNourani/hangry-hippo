import { Alert, Button, Snackbar } from "@mui/material";
// import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import web3 from "web3";
// import { metamaskWalletAddressAtom } from "../../../../../stores/pages/priateSale";
// import { changeNetwork } from "../../../../../utils/changeNetwork";
// import AlertDialog from "../../../../organism/AlertDialog";
import abiJson from "../../../data/contractABI.json";
import { changeNetwork } from "../../../utils/changeNetwork";

interface Props {
  BusdAmount?: string;
  onPurchase?: () => void;
}

const prefferedChainId =
  process.env.NEXT_PUBLIC_METAMASK_CHAIN === "main" ? "56" : "97";

const Actions: FunctionComponent<Props> = ({
  BusdAmount = "0.0999",
  onPurchase,
}) => {
  const router = useRouter();
  const currentNetworkRef = useRef<string>();
  //   const [walletAddress, setWalletAddress] = useState(metamaskWalletAddressAtom);
  const [walletAddress, setWalletAddress] = React.useState("");
  const [currentNetwork, setCurrentNetwork] = useState("");
  const [showDialog, setShowDialog] = useState<
    "CHANGE_CHAIN" | "INSTALL_METAMASK" | "WHITE_LIST_ERROR"
  >();
  console.log("currentNetwork: ", currentNetwork);

  const changeChain = (chainId: string) => {
    setCurrentNetwork(parseInt(chainId, 16).toString());
    console.log("currentNetwork: ", chainId);
  };

  useEffect(() => {
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      currentNetworkRef.current = ethereum?.networkVersion;
      changeChain(`0x${Number(ethereum.networkVersion).toString(16)}`);
      ethereum.on("chainChanged", changeChain);
      console.log(
        "Init chain",
        `0x${Number(ethereum.networkVersion).toString(16)}`
      );
    }
  }, []);

  const connectToMetamask = async () => {
    const ethereum = (window as any).ethereum;
    setCurrentNetwork(ethereum.networkVersion);
    if (ethereum && ethereum.isMetaMask) {
      console.log("MetaMask is installed!");
      await changeToMainNetwork();
      getWalletAddress();
    } else {
      setShowDialog("INSTALL_METAMASK");
    }
  };

  const changeToMainNetwork = async () => {
    await changeNetwork(
      (process.env.NEXT_PUBLIC_METAMASK_CHAIN as any) ?? "test",
      (err) => {
        console.log("error", err);
      }
    );
  };

  const getWalletAddress = async () => {
    const ethereum = (window as any).ethereum;
    if (ethereum && ethereum.isMetaMask && ethereum.isConnected) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    }
  };

  const BuyNft = async () => {
    const web3Obj = new web3(
      "https://mainnet.infura.io/v3/779892e85e8540f890e04a0cf3386625"
    );

    const contract = new web3Obj.eth.Contract(
      abiJson as any,
      "0x0be9D623ADE802625d3c7707563b55dA068ae502"
    );
    const a = await contract.methods
      .balanceOf("0x0be9D623ADE802625d3c7707563b55dA068ae502")
      .call();

    const ethereum = (window as any).ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("contract.methods", contract.methods);
    const nonce = await web3Obj.eth.getTransactionCount(accounts[0], "latest"); //get latest nonce
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: "0x0be9D623ADE802625d3c7707563b55dA068ae502",
            value: web3.utils.toHex(web3.utils.toWei("0.0999", "ether")),
            gas: "21000",
            data: contract.methods.mint().encodeABI(),
          },
        ],
      })
      .then((txHash: string) => {
        console.log("tx hash: ", txHash);
        onPurchase();
      })
      .catch((error: any) => console.error);

    console.log(a);
  };

  if (!walletAddress || currentNetwork !== prefferedChainId) {
    return (
      <>
        <Button
          variant="contained"
          color="warning"
          sx={{ marginLeft: "8px" }}
          onClick={connectToMetamask}
        >
          Connect
        </Button>
      </>
    );
  }

  return (
    <>
      <Snackbar
        open={showDialog === "WHITE_LIST_ERROR"}
        autoHideDuration={6000}
        onClose={() => setShowDialog(undefined)}
      >
        <Alert
          onClose={() => setShowDialog(undefined)}
          severity="error"
          sx={{ width: "100%" }}
        >
          selected wallet address is not in white list
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        color="error"
        sx={{ marginLeft: "8px" }}
        onClick={BuyNft}
      >
        Purchase
      </Button>
    </>
  );
};

export default Actions;
