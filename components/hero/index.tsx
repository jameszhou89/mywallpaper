import Input from "../input";

export default function(){
    return (
        <section className="relatve">
          <div className="mx-auto max-w-6xl px-1 py-2 md:px-5 md:py-6 lg:py-8">
            <div className="mx-auto mb-6 w-full max-w-3xl text-center md:mb-8 lg:mb-5">
              <h1 className="mb-5 text-4xl font-semibold md:text-8xl">AI Wallpaper Generator</h1>
              <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Generate the wallpaper you want.</p>
              <div className="flex justify-center">
               </div>
            </div>
          </div>
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block" />
        </section>
    )
}