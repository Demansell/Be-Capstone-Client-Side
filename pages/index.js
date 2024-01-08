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
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }} className="mt-5 text-center">Welcome to Nashville!!</p>
          <p style={{ fontSize: '1.5rem' }} className="fs-3 text-black"> the essential Nashville event planning app, offers an intuitive interface, diverse venue choices, and abundance of features. Detailed descriptions make the venue selection process effortless, ensuring stress-free event planning in the Greater Nashville area.</p>
        </div>

        <div className="my-5">
          <p className="fs-3 fw-bold">Welcome to Nashville and the Greater Nashville Area</p>
          <p className=" fs-6 lh-lg text-black"> One of the standout features of Welcome to Nashville is its user-friendly interface. The apps design is clean, intuitive, and easy to navigate. The streamlined menu allows users to effortlessly browse through a wide array of venues, each accompanied by detailed descriptions, high-resolution images, and pricing information. The search and filter options make it a breeze to narrow down choices based on specific criteria such as hour of operations, pricing, and location.
          </p>

          <p className=" fs-6 lh-lg text-black"> Other features include:
          </p>
          <ul className="text-black mb-5">
            <li>Random Venue Selector,</li>
            <li>Details page for each venues relevant information,</li>
            <li>Ability to add more venues,</li>
            <li>Ability to add people going to a venue and times going</li>

          </ul>
        </div>

      </div>
    </>

  );
}

export default Home;
