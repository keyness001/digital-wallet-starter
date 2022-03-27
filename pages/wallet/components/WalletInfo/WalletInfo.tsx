import React from 'react';
import styles from './WalletInfo.module.scss';
import Image from 'next/image';

const WalletInfo = () => {
  return(
    <div className={styles.walletInfo}>
      <div className="wallet-address">
        My Wallet
        <span className='address'>(7300 3777 3888 3334)</span>
        <span className='copy'>
          <Image src='/images/copy.png' width={16} height={16} />
        </span>
      </div>
      <div className="wallet-content">
        <strong className="wallet-content__value">1,000 USD</strong>
        <p className="wallet-content__sub-value">23,046,000 VND</p>
        <span className='sub-logo'>
          <Image src='/images/small-logo.png' width={40} height={40} />
        </span>
      </div>
    </div>
  )
}

export default WalletInfo;
