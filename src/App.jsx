import { useEffect, useState } from 'react'
import axios from 'axios'

function Layout({ children }) {
  return (
    <main className='min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-16'>
      <div className='max-w-4xl'>{children}</div>
    </main>
  )
}

function Card({ product }) {
  return (
    <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg max-h-[400px]'>
      <img class='rounded-t-lg h-[50%] md:h-[30%] object-cover w-full' src={product.thumbnail} alt={`Picture of ${product.title}`} />
      <div class='p-5'>
        <h5 class='text-xl font-bold text-gray-900 line-clamp-1 md:line-clamp-2'>{product.title}</h5>
        <h4 class='mb-3 text-lg font-medium text-gray-800 line-clamp-1'>{product.brand}</h4>
        <p class='font-normal text-gray-700 line-clamp-3 md:line-clamp-6 pb-1'>{product.description}</p>
      </div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState()
  const [data, setData] = useState()
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          setData(res.data)
          setErrors(false)
        })
        .catch((error) => {
          console.error(error)
          setErrors(true)
        })
        .finally(() => setLoading(false))
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log({ data })
  }, [data])

  if (!data || loading) {
    return (
      <Layout>
        <span>Loading...</span>
      </Layout>
    )
  }

  if (errors) {
    return (
      <Layout>
        <span>Something when wrong while fetching the data.</span>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 class='text-4xl font-bold mb-8'>List of products</h1>
      <div class='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {data.products.map((product) => {
          return <Card key={product.id} product={product}></Card>
        })}
      </div>
    </Layout>
  )
}

export default App
