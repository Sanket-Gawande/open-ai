import React, { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "./components/Loader"
const GenerateImage = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [prompt, setPrompt] = useState(null)
  const [error, setError] = useState("null")
  const getImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true);
    setResult([])
    const req = await fetch(`http://localhost:6789/image/generate/${prompt}`);
    const res = await req.json()
    setResult(res?.images?.data)
    setLoading(false)
  }
  console.log(result)
  return (
    <div className="w-screen h-screen bg-slate-100 p-4 overflow-y-auto">
      {
        loading ? <Loader /> : null
      }
      <Link to="/" className=" bg-white border border-primary hover:shadow-suttle text-primary rounded-md py-2 px-6 text-sm font-semibold"> &lt;  Back</Link>
      <main>
        {/* prompt */}

        <form onSubmit={(e: FormEvent<HTMLFormElement>) => getImage(e)} className=" group max-w-[900px] mx-auto w-[95%] mt-4 py-4 flex items-center justify-center flex-wrap">
          <input type="text" minLength={5}
            required
            value={prompt || ""}
            onInput={(e: any) => setPrompt(e.target.value)}
            className="rounded-l-md outline-none 
            focus:invalid:border-red-500 
            valid:border-primary
            hover:outline-none focus:outline-none border border-transparent focus:border-r-transparent   focus:border-primary py-3 w-2/3 px-4  text-sm font-semibold flex-1" placeholder="prompt: eg. dog riding bus" />

          <button className="group-hover:bg-primary min-w-max bg-primary/50 group-hover:text-white transition-all duration-300 text-primary py-3 px-5 border-white hover:border-primary border rounded-r-md text-sm font-semibold" type="submit">Generate image</button>
        </form>

        {/* image div */}
        <div className="bg-slate-200 p-5  max-w-[900px] mx-auto w-[95%]  h-full flex items-center m-4 space-y-4 space-x-4 overflow-x-auto justify-center flex-wrap ">
          {
            result.map(({ url }) =>
              <img className="w-[256px] h-[256px]" src={url || ""} />
            )
          }

        </div>
      </main>
    </div>
  )
}

export default GenerateImage