import React from 'react';
import styles from './WalletAssets.module.scss';
import Asset from '../../../../components/Asset';

const WalletAssets = () => {
  return(
    <div className={styles.walletAssets}>
      <p className="title">Assets</p>
      <div className="list-assets">
        <Asset
          icon='/images/dollar.png'
          currency="USD"
          value={1000}
          exChangeValue={23046000}
        />
        <Asset
          icon='/images/dollar.png'
          currency="USD"
          value={1000}
          exChangeValue={23046000}
        />
        <Asset
          icon='/images/dollar.png'
          currency="USD"
          value={1000}
          exChangeValue={23046000}
        />
      </div>
    </div>
  )
}

export default WalletAssets;
