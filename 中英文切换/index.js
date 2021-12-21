import React, { useCallback, useState, useEffect } from "react";
import useWalletModel from "../../models/useWalletModel";
import { localCache } from "../../util/cache";
import logo from "../../imgs/logo.png";
import labelAbout from "../../imgs/officialWeb/labelAbout.png";
import labelGame from "../../imgs/officialWeb/labelGame.png";
import labelMarket from "../../imgs/officialWeb/labelMarket.png";
import labelRank from "../../imgs/officialWeb/labelRank.png";
import labelGamewiki from "../../imgs/officialWeb/labelGamewiki.png";
import labelPreSale from "../../imgs/officialWeb/labelPreSale.jpg";
import labelBox from "../../imgs/officialWeb/labelBox.jpg";

import headerA from "../../imgs/officialApp/headerA.png";
import headerB from "../../imgs/officialApp/headerB.png";
import headerC from "../../imgs/officialApp/headerC.png";
import headerD from "../../imgs/officialApp/headerD.png";
import headerE from "../../imgs/officialApp/headerE.png";
import headerF from "../../imgs/officialApp/headerF.jpg";
import headerG from "../../imgs/officialApp/headerG.png";

import "./index.scss";
import { Button } from "antd";

export default function WebHeader(props) {
  const { web3Loading, getweb3 } = useWalletModel();
  const walletAddress =
    localCache.get("WALLET_ADDRESS") && localCache.get("WALLET_ADDRESS")[0];

  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts) => {
      localCache.set("WALLET_ADDRESS", accounts);
      window.location.reload();
    });
  }, []);

  const handleWalletConnect = async () => {
    await getweb3().then((web3) => {
      web3.eth.getAccounts().then((result) => {
        localCache.set("WALLET_ADDRESS", result);
      });
    });
  };

  return (
    <div className="web-header">
      <img className="logo" src={logo} alt="logo" />
      <div className="nav">
        <ul>
          <li>
            <a className="labels" href="/">
              <img className="web-about" src={labelAbout} alt="" />
              <img className="app-about" src={headerA} alt="" />
            </a>
          </li>
          <li>
            <a className="labels" href="/game/farm" target="_blank">
              <img className="web-game" src={labelGame} alt="" />
              <img className="app-game" src={headerB} alt="" />
            </a>
          </li>
          <li>
            <a className="labels" href="market">
              <img className="web-market" src={labelMarket} alt="" />
              <img className="app-market" src={headerC} alt="" />
            </a>
          </li>
          <li>
            <a className="labels" href="/rank">
              <img className="web-rank" src={labelRank} alt="" />
              <img className="app-rank" src={headerD} alt="" />
            </a>
          </li>
          <li>
            <a
              className="labels"
              href="https://age-of-farming.gitbook.io/age-of-farming-whitepaper-2/PUEYrjUkahzmuygP9mlr/game-introduction"
            >
              <img className="web-wiki" src={labelGamewiki} alt="" />
              <img className="app-wiki" src={headerE} alt="" />
            </a>
          </li>
          <li>
            <a className="labels-presale" href="/pre_sales">
              <img className="web-presale" src={labelPreSale} alt="" />
              <img className="app-presale" src={headerF} alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="wallet">
        <a className="myBox" href="/myBox">
          <img className="web-box" src={labelBox} alt="" />
          <img className="app-box" src={headerG} alt="" />
        </a>
        <button className="btn" onClick={handleWalletConnect}>
          {walletAddress
            ? walletAddress.substring(0, 6) +
              "..." +
              walletAddress.substring(
                walletAddress.length - 6,
                walletAddress.length
              )
            : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
}
