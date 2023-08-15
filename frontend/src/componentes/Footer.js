import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <footer>
            <Typography variant="body2" align="center" className="mb-2">
            © {new Date().getFullYear()} Yazbek Tattoo. Todos os direitos reservados.
            </Typography>
            <Typography variant="body2" align="center">
                Endereço: Rua das Couves, 23 - Florianópolis/SC
            </Typography>
            <Typography variant="body2" align="center" className="mb-2">
                Siga-nos no <a href="https://www.instagram.com/yazbektattoo/" style={{ marginRight: '10px'}}>Instagram</a>
                Contato via <a href="https://www.whatsapp.com/?lang=pt_BR">WhatsApp</a>
            </Typography>
        </footer>
    );
};

export default Footer;

