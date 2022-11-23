import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { usePagination } from '../hooks/usePagination'
import Card from './Card'
import Layout from './Layout'
import Form from './Form'
import Pagination from './Pagination'

function App() {
	const [rows, setRows] = useState(4)
	const { page, onUpdatePage } = usePagination()
	const { data, errors, loading } = useFetch(page)

	const onUpdateRows = event => {
		event.preventDefault()
		setRows(Number(event.target.value))
	}

	if (!data || loading) {
		return (
			<Layout>
				<div className='h-full flex items-center'>
					<span>Loading...</span>
				</div>
			</Layout>
		)
	}

	if (errors) {
		return (
			<Layout>
				<div className='h-full flex items-center'>
					<span>Something went wrong while fetching the data.</span>
				</div>
			</Layout>
		)
	}

	return (
		<Layout>
			<header className='flex flex-col w-full'>
				<h1 className='text-4xl font-bold mb-8'>List of products</h1>

				<div className='flex flex-col md:flex-row justify-between pb-4'>
					<Form rows={rows} onUpdateRows={onUpdateRows} />
					<Pagination current={page} pages={7} onUpdatePage={onUpdatePage} />
				</div>
			</header>

			<div className={`grid grid-cols-${rows} gap-4`}>
				{data.products.map(product => {
					return <Card key={product.id} product={product} />
				})}
			</div>

			<div className='flex flex-col w-full md:items-end mt-8'>
				<Pagination current={page} pages={7} onUpdatePage={onUpdatePage} />
			</div>
		</Layout>
	)
}

export default App
