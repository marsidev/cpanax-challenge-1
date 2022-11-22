import { useEffect, useState } from 'react'
import axios from 'axios'

function Layout({ children }) {
  return (
    <main className='min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-16'>
      <div className='w-full max-w-7xl'>{children}</div>
    </main>
  )
}

function Card({ product, rows }) {
  const descriptionClampByRows = {
    1: 8,
    2: 7,
    3: 7,
    4: 6,
    5: 6,
    6: 5,
    7: 4,
    8: 4,
  }

  const titleClampByRows = {
    1: 3,
    2: 2,
    3: 2,
    4: 2,
    5: 2,
    6: 1,
    7: 1,
    8: 1,
  }

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg max-h-[400px]'>
      <img className='rounded-t-lg h-[50%] md:h-[40%] object-cover w-full' src={product.thumbnail} alt={`Picture of ${product.title}`} />
      <div className='p-5'>
        <h5 className={`text-xl font-bold text-gray-900 line-clamp-${titleClampByRows[rows]}`}>{product.title}</h5>
        <h4 className='mb-3 text-lg font-medium text-gray-800 line-clamp-1'>{product.brand}</h4>
        <p className={`font-normal text-gray-700 pb-1 line-clamp-${descriptionClampByRows[rows]}`}>{product.description}</p>
      </div>
    </div>
  )
}

function Form({ onUpdateRows, rows }) {
  return (
    <form className='pb-4'>
      <div className='flex flex-row gap-2 items-center'>
        <label htmlFor='items-per-row' className='block mb-2 text-sm font-medium text-gray-900'>Products per row</label>
        <input type='number' id='items-per-row' min={1} max={8} value={rows} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' onChange={onUpdateRows} />
      </div>
    </form>
  )
}

function App() {
  const [loading, setLoading] = useState()
  const [data, setData] = useState()
  const [errors, setErrors] = useState(false)
  const [rows, setRows] = useState(4)

  const onUpdateRows = (event) => {
    event.preventDefault()
    setRows(Number(event.target.value))
  }

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
      <h1 className='text-4xl font-bold mb-8'>List of products</h1>

      <Form onUpdateRows={onUpdateRows} rows={rows} />

      <div className={`grid grid-cols-${rows} gap-4`}>
        {data.products.map((product) => {
          return <Card rows={rows} key={product.id} product={product}></Card>
        })}
      </div>
    </Layout>
  )
}

export default App
