import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pagination from './components/pagination'
import Card from './components/card'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products, total, skip, limit, page}) {
  const router = useRouter()

  const handlePaginationClick = (skip, limit, page) => {
    router.push({
      pathname: router.pathname,
      query: { limit, skip, page }
    })
  }

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Test next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {products?.length > 0 && products.map(product => (
            <Card data={product} />
          ))}
        </div>

        <Pagination
          skip={skip}
          limit={limit}
          page={page}
          handlePaginationClick={handlePaginationClick}
        />
      </main>
    </>
  )
}

export const getServerSideProps = async ({ params, query, ...ctx}) => {
  let limit = query?.limit || 10
  let skip = query?.skip || 0
  let page = query?.page || 1

  const data = await (await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`))?.json()

  return {
    props: {
      products: data.products,
      total: data.total,
      skip: data.skip,
      limit: data.limit,
      page
    }
  }
}
