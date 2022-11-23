export default function Card({ product }) {
	return (
		<article className={'hover:scale-105 transition-all max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-[400px]'}>
			<img alt={`Picture of ${product.title}`} className={'h-[25vw] md:h-[15vw] lg:h-[10vw] xl:h-[8vw] w-full rounded-t-lg object-cover'} src={product.thumbnail} width='100%' />
			<div className='px-2 md:px-4 py-2 md:py-4'>
				<h5 className={'text-md md:text-xl font-bold text-gray-900 line-clamp-2 md:line-clamp-2'}>{product.title}</h5>
				<h4 className='mb-3 text-md md:text-lg font-medium text-gray-800 line-clamp-1'>{product.brand}</h4>
				<p className={'text-sm md:text-md font-normal text-gray-700 pb-0 line-clamp-4 md:line-clamp-4'}>{product.description}</p>
			</div>
		</article>
	)
}
