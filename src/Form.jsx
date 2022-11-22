export default function Form({ onUpdateRows, rows }) {
  return (
    <form className='pb-4' onSubmit={e => e.preventDefault()}>
      <div className='flex flex-row gap-2 items-center'>
        <label htmlFor='items-per-row' className='block mb-2 text-sm font-medium text-gray-900'>Products per row</label>
        <input type='number' id='items-per-row' min={1} max={8} value={rows} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' onChange={onUpdateRows} />
      </div>
    </form>
  )
}
