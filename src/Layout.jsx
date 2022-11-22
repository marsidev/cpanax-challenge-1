export default function Layout({ children }) {
  return (
    <main className='min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-16'>
      <div className='w-full max-w-7xl'>{children}</div>
    </main>
  )
}
