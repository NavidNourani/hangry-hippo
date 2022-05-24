import { Alert, Button, Snackbar } from "@mui/material";
// import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import web3 from "web3";
import { changeNetwork } from "../../../utils/changeNetwork";
// import { metamaskWalletAddressAtom } from "../../../../../stores/pages/priateSale";
// import { changeNetwork } from "../../../../../utils/changeNetwork";
// import AlertDialog from "../../../../organism/AlertDialog";

interface Props {
  BusdAmount?: string;
}

const prefferedChainId =
  process.env.NEXT_PUBLIC_METAMASK_CHAIN === "main" ? "56" : "97";

const Actions: FunctionComponent<Props> = ({ BusdAmount = "0.8" }) => {
  const router = useRouter();
  const justWhitelist = useMemo(() => {
    return router.pathname === "/privateSale";
  }, [router.pathname]);
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

  const checkIsWalletAddressInWhitelist = async (walletAddress: string) => {
    try {
      const res = await fetch(
        `/api/getAirdropDetail?walletAddress=${walletAddress}`
      );
      if (res.status === 200) {
        const data = await res.json();
        if (data.Whitelist === "Yes") {
          return true;
        }
      }
    } catch (e: any) {}
    return false;
  };

  const changeToMainNetwork = async () => {
    await changeNetwork(
      process.env.NEXT_PUBLIC_METAMASK_CHAIN === "main" ? "main" : "test",
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

  const buyRUNIE = async () => {
    const ethereum = (window as any).ethereum;
    if (ethereum && ethereum.isMetaMask) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const walletAddress = accounts[0];
      const isInWhiteList =
        justWhitelist && (await checkIsWalletAddressInWhitelist(walletAddress));
      if (!isInWhiteList && justWhitelist) {
        setShowDialog("WHITE_LIST_ERROR");
        return;
      }
      ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: "0x8E1fAE3461A99086Bd63EF492f77eb7f409A5DD5",
              value: web3.utils.toHex(web3.utils.toWei(BusdAmount, "ether")),
              gasLimit: web3.utils.toHex(21000),
              gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
            },
          ],
        })
        .then((txHash: string) => console.log("tx hash: ", txHash))
        .catch((error: any) => console.error);
    }
  };
  if (!walletAddress || currentNetwork !== prefferedChainId) {
    return (
      <>
        {/* <AlertDialog
          title="Important"
          text="First install MetaMask!"
          acceptText="Ok"
          cancelText="Cancel"
          onAccept={() =>
            window.open("https://metamask.io/download/", "_blank")?.focus()
          }
          onClose={() => setShowDialog(undefined)}
          open={showDialog === "INSTALL_METAMASK"}
        /> */}
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
        onClick={buyRUNIE}
      >
        Purchase
      </Button>
    </>
  );
};

export default Actions;
