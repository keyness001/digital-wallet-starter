import React from 'react';
import styles from './Asset.module.scss';
import Image from 'next/image';

interface IAssetProps {
  icon: string,
  currency: string,
  value: number,
  exChangeValue: number
  onClick?(): void
}

const Asset: React.FC<IAssetProps> = ({
  icon,
  currency,
  value,
  exChangeValue
}) => {
  return(
    <div className={styles.asset}>
      <Image src={icon} width={32} height={32} />
      <div className="value">
        <span className="value__main">{`${value} ${currency}`}</span>
        <span className="value__sub">{`${exChangeValue} VND`}</span>
      </div>
    </div>
  )
}

export default Asset;
