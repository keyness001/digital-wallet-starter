import React, { useCallback, useState } from 'react';
import Image from 'next/image'

import WalletHeader from '../components/WalletHeader';
import WalletInfo from '../components/WalletInfo';
import WalletActions from '../components/WalletActions';
import WalletAssets from '../components/WalletAssets';
import { useWalletInfo } from '../hooks/useWalletInfo';

const WalletContainer = () => {
  const { data, error, changeAsset } = useWalletInfo();
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
    </div>
  )
}

export default WalletContainer
