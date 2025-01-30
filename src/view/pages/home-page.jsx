
import Carrousel from "../../componentes/carousel";
function Home() {
  return (
    <>
      <>
        <section className="hero">
          <div className="contenido-hero">
            <h2>Sabores que inspiran, servidos con pasión en cada plato.</h2>
            <div className="ubicacion">
              <a className="boton" href="#">
                Nuestro menu
              </a>
              <a className="boton" href="#">
                Haz tu pedido
              </a>
            </div>
          </div>
        </section>
        <main className="main">
          <section className="leyenda">
            <p className="p1">
              Aquí celebramos lo sencillo y lo auténtico: buena comida, sabor
              casero y una bienvenida cálida. Bienvenidos a La Sazón de vivi,
              donde siempre eres de la familia.
            </p>
          </section>
          <div className="favoritos">
            <section className="plato">
              <img src="img/portada3.png" />
              <div className="contenido">
                <h3>La favorita de los fans</h3>
                <h2>
                  Pasta carbonara - <br /> El máximo placer
                </h2>
                <p>
                  Un clásico italiano que destaca por su cremosidad, gracias a
                  una mezcla perfecta de yemas de huevo y queso parmesano. Todo
                  acompañado de pasta al dente para brindar un plato lleno de
                  sabor y tradición. Ideal para quienes buscan una versión
                  auténtica y sin carne.
                </p>
              </div>
            </section>
            <section className="plato2">
              <img src="img/portada2.avif" />
              <div className="contenido">
                <h3>Una pausa que inspira</h3>
                <h2>Recarga tu día con nuestro almuerzo ejecutivo</h2>
                <p>
                  Haz una pausa en tu día y disfruta de nuestros almuerzos
                  ejecutivos, pensados para ofrecerte sabor, calidad y rapidez.
                  Platos preparados con ingredientes frescos y un toque casero
                  que hará que cada bocado sea una experiencia reconfortante.
                  Ideal para recargar energías y continuar con éxito tu jornada.
                </p>
              </div>
            </section>
          </div>

         <Carrousel/>

          <section className="pedidos-comida">
            <div className="order">
              <h2>
                ¡Pedir tu almuerzo ejecutivo es rápido y fácil! <br />{" "}
              </h2>
              <p>
                Haz tu pedido online por WhatsApp y disfruta de una comida
                deliciosa sin complicaciones. ¡Escríbenos ahora!
              </p>
              <a className="boton" href="#">
                Pedir ahora
              </a>
            </div>
          </section>
        </main>
      </>
    </> //Cierre de los divs
  ); //Cierre del return
} //cierre de la función Home

export default Home;
