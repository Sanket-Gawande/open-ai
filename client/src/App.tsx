import { Link } from "react-router-dom"

function App() {

  return (
    <section className="h-screen w-screen bg-slate-100">
      <header className=" w-full bg-white py-3 px-6 text-center shadow-[0 0 1rem #009875]">
        <h5 className="text-primary font-bold text-lg" >Fun with OpenAI</h5>
      </header>
      {/* main section */}
      <h4 className="font-bold py-4 px-6 text-slate-600 text-xl text-center bg-clip-text w-max bg-gradient-to-br via-green-500 from-slate-600 to-primary text-transparent">Choose a service</h4>
      <section className="flex flex-wrap pt-6 px-6">
        {
          [{ image: "/images.webp", path: "/image/generate", title: "Generate image" }, { path: "/essay", title: "Write essay", image: "/essay.jpg" }].map(service =>
            <Link className="rounded-md hover:scale-105 transition-all duration-300 bg-white 
            border border-primary
            h-52
            hover:shadow-suttle mx-4 my-2 w-44" to={service.path} key={service.title}>
              <img className="p-2 flex-1 h-[calc(100%-32px)] rounded-md object-cover" src={service.image} alt={service.title} />
              <button className="bg-primary w-full rounded-b-md h-8 text-white py-1 ">{service.title}</button>
            </Link>
          )
        }
      </section>
    </section>
  )
}

export default App
