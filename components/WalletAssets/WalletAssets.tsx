import React from 'react';
import styles from './WalletAssets.module.scss';
import Asset from '../../widgets/Asset';
import { exChangeToVND } from '../../helpers';
import { WalletInfo } from '../../constants/types';

interface IWalletAssetsProps {
  data: WalletInfo,
  onChangeAsset: any,
}

const WalletAssets: React.FC<IWalletAssetsProps> = ({ data = {}, onChangeAsset }) => {
  const {
    currency,
    assets
  } = data;

  if (!assets) return null

  return(
    <div className={styles.walletAssets}>
      <p className="title">Assets</p>
      <div className="list-assets">
        {
          Object.entries(assets).map(([key, assetValue] : any) => {
            const exChangeValue = exChangeToVND(assetValue);
            if (key === currency) return;
            return (
              <Asset
                key={`wallet-asset-${key}`}
                icon={`/images/${key}.png`}
                currency={key}
                value={assetValue.value}
                exChangeValue={exChangeValue}
                onChangeAsset={onChangeAsset}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default WalletAssets;
