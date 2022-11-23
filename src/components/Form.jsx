export default function Form({ onUpdateRows, rows }) {
	return (
		<form className='pb-4' onSubmit={e => e.preventDefault()}>
			<div className='flex flex-row gap-2 items-center'>
				<label className='block mb-2 text-md font-medium text-gray-900' htmlFor='items-per-row'>Products per row</label>

				<input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5' id='items-per-row' max={8} min={1} type='number' value={rows} onChange={onUpdateRows} />

				<input className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' id='items-per-row' max={8} min={1} step={1} type='range' value={rows} onChange={onUpdateRows} />
			</div>
		</form>
	)
}
