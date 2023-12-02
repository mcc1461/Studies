import data from "./data"
import "./Image.module.scss"

const Image = () => {
  return (
    <section className="container">
      {data.map( ({src, photographer}, i) => (
        <article className="parent" key="i">
            <img className="child" src={src.large} alt="photox" />
            <p className="photographer">{photographer}</p>
        </article>
        )
    )}
    </section>
  )
}

export default Image

