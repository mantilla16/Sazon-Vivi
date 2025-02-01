import {useEffect, useRef, useState} from 'react'
import './styles.css'

function Menu () {

    const overlayRef = useRef(null);
    const infoDiv = useRef(null);
    const infoOrden = useRef(null);
    const nombrePlatoRef = useRef();
    const opcionesFormRef = useRef();
    const infoAddFormRef = useRef();
    const [pedidos, setPedido] = useState([]);
    const [selecciones, setSelecciones] = useState({
        arroz:'',
        ensalada:'',
        granos:'',
        sopa:''
    });

    const [medioPago, setmedioPago] = useState({
        pago:'',
        text:''
    })


    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefono = '3115697605';

    const isMobile =()=>{
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    }


    const mostrarPedido = () => {
        if (overlayRef.current && infoDiv.current) {
            overlayRef.current.style.display = "block"; 
            infoDiv.current.style.display = "flex";
            infoDiv.current.style.justifyContent="center";
          }
    }

    const listarOrden = () => {
        if (overlayRef.current && infoOrden.current) {
            overlayRef.current.style.display = "block"; 
            infoOrden.current.style.display = "flex";
            infoOrden.current.style.justifyContent="center";

          }
    }
    const cargarPedido = () =>{
        if (overlayRef.current && infoDiv.current) {
            overlayRef.current.style.display = "none"; 
            infoDiv.current.style.display = "none";
          }

        const plato =nombrePlatoRef.current.textContent;

        if(selecciones.arroz && selecciones.ensalada && selecciones.granos && selecciones.sopa){ 
            setPedido(prevState=>([...prevState,{...selecciones, plato}]));            
        } 
        
        opcionesFormRef.current.reset();
    } 
    
    
    const tomarOtroPedido =()=>{
        if (overlayRef.current && infoOrden.current) {
            overlayRef.current.style.display = "none"; 
            infoOrden.current.style.display = "none";

          }
    }

    const enviarPedidoWP = () =>{
        if (overlayRef.current && infoOrden.current) {
            overlayRef.current.style.display = "none"; 
            infoOrden.current.style.display = "none";
        }

        let mensajeCompleto = '*PEDIDO COMPLETO*%0A'
        
        pedidos.map ((pedido, index) =>{
            mensajeCompleto +=`*Pedido ${index + 1}:*%0A`
            mensajeCompleto +=`- Plato: ${pedido.plato}%0A`
            mensajeCompleto +=`- Arroz: ${pedido.arroz}%0A`
            mensajeCompleto +=`- Ensalada: ${pedido.ensalada}%0A`
            mensajeCompleto +=`- Granos: ${pedido.granos}%0A`
            mensajeCompleto +=`- Sopa: ${pedido.sopa}%0A`
        })
        mensajeCompleto +=`Medio de pago: ${medioPago.pago}%A0`
        mensajeCompleto +=`Informacion adicional: ${medioPago.text}%0A%0A`
        let mensaje = 'send?phone=' + telefono + '&text=' + mensajeCompleto;

        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
            infoAddFormRef.current.reset()
            // document.querySelector('.informacionAdicional').reset();
        }else{
            window.open(urlDesktop + mensaje, '_blank')
            infoAddFormRef.current.reset()
           // document.querySelector('.informacionAdicional').reset();
        }
    }

    const tipoSeleccion =(e)=>{
        const {name, value} = e.target;
        
            setSelecciones(prevState=>({
                ...prevState,
                [name]:value
            }));
        
    }

    const infoAdicional =(e)=>{
             
        const {name, value, type} = e.target;

        if(type === 'radio'){
            setmedioPago(prevState =>({
                ...prevState,
                [name]:value
            }))
        }else if(type === 'text'){
            setmedioPago(prevState =>({
                ...prevState,
                [name]:value
            }))
        }
    }

    useEffect( ()=> {
        if(Object.keys(selecciones).length > 0 && Object.keys(pedidos).length > 0){ //Con esta linea validamos que no se ejecute la accion si no hay selecciones y si no hay pedidos
            console.log("Holaaa: ", JSON.stringify(pedidos, null, 2));
        }

        if(Object.keys(medioPago).length > 0){
            console.log(JSON.stringify(medioPago, null, 2))
        }
    },[pedidos, medioPago])
    

    return (
        <main className="mainMenu contenedor">
        <h1 className="contenedor__titulo">Menú del día</h1>

        <div className="grid">

            <div className="menu" id="plato1__Costillas">
                <img className="menu__imagen" src="img/costillas.png" alt="costillas bbq"/>
                <div className="menu__informacion">
                    <h3 ref={nombrePlatoRef} className="menu__nombre" >Costillas BBQ</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" onClick={mostrarPedido}><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>
            
            <div className="menu"id="plato1__Albondigas">
                <img className="menu__imagen" src="img/albondigas.png" alt="albondigas"/>
                <div className="menu__informacion">
                    <h3 ref={nombrePlatoRef} className="menu__nombre">Albondigas</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" onClick={mostrarPedido} ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="menu"id="plato1__Mojarra">
                <img className="menu__imagen" src="img/mojarra.png" alt="mojarra"/>
                <div className="menu__informacion">
                    <h3 ref={nombrePlatoRef} className="menu__nombre">Mojarra frita</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" onClick={mostrarPedido} ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="menu"id="plato1__PastasChamp">
                <img className="menu__imagen" src="img/pastaschamp.jpg" alt="pastas con champiñones"/>
                <div className="menu__informacion">
                    <h3 ref={nombrePlatoRef} className="menu__nombre">Pastas con champiñones</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" onClick={mostrarPedido} ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>
            
            <div className="menu"id="plato1__BandejaPaisa">
                <img className="menu__imagen" src="img/bandejapaisa.png" alt="bandeja paisa"/>
                <div className="menu__informacion">
                    <h3 ref={nombrePlatoRef} className="menu__nombre">Bandeja paisa</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" onClick={mostrarPedido} ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>

            <div className="menu" id="plato1__PolloGuisado">
                <img className="menu__imagen" src="img/polloguisado.png" alt="pollo guisado"/>
                <div className="menu__informacion">
                    <h3 ref={nombrePlatoRef} className="menu__nombre">Pollo guisado</h3>
                    <p className="menu__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="menu__auxiliar">
                        <p className="menu_precio">$16.000</p>
                        <button className="enviarPedido" onClick={mostrarPedido} ><img className="menu__orden" src="img/hacerOrden.png" alt=""/></button>
                    </div>
                </div>
            </div>
        </div> 

        

        <div className="infoDiv" ref={infoDiv}>
            <div className="contenidoInfo">
                <h1>PEDIDO</h1>
                <div className="contenidoInfo__imagen">
                    <img className="contenidoInfo__imagen" src="img/costillas.png" alt="costillas BBQ"/>
                </div>
                <div className="contenidoInfo__descripcion">
                    <h2 id="nombre__plato">Costillas BBQ</h2><p>Granos del día(Zaragozas, lentejas) Papitas, patacones, ensalada</p>
                </div>
                <h2>Acompañamientos</h2>
                <form ref={opcionesFormRef} className="menu__opciones">
                    <fieldset className="grupo-arroz">
                        <legend className="tipo__opcion">Tipos de Arroz</legend>
                        <div>
                            <input type="radio"  name="arroz" value="coco" onChange={tipoSeleccion}/>
                            <label >Coco</label>
                        </div>
                        <div>
                            <input type="radio" name="arroz" value="blanco" onChange={tipoSeleccion}/>
                            <label >Blanco</label>
                        </div>
                        <div>
                            <input type="radio"  name="arroz" value="fideo" onChange={tipoSeleccion}/>
                            <label >Fideo</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-ensaladas">
                        <legend className="tipo__opcion">Ensalada</legend>
                        <div>
                            <input type="radio"  name="ensalada" value="sin-ensalada" onChange={tipoSeleccion}/>
                            <label >Sin ensalda</label>
                        </div>
                        <div>
                            <input type="radio"  name="ensalada" value="con-ensalada" onChange={tipoSeleccion}/>
                            <label >Con ensalada</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-granos">
                        <legend className="tipo__opcion">Granos</legend>
                        <div>
                            <input type="radio" name="granos" value="sin-granos" onChange={tipoSeleccion}/>
                            <label >Sin granos</label>
                        </div>
                        <div>
                            <input type="radio" name="granos" value="con-granos" onChange={tipoSeleccion}/>
                            <label >Con granos</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-sopas">
                        <legend className="tipo__opcion">Sopa</legend>
                        <div>
                            <input type="radio" name="sopa" value="sin-sopa" onChange={tipoSeleccion}/>
                            <label >Sin sopa</label>
                        </div>
                        <div>
                            <input type="radio" name="sopa" value="con-sopa" onChange={tipoSeleccion}/>
                            <label >Con sopa</label>
                        </div>
                    </fieldset>
                </form>
                <button id="guardar-pedido" className="añadir-pedido"  onClick={cargarPedido}>
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

        <div className='overlay' ref={overlayRef}></div>

        <div className="menuFlotante">

            <button className="OrderNow" onClick={listarOrden}>
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

        <div className="contenedor pedido" ref={infoOrden}>
            <div className="pedido__info">
                <h2>Confirmar pedido</h2>
                <p>Por favor indicar la torre y el apto. Si es fuera de alameda indicar su nombre y direccion </p>
                
                <div className="pedidoCompleto" >
                    {pedidos.map((pedido, index)=>(
                        
                            <div key={index}>
                                <h4>Pedido: {index + 1}</h4>
                                <p><strong>Plato:</strong> {pedido.plato}</p>
                                <p><strong>Arroz:</strong> {pedido.arroz}</p>
                                <p><strong>Ensalada:</strong> {pedido.ensalada}</p>
                                <p><strong>Grano:</strong> {pedido.granos}</p>
                                <p><strong>Sopa:</strong> {pedido.sopa}</p>
                                <hr></hr>
                            </div>
                        
                    ))}
                </div>

                <form ref={infoAddFormRef} className="informacionAdicional">
                    <fieldset className="medioDePago">
                        <legend className="tipo__opcion">Medio de pago</legend>
                        <div>
                            <input type="radio" name="pago" value="efectivo" onChange={infoAdicional}/>
                            <label >Efectivo</label>
                        </div>
                        <div>
                            <input type="radio" name="pago" value="transferencia" onChange={infoAdicional}/>
                            <label >transferencia</label>
                        </div>
                    </fieldset>

                    <fieldset className="grupo-direcciones">
                        <legend className="tipo__opcion">Informacion adcional</legend>
                        <div>
                            <input type="text" name="text" className="informacionAdicional-direccion" onChange={infoAdicional} placeholder="Ingrese direccion o conjunto y torre" />
                        </div>
                    </fieldset>

                </form>
                <div className="pedido__botones">
                    <button onClick={enviarPedidoWP}>Enviar pedido</button>
                    <button onClick={tomarOtroPedido}>Tomar otro pedido</button>
                </div>
            </div>
        </div>
    </main>  
    );
}

export default Menu;