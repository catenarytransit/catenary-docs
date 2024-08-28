import { Feature, Features } from '@components/features'
import { FaDiscord, FaGithub } from 'react-icons/fa'

export function HomeSection() {
  return <div className="home-content">
    <div className="content-container md:px-[20vw] text-center">
      <h1 className="text-5xl lg:text-6xl inline-block mt-8">
        <span className="leading-[3rem] md:leading-[3.5rem] font-semibold">
          Welcome to the Catenary Docs!
        </span>
      </h1>
      <p className="subtitle !text-xl lg:!text-2xl my-8">Get resources for building with transit data, and help us make transit better for everyone.</p>
    </div>
    <div className="features-container">
      <div className="content-container">
        <Features>
          <Feature large={false} index={1} href={'/guide'}>
            <h3 className='mb-2 !text-2xl'>Get started with <span className='underline decoration-docs'>Maps</span></h3>
            <p className='text-xl'>Get information on transit vehicles around you, plan trips, and discover communities with Catenary Maps!</p>
          </Feature>
          <Feature large={false} index={2} href={'/platform'}>
            <h3 className='mb-2 !text-2xl'>Build with the <span className='underline decoration-docs'>Public API</span></h3>
            <p className='text-xl'>Harness Catenary's real-time data and powerful algorithms to create your own apps and sites!</p>
          </Feature>
          <Feature large={false} index={3} href={'/'}>
            <h3 className='mb-2 !text-2xl'>Discover other Catenary <span className='underline decoration-docs'>projects</span></h3>
            <p className='text-xl'>Our team is continually working to improve transit through multidisciplinary projects and experiments.</p>
          </Feature>
        </Features>
        <div className='my-6 mx-2 text-center font-medium text-lg'>
          <a href='https://github.com/catenarytransit' className='!no-underline'><FaGithub className='inline mr-2' /> Explore Catenary projects and code on GitHub &rarr;</a>
          <br />
          <a href='https://discord.gg/yVV6dguwtq' className='!no-underline'><FaDiscord className='inline mr-2' /> Chat with our community and get help on Discord &rarr;</a>
        </div>
      </div>
    </div>
    {/* more content would go here */}
  </div>
}
