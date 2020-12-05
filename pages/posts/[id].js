import Head from "next/head";
import { getSettings, getPostIds, getPostById } from "../../lib/cms";

import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import PostDetail from "../../components/PostDetail/PostDetail";

export default function Home({ settings, post }) {
  const { title } = post;
  return (
    <Layout settings={settings}>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <PostDetail item={post} />
      </Container>
    </Layout>
  );
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const id = params.id;
  const settings = await getSettings();
  const post = await getPostById(id);
  return {
    props: {
      settings,
      post
    }
  };
}
