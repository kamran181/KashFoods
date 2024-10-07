import landingPageImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col text-center gap-5 -mt-16">
        <h1 className="text-5xl font-bold tracking-tight  text-orange-500 ">
            Tuck into a takeway today
        </h1>
        <span className="text-xl ">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingPageImage}/>
            <div className='flex flex-col text-center justify-center items-center gap-4 '>
                <span className='text-3xl font-bold tracking-tighter'>
                  Order takeaway even faster!
                </span>
                <span>
                 Download the KashFood's for faster order and personalised recommedation's
                </span>
                <img src={appDownloadImage}/>
            </div>

        </div>
        
    </div>
  )
}

export default HomePage