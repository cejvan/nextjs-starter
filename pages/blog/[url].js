import { useRouter } from "next/router"

const BlogPage = props => {

    const router = useRouter()

    return(
        <div>{router.query.url}</div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query.url)

    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default BlogPage