import Head from 'next/head'
import MainPage from '@/components/mainPage'
import { getPlanes } from '@/APIs/ADSBxAPI'

export default function Home () {
  return (
    <>
      <Head>
        <title>Plane Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage>
        <div style={{
          background: 'red',
          width: '300px',
          height: '100px'
        }}>

          <button onClick={getPlanes} style={{
            width: '100%',
            height: '100%',
            cursor: 'pointer'
          }} >Aperte</button>
        </div>
      </MainPage>
    </>
  )
}
