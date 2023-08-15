import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
    display: 'flex',
    backgroundColor: '#a51d1d',
    padding: '30px',
    flexDirection: 'column', 
    alignItems: 'center',
    paddingBottom: '3%',
    paddingTop: '2.5%',
    justifyContent: 'center'
});

const LinkColor = styled('a')({
    color: '#b9b9b9',
    textDecoration: 'underline',
    fontWeight: 'bold'
});

const Footer = () => {
    return (
        <FooterContainer>
            <Typography variant="body3" align="center" color="#b9b9b9">
            © {new Date().getFullYear()} Yazbek Tattoo. Todos os direitos reservados.
            </Typography>
            <Typography variant="body3" align="center" color="#b9b9b9">
                Endereço: Rua das Couves, 23 - Florianópolis/SC
            </Typography>
            <Typography variant="body3" align="center" color="#b9b9b9">
                Siga-nos no <LinkColor href="https://www.instagram.com/yazbektattoo/" style={{ marginRight: '10px'}}>Instagram</LinkColor>
                Contato via <LinkColor href="https://www.whatsapp.com/?lang=pt_BR">WhatsApp</LinkColor>
            </Typography>
        </FooterContainer>
    );
};

export default Footer;

