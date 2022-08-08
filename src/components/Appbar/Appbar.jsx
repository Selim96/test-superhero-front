import s from './Appbar.module.css';
import Navigation from '../Navigation';

export default function Appbar() {
    return <>
        <header className={s.header}>
            <Navigation />
            <p className={s.title}>Superheros Collection</p>
        </header>
    </>
}