import s from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <p>Footer content goes here</p>
            </div>
        </footer>
    );
};