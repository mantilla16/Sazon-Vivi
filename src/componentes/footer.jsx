function Footer() {
    return (
        <><footer className="footer">
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
        </footer></>
    );
}

export default Footer;