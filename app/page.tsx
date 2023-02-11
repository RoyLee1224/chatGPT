import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">chat吉PT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 text"/>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 text"/>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2"> 
            <p className="infoText">"Change the ChatGPT Model to use"</p>
            <p className="infoText">"Message are store in Firebase's FireStore "</p>
            <p className="infoText">Hot Toast notifications when ChatGPT is thinking! </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 text"/>
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Homepage