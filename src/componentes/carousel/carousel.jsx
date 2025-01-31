import { useEffect, useState, useRef } from "react";
import './carousel-styles.css'

function Carrousel (){
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInnerRef = useRef(null);
    const totalItems = 6;

    useEffect(() => {
      if(carouselInnerRef.current){
        const offSet = -currentIndex*100;
        carouselInnerRef.current.style.transform = `translateX(${offSet}%)`;
      }
      
    },[currentIndex]);

    return(
        <>
         <section className="box-carrousel">
            <h1>Especialidades</h1>
            <div className="carousel">
              <div className="carousel-inner" ref={carouselInnerRef}>
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
                <button className="prev" onClick={()=> setCurrentIndex((currentIndex-1+totalItems)%totalItems)}>❮</button>
                <button className="next" onClick={()=> setCurrentIndex((currentIndex+1)%totalItems)}>❯</button>
              </div>
              <div className="carousel-indicators">
                    {[...Array(totalItems)].map((_, index) => (
                    <button
                        key={index}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                    />
                    ))}
              </div>
            </div>
          </section>
        
        </>
    );
}

export default Carrousel;