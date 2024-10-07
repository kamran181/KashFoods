

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
            <span className="text-3xl text-bold text-white tracking tight">
               KashFood.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-3">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
        <span className="container   mx-auto flex flex-col md:flex-row ">
            Developed by Kamran Khan
        </span>

    </div>
  )
}

export default Footer