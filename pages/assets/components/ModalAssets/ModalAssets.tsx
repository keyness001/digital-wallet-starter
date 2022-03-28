import React from 'react';
import Modal from '../../../../components/Modal';
import styles from './ModalAssets.module.scss';
import Image from 'next/image';
import Asset from '../../../../components/Asset';
import { exChangeToVND } from '../../../../helpers';

const ModalAssets = ({ data, onChangeAsset, handleHide = () => {} }) => {
  const {
    currency,
    assets
  } = data;

  if (!assets) return null;

  return (
    <Modal>
      <div className={`content ${styles.modalAssets}`}>
        <div className="modal-assets__header">
          Assets
          <span className="icon-close" onClick={handleHide} >
            <Image src='/images/close.svg' width={24} height={24} />
          </span>
        </div>
        <div className="modal-assets__list">
          {
            Object.entries(assets).map(([key, assetValue] : any) => {
              const exChangeValue = exChangeToVND(assetValue);
              return (
                <Asset
                  selected={key === currency}
                  icon={`/images/${key}.png`}
                  currency={key}
                  value={assetValue.value}
                  exChangeValue={exChangeValue}
                  onChangeAsset={(currency) => {
                    handleHide();
                    onChangeAsset(currency);
                  }}
                />
              )
            })
          }
        </div>
      </div>
    </Modal>
  )
}

export default ModalAssets;
