// Next.js imports

// App imports
import Request from '@/api/request';
import MainPage from '@/components/main';

const Home = (props) => {
  // const data = props.data;
  return (
    <>
      <MainPage/>
    </>
  );
};

// export const getStaticProps = async () => {
  // const res = await Request('index-page');
  // return {
  //   props: {
  //     data: res.data
  //   }
  // };
// };

export default Home;
