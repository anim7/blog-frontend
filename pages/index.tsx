import type { GetStaticProps, NextPage } from "next";
import { Post } from "../global/post";
import { getPosts } from "../utils/postutils";
import { Home as HomeComponent } from "../components/Home";
import { Theme } from "../global/theme";

interface Props {
  data: Post[] | null;
  theme: Theme;
}

const Home: NextPage<Props> = ({ data, theme }) => {
  return <HomeComponent data={data} theme={theme} />;
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
