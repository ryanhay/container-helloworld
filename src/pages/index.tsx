import Head from 'next/head'

// Prevent PurgeCSS from removing dynmic classes that can be set via env variable
// bg-gray-300 bg-red-300 bg-orange-300 bg-yellow-300 bg-teal-300 bg-blue-300 bg-indigo-300 bg-purple-300 bg-pink-300
// border-gray-600 border-red-600 border-orange-600 border-yellow-600 border-teal-600 border-blue-600 border-indigo-600 border-purple-600 border-pink-600

interface Props {
  data: {
    backgroundColor: string
  }
}

export default function Home({data}: Props) {
  const reqColor = data.backgroundColor || 'blue'
  const bgColor = reqColor.replace(/"/g, '').toLowerCase()

  return (
    <div className={`flex flex-col h-screen bg-${bgColor}-300`}>
      <Head>
        <title>Container Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-sans text-6xl text-gray-800 text-center m-auto">
        <p className="font-mono text-shadow-title">Hello World</p>
      </div>
      <div
        className={`container m-auto bg-white p-10 rounded-lg border-4 border-${bgColor}-600 shadow-2xl`}
      >
        <p className="text-xl mb-3">Details</p>
        <ul className="list-disc p-4">
          <li>BG_COLOR: {data.backgroundColor}</li>
        </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/background-color`)
  const data = await res.json()

  // Pass data to the page via props
  return {props: {data}}
}
