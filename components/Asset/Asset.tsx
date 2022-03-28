import React from 'react';
import styles from './Asset.module.scss';
import Image from 'next/image';
import { useSWRConfig } from 'swr';
import { API_URL_DEMO, DEFAULT_WALLET_ID } from '../../constants';
import { put } from '../../helpers';

interface IAssetProps {
  icon: string,
  currency: string,
  value: number,
  exChangeValue: number|string,
  onChangeAsset(currency: string): void,
  selected?: boolean
}

const Asset: React.FC<IAssetProps> = ({
  icon,
  currency,
  value,
  exChangeValue,
  onChangeAsset,
  selected
}) => {

  return(
    <div className={`asset ${styles.asset} ${selected ? 'selected' : ''}`} onClick={(e) => onChangeAsset(currency)}>
      <Image src={icon} width={32} height={32} />
      <div className="value">
        <span className="value__main">{`${value} ${currency}`}</span>
        <span className="value__sub">{`${exChangeValue} VND`}</span>
      </div>
    </div>
  )
}

export default React.memo(Asset);
