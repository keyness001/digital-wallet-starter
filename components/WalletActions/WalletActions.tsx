import React from 'react';
import styles from './WalletActions.module.scss';
import Image from 'next/image';
import Button from '../../widgets/Button/Button';
import { useRouter } from 'next/router';
import { routePages } from '../../constants';

const WalletActions = () => {
  const router = useRouter();
  return(
    <div className={styles.walletActions}>
      <span className="deposit disabled">
        <Button>
          <Image src="/images/deposit.svg" width={32} height={32} />
        </Button>
        Deposit
      </span>
      <span className="send">
        <Button onClick={() => router.push(routePages.send)}>
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
