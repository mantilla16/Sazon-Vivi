function Home() {
  return (
    <>
      <>
        <header>
          <h1>LA SAZÓN DE VIVI</h1>
        </header>
        <hr />
        <div className="nav-bg">
          <nav className="navegacion-principal contenedor">
            <a href="index.html">Home</a>
            <a href="menu.html">Menu</a>
            <a href="#">Quienes somos</a>
            <a href="#">Platos de la casa</a>
          </nav>
        </div>

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

          <section className="box-carrousel">
            <h1>Especialidades</h1>
            <div className="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img src="img/albondigas.png" alt="Albóndigas" />
                </div>
                <div className="carousel-item">
                  <img src="img/bandejapaisa.png" alt="Bandeja Paisa" />
                </div>
                <div className="carousel-item">
                  <img src="img/costillas.png" alt="Costillas" />
                </div>
                <div className="carousel-item">
                  <img src="img/pastaschamp.jpg" alt="Costillas" />
                </div>
                <div className="carousel-item">
                  <img src="img/polloguisado.png" alt="Costillas" />
                </div>
                <div className="carousel-item">
                  <img src="img/mojarra.png" alt="Costillas" />
                </div>
              </div>
              <div className="carousel-nav">
                <button className="prev">❮</button>
                <button className="next">❯</button>
              </div>
              <div className="carousel-indicators">
                <button data-slide="0" className="active"></button>
                <button data-slide="1"></button>
                <button data-slide="2"></button>
                <button data-slide="3"></button>
                <button data-slide="4"></button>
                <button data-slide="5"></button>
              </div>
            </div>
          </section>

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

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Sobre Nosotros</h3>
              <p>
                Ofrecemos los mejores almuerzos ejecutivos, rápidos y
                deliciosos.
              </p>
            </div>
            <div className="footer-section">
              <h3>Contáctanos</h3>
              <p>📍 Dirección: Calle 123, Ciudad</p>
              <p>📞 Teléfono: +57 123 456 7890</p>
              <p>📲 WhatsApp: +57 987 654 3210</p>
            </div>
            <div className="footer-section">
              <h3>Síguenos</h3>
              <a href="#">Facebook</a> | <a href="#">Instagram</a> |{" "}
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 La Sazón de Vivi. Todos los derechos reservados.</p>
          </div>
        </footer>
      </>
    </> //Cierre de los divs
  ); //Cierre del return
} //cierre de la función Home

export default Home;
