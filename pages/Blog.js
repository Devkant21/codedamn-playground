import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
                <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Codedamn Playground</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Codedamn's Playground provides the budding programmer an opportunity to learn about variety of technology stack. It provides the user a real developement playground to write software codes. <br></br>
      The altruistic move of Codedamn has made the playground freely accessible to everyone. The basic courses are being provided free of cost, allowing anyone having the intention to code and build prototypes. <br></br>
      
      </p>
      
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/Html.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">HTML/CSS</h2>
          <p className="leading-relaxed text-base">Vanilla HTML/CSS/JS playground.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/react.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">React</h2>
          <p className="leading-relaxed text-base">React.js playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/vue.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Vue 3</h2>
          <p className="leading-relaxed text-base">Vue 3 playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/solidity.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Solidity</h2>
          <p className="leading-relaxed text-base">Solidity playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/nextjs.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Next.js</h2>
          <p className="leading-relaxed text-base">Next.js playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/node.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Node.js</h2>
          <p className="leading-relaxed text-base">Node.js playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/python.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Python</h2>
          <p className="leading-relaxed text-base">Python playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/kotlin.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Kotlin</h2>
          <p className="leading-relaxed text-base">Kotlin playground</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <Image width={40} height={40} src="/swift.png" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Swift</h2>
          <p className="leading-relaxed text-base">Swift playground</p>
        </div>
      </div>
    </div>
  </div>


            
            
    
            <div className='col-span-2 space-x-8 px-4 py-2'>
            <Image width={700} height={400} src='/pp.png' alt="" />
            <p>
              The playground also has 100 days of project challenges to propel the user to take part in the competitive activities. <br></br>
              It also has an activity monitor to check the progress of the ongoing projects or courses undertaken. <br>
              </br>
              The user could also populate the goal section and set up a weekly target to accomplish the goal.
            </p>

            <Image width={700} height={400} src='/playground.png' alt="" />


            </div>
                
        
    </section>
    
  )
}

export default Blog