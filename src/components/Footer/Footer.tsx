import s from './Footer.module.css';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from '@mui/material/Link';

export const Footer = () => {
    return (
        <footer className={s.footer}>
                <div>© 2023</div>
                <div className={s.social}>
                    <Stack direction="row" spacing={1}>
                        <IconButton   size="medium" color="inherit" aria-label="telegram" href="https://example.com" target="_blank" rel="noopener">
                            <TelegramIcon fontSize={'medium'}/>
                        </IconButton>
                        <IconButton   size="medium" color="inherit" aria-label="instagram" href="https://example.com" target="_blank" rel="noopener">
                            <InstagramIcon fontSize={'medium'} />
                        </IconButton>
                    </Stack>
                </div>
        </footer>
    );
};