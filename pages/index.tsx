import type { GetStaticProps, NextPage } from "next";
import { Post } from "../global/post";
import { getPosts } from "../utils/postutils";
import { Home as HomeComponent } from "../components/Home";

interface Props {
  data: Post[] | null;
}

const Home: NextPage<Props> = ({ data }) => {
  return <HomeComponent data={data} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  let data: Post[] | null = null;
  await getPosts()
    .then((res) => {
      data = res;
    })
    .catch((err: Error) => {
      console.error(err);
    });
  return {
    props: {
      data: data,
    },
    revalidate: 100,
  };
};
