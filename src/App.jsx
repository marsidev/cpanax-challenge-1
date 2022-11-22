import { useState } from 'react'
import Card from './Card'
import Layout from './Layout'
import Form from './Form'
import { useFetch } from './useFetch'

function App() {
  const { data, errors, loading } = useFetch()
  const [rows, setRows] = useState(4)

  const onUpdateRows = (event) => {
    event.preventDefault()
    setRows(Number(event.target.value))
  }

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
        <span>Something went wrong while fetching the data.</span>
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
