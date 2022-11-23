import { useEffect, useState } from 'react'

export const usePagination = () => {
	const [page, setPage] = useState()

	const onUpdatePage = page => {
		const url = new URL(window.location)
		url.searchParams.set('page', page)
		// window.history.pushState(null, '', url.toString())
		window.history.replaceState(null, '', url.toString())
		setPage(page)
	}

	useEffect(() => {
		const { searchParams } = new URL(document.location)

		if (searchParams.get('page') !== null) {
			const page = parseInt(searchParams.get('page'))

			if (isNaN(page)) {
				onUpdatePage(1)
			} else if (page > 7) {
				onUpdatePage(7)
			} else if (page < 1) {
				onUpdatePage(1)
			} else {
				setPage(page)
			}
		} else { // there is no a `page` query param
			setPage(1) // update useState only
		}
	}, [])

	return { page, onUpdatePage }
}
