import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'

import WalletHeader from './components/WalletHeader';
import WalletInfo from './components/WalletInfo';
import WalletActions from './components/WalletActions';
import WalletAssets from './components/WalletAssets';
import { useWalletInfo } from '../../hooks/useWalletInfo';
import ModalAssets from './components/ModalAssets';
import { useRouter } from 'next/router';

const WalletContainer = () => {
  const router = useRouter()
  const { data, error, changeAsset } = useWalletInfo();
  const [show, setShow] = useState(true);
  const handleChangeAsset = useCallback((currency) => {
    changeAsset(currency)
  }, [])

  if (!data) return null;

  return (
    <div>
      <div className='bg-wallet'>
        <Image src='/images/bg-wallet.png' width={333} height={343} />
      </div>
      <WalletHeader />
      <WalletInfo data={data}/>
      <WalletActions />
      <WalletAssets data={data} onChangeAsset={handleChangeAsset} />
      {/* {show ? <ModalAssets data={data} onChangeAsset={handleChangeAsset} handleHide={() => setShow(false)} /> : null } */}
    </div>
  )
}

export default WalletContainer
