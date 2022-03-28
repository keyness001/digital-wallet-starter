import React, { useCallback, useState } from 'react';

import { useWalletInfo } from '../hooks/useWalletInfo';
import ModalAssets from '../components/ModalAssets';
import { useRouter } from 'next/router';
import { routePages } from '../constants';

const AssetsContainer = () => {
  const { data, error, changeAsset } = useWalletInfo();
  const router = useRouter();
  const handleChangeAsset = useCallback((currency) => {
    changeAsset(currency)
  }, [])

  if (!data) return null;
  
  return (
    <div>
      <ModalAssets data={data} onChangeAsset={handleChangeAsset} handleHide={() => router.push(routePages.wallet)} />
    </div>
  )
}

export default AssetsContainer;
