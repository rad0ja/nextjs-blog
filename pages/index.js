export default function Blog({ posts }) {
  return (
   <div>
    <p>{posts.name}</p>
    <p>{posts.summonerLevel}</p>
   </div> 
  )
  
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/test')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}