import React from 'react';
import styles from './WalletHeader.module.scss';
import Image from 'next/image';

const WalletHeader = () => {
  return(
    <div className={styles.walletHeader}>
      <span className="wallet-name">Ronin Wallet</span>
      <span className="user">
        <Image src='/images/user.svg' width={24} height={24} />
      </span>
    </div>
  )
}

export default WalletHeader;
