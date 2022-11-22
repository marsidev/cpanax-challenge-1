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

export default function Card({ product, rows }) {
  return (
    <div className={'max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-[400px]'}>
      <img className='rounded-t-lg h-[50%] md:h-[40%] object-cover w-full' src={product.thumbnail} alt={`Picture of ${product.title}`} />
      <div className='p-5'>
        <h5 className={`text-xl font-bold text-gray-900 line-clamp-${titleClampByRows[rows]}`}>{product.title}</h5>
        <h4 className='mb-3 text-lg font-medium text-gray-800 line-clamp-1'>{product.brand}</h4>
        <p className={`font-normal text-gray-700 pb-1 line-clamp-${descriptionClampByRows[rows]}`}>{product.description}</p>
      </div>
    </div>
  )
}
