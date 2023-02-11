import { Link } from "react-router-dom"

function App() {

  return (
    <section className="h-screen w-screen bg-slate-100">
      <header className=" w-full bg-white py-3 px-6 text-center shadow-[0 0 1rem #009875]">
        <h5 className="text-primary font-semibold text-lg" >Fun with OpenAI</h5>
      </header>
      {/* main section */}
      <h4 className="font-bold py-4 px-6 text-slate-600 text-xl ">Choose a service</h4>
      <section className="flex flex-wrap pt-6 px-6">
        {
          [{ image: "https://img.freepik.com/free-vector/create-concept-illustration_114360-4462.jpg", path: "/image/generate", title: "Generate image" }].map(service =>
            <Link className="rounded-md hover:scale-105 transition-all duration-300 bg-white 
            border border-primary
            hover:shadow-suttle mx-2 my-2 w-44" to={service.path} key={service.title}>
              <img className="p-2" src={service.image} alt={service.title} />
              <button className="bg-primary w-full rounded-b-md text-white py-1 ">{service.title}</button>
            </Link>
          )
        }
      </section>
    </section>
  )
}

export default App
