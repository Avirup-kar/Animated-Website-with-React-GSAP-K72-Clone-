import Footer from "../common/Footer"



const AgencebottomAnimation = () => {

  return (
    <div className='bg-black'>

    <div className='aftermidsection select-none cursor-pointer group sticky top-0 w-full h-screen overflow-hidden rounded-t-[50px]'> 
         <img className='w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105' src="https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757" alt="" />
         <h1 className="absolute inset-7 font-[font2] text-[2vw] text-white group-hover:text-[#D3FD50] group-hover:underline text-center">Voir tous les projets</h1>
         <div className="w-full absolute  inset-0 flex flex-col justify-center items-center h-full text-white bg-black/30">
            <h2 className="font-[font2] text-[2vw]">Opto-Réseau</h2>
            <h1 className="font-[font2] text-[5vw] group-hover:underline">On vous voit comme personne</h1>
         </div>
    </div>

    <div className='afterAftermidsection select-none cursor-pointer group sticky top-0 w-full h-screen overflow-hidden rounded-t-[50px]'>
        <img className='w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105' src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda" alt="" />
        <div className="w-full absolute  inset-0 flex flex-col justify-center items-center h-full text-white bg-black/30">
            <h2 className="font-[font2] text-[2vw]">Opto-Réseau</h2>
            <h1 className="font-[font2] text-[5vw] group-hover:underline">On vous voit comme personne</h1>
         </div>
    </div>

    <div className='lastsection select-none cursor-pointer group sticky top-0 w-full h-screen overflow-hidden rounded-t-[50px]'>
        <img className='w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105' src="https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821" alt="" />
        <div className="w-full absolute  inset-0 flex flex-col justify-center items-center h-full text-white bg-black/30">
            <h2 className="font-[font2] text-[2vw]">Opto-Réseau</h2>
            <h1 className="font-[font2] text-[5vw] group-hover:underline">On vous voit comme personne</h1>
         </div>
    </div>

  {/* footer */}
    <div className="sticky top-0">
      <Footer />
    </div>

    </div> 
  )
}

export default AgencebottomAnimation
