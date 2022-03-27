import React from 'react';
import styles from './WalletActions.module.scss';
import Image from 'next/image';
import Button from '../../../../components/Button/Button';

const WalletActions = () => {
  return(
    <div className={styles.walletActions}>
      <span className="deposit disabled">
        <Button>
          <Image src="/images/deposit.svg" width={32} height={32} />
        </Button>
        Deposit
      </span>
      <span className="send">
        <Button>
          <Image src="/images/send.svg" width={32} height={32} />
        </Button>
        Send
      </span>
      <span className="swap disabled">
        <Button>
          <Image src="/images/swap.svg" width={32} height={32} />
        </Button>
        Swap
      </span>
    </div>
  )
}

export default WalletActions;
