import { Feature, Features } from '@components/features'
import { FaDiscord, FaGithub } from 'react-icons/fa'

export function HomeSection() {
  return <div className="home-content">
    <div className="content-container md:px-[20vw] text-center">
      <h1 className="!text-4xl lg:!text-6xl inline-block mt-8 subtitle lg:py-[30px]">
        <span className="leading-[3rem] md:leading-[3.5rem] font-semibold">
          Welcome to the Catenary Docs!
        </span>
      </h1>
    </div>
    <div className="features-container">
      <div className="content-container">
        <Features>
          <Feature large={false} index={1} href={'/guide'}>
            <h3 className='mb-2 !text-2xl'>Get started with <span className='underline decoration-seashore'>Maps</span></h3>
            <p className='text-xl'>Get information on transit vehicles around you, plan trips, and discover communities with Catenary Maps!</p>
          </Feature>
          <Feature large={false} index={2} href={'/contributing'}>
            <h3 className='mb-2 !text-2xl'><span className='underline decoration-seashore'>Contribute</span> to Catenary</h3>
            <p className='text-xl'>Catenary is a community-driven project that cares about its developers. Learn how to get involved and how we&apos;re here for you.</p>
          </Feature>
          <Feature large={false} index={3} href={'/publicapi'}>
            <h3 className='mb-2 !text-2xl'>Building with our <span className='underline decoration-seashore'>Public API</span></h3>
            <p className='text-xl'>Harness the power of Catenary Maps to create your own awesome apps and tools!</p>
          </Feature>
        </Features>
        <div className='my-6 mx-2 text-center font-medium text-xl'>
          <a href='https://github.com/catenarytransit' className='!no-underline'><FaGithub className='inline mr-2' /> Explore Catenary projects and code on GitHub &rarr;</a>
          <br className='my-1 inline-block' />
          <a href='https://discord.gg/yVV6dguwtq' className='!no-underline'><FaDiscord className='inline mr-2' /> Chat with our community and get help on Discord &rarr;</a>
          <br className='py-3 inline-block' />
          <p className='text-sm pt-2'>Header image: Christine Nguyen, <i>Long Beach</i></p>
        </div>
      </div>
    </div>
    {/* more content would go here */}
  </div>
}
