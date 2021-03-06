import React from 'react';
import styles from './WalletInfo.module.scss';
import Image from 'next/image';
import { exChangeToVND, copyToClipboardWithCommand } from '../../helpers';
import { WalletInfo } from '../../constants/types';
import { DEFAULT_WALLET_ID } from '../../constants';

interface IWalletInfoProps {
  data: WalletInfo,
}

const WalletInfo: React.FC<IWalletInfoProps> = ({ data = {} }) => {
  const {
    walletId = DEFAULT_WALLET_ID,
    currency = 'USD',
    assets
  } = data;

  if (!assets) return null
  const mainAccount = assets[currency];

  return(
    <div className={styles.walletInfo}>
      <div className="wallet-address">
        My Wallet
        <span className='address'>{`(${walletId})`}</span>
        <span className='copy' onClick={() => { copyToClipboardWithCommand(walletId) }}>
          <Image src='/images/copy.png' width={16} height={16} />
        </span>
      </div>
      <div className="wallet-content">
        <strong className="wallet-content__value">{`${mainAccount.value} ${currency}`}</strong>
        <p className="wallet-content__sub-value">{`${exChangeToVND(mainAccount)} VND`}</p>
        <span className='sub-logo'>
          <Image src='/images/small-logo.png' width={40} height={40} />
        </span>
      </div>
    </div>
  )
}

export default WalletInfo;
