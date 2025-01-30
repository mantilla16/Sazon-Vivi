
import './styles.css'

function Menu () {
    return (
        <main className="mainMenu contenedor">
        <h1 className="contenedor__titulo">Menú del día</h1>

        <div className="grid">

            <div className="menu" id="plato1__Costillas">
                <img className="menu__imagen" src="img/costillas.png" alt="costillas bbq"/>
                <div className="menu__informacion">
                    <h3 className="menu__nombre">Costillas BBQ</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>
            
            <div className="menu"id="plato1__Albondigas">
                <img className="menu__imagen" src="img/albondigas.png" alt="albondigas"/>
                <div className="menu__informacion">
                    <h3 className="menu__nombre">Albondigas</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="menu"id="plato1__Mojarra">
                <img className="menu__imagen" src="img/mojarra.png" alt="mojarra"/>
                <div className="menu__informacion">
                    <h3 className="menu__nombre">Mojarra frita</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="menu"id="plato1__PastasChamp">
                <img className="menu__imagen" src="img/pastaschamp.jpg" alt="pastas con champiñones"/>
                <div className="menu__informacion">
                    <h3 className="menu__nombre">Pastas con champiñones</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>
            
            <div className="menu"id="plato1__BandejaPaisa">
                <img className="menu__imagen" src="img/bandejapaisa.png" alt="bandeja paisa"/>
                <div className="menu__informacion">
                    <h3 className="menu__nombre">Bandeja paisa</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="menu" id="plato1__PolloGuisado">
                <img className="menu__imagen" src="img/polloguisado.png" alt="pollo guisado"/>
                <div className="menu__informacion">
                    <h3 className="menu__nombre">Pollo guisado</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>
        </div> 

        <div className="infoDiv" id="infoDiv">
            <div className="contenidoInfo">
                <h1>PEDIDO</h1>
                <div className="contenidoInfo__imagen">
                    <img className="contenidoInfo__imagen" src="img/costillas.png" alt="costillas BBQ"/>
                </div>
                <div className="contenidoInfo__descripcion">
                    <h2 id="nombre__plato">Costillas BBQ</h2><p>Granos del día(Zaragozas, lentejas) Papitas, patacones, ensalada</p>
                </div>
                <h2>Acompañamientos</h2>
                <form className="menu__opciones">
                    <fieldset className="grupo-arroz">
                        <legend className="tipo__opcion">Tipos de Arroz</legend>
                        <div>
                            <input type="radio"  name="arroz" value="coco"/>
                            <label >Coco</label>
                        </div>
                        <div>
                            <input type="radio" name="arroz" value="blanco"/>
                            <label >Blanco</label>
                        </div>
                        <div>
                            <input type="radio"  name="arroz" value="fideo"/>
                            <label >Fideo</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-ensaladas">
                        <legend className="tipo__opcion">Ensalada</legend>
                        <div>
                            <input type="radio"  name="ensalada" value="sin-ensalada"/>
                            <label >Sin ensalda</label>
                        </div>
                        <div>
                            <input type="radio"  name="ensalada" value="con-ensalada"/>
                            <label >Con ensalada</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-granos">
                        <legend className="tipo__opcion">Granos</legend>
                        <div>
                            <input type="radio" name="granos" value="sin-granos"/>
                            <label >Sin granos</label>
                        </div>
                        <div>
                            <input type="radio" name="granos" value="con-granos"/>
                            <label >Con granos</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-sopas">
                        <legend className="tipo__opcion">Sopa</legend>
                        <div>
                            <input type="radio" name="sopa" value="sin-sopa"/>
                            <label >Sin sopa</label>
                        </div>
                        <div>
                            <input type="radio" name="sopa" value="con-sopa"/>
                            <label >Con sopa</label>
                        </div>
                    </fieldset>
                </form>
                <button id="guardar-pedido" className="añadir-pedido" >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M12.5 17h-6.5v-14h-2" />
                    <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                  </button>
            </div>
        </div>
        <div id="overlay"></div>

        <div className="menuFlotante">
            <button className="OrderNow" >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5" />
                <path d="M19 21v1m0 -8v1" />
                <path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2" />
                <path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1" />
                <path d="M8 14v.01" />
                <path d="M8 17v.01" />
                <path d="M12 13.99v.01" />
                <path d="M12 17v.01" />
              </svg>
            </button>
        </div>

        <div className="contenedor pedido" id="Listapedidos">
            <div className="pedido__info">
                <h2>Confirmar pedido</h2>
                <p>Por favor indicar la torre y el apto. Si es fuera de alameda indicar su nombre y direccion </p>
                
                <div className="enviarOrden" id="enviarOrden"></div>

                <form className="informacionAdicional">
                    <fieldset className="medioDePago">
                        <legend className="tipo__opcion">Medio de pago</legend>
                        <div>
                            <input type="radio" name="pago" value="efectivo"/>
                            <label >Efectivo</label>
                        </div>
                        <div>
                            <input type="radio" name="pago" value="transferencia"/>
                            <label >transferencia</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-direcciones">
                        <legend className="tipo__opcion">Informacion adcional</legend>
                        <div>
                            <input type="text" className="informacionAdicional-direccion" id="infoadicional" placeholder="Ingrese direccion o conjunto y torre" />
                        </div>
                    </fieldset>

                </form>
                <div className="pedido__botones">
                    <button >Enviar pedido</button>
                    <button >Tomar otro pedido</button>
                </div>
            </div>
        </div>
    </main>  
    );
}

export default Menu;