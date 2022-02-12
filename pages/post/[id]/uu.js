import Link from 'next/link';
import Test from './test';

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  return {
    props: {
      users: data,
    },
  }
}

export default function Home({ users }) {
  return (
    <>
      <h1 className='logo'>Home</h1>
      {/* <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/post/blog">
            <a>Post</a>
          </Link>
        </li>
      </ul> */}
      <Test />

      {/* {users.map((user) => {
        return(
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        )
      })} */}
    </>
  )
}