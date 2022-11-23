export default function Form({ onUpdateRows, rows }) {
	return (
		<form className='pb-4' onSubmit={e => e.preventDefault()}>
			<div className='flex flex-row gap-2 items-center'>
				<label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='items-per-row'>Products per row</label>
				<input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' id='items-per-row' max={8} min={1} type='number' value={rows} onChange={onUpdateRows} />
			</div>
		</form>
	)
}
