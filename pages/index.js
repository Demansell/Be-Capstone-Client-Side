import Head from 'next/head';
import Image from 'next/image';
import nashville2 from '../public/nashville2.png';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <Image
          src={nashville2}
          width={1400}
          height={300}
        />
        <div className="my-5">
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }} className="mt-5 text-center">We are there when people need us most</p>
          <p className="fs-3 text-black">Our purpose is to meet the immediate disaster-caused needs of individuals, families, and communities. Explore how we respond to disasters big and small, across the state of Tennessee.</p>
        </div>

        <div className="my-5">
          <p className="fs-3 fw-bold">Welcome to Nashville and the Greater Nashville Area</p>
          <p className=" fs-6 lh-lg text-black"> There is many things to do and explore in the Nashville area. This application is designed to help navigate and explore many of the different Venues around the area. Need to add more here.
          </p>
          <ul className="text-black mb-5">
            <li>We respond to an average of more than 10,000 disasters every year</li>
            <li>95% of our disaster relief workers are volunteers</li>
            <li>The vast majority of disasters we respond to are home fires</li>
          </ul>
        </div>

      </div>
    </>

  );
}

export default Home;
