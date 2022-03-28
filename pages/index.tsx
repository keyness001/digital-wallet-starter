import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import FormInput from '../components/Input'
import Button from '../components/Button/Button';

import styles from './home.module.scss';
import { API_URL_DEMO, DEFAULT_WALLET_ID } from '../constants';
import { get } from '../helpers';

const Home: NextPage = () => {
  const [visibility, toggleVisibility] = useState(false);
  const router = useRouter();

  const login = async () => {
    return await get({
      url: API_URL_DEMO.login,
      data: {
        walletId: DEFAULT_WALLET_ID,
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      login()
      router.push('/assets');
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.loginPage} container-page`}>
        <div className='bg-login'>
          <Image src='/images/bg-login.png' width={336} height={205} />
        </div>
        <div className='logo'>
          <Image src='/images/logo.png' width={160} height={160} />
        </div>
        <p className='title'>Ronin Wallet</p>
        <p className='desc'>Your Digital Passport</p>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='enter password'
            type={visibility ? 'text' : 'password'}
            name='password'
            endIcon={<Image src='/images/eye.svg' width={24} height={24} />}
            required
            onClickIconRight={() => toggleVisibility(!visibility)}
          />
          <Button extraClass='primary'>Unlock</Button>
        </form>
      </main>
    </div>
  )
}

export default Home
