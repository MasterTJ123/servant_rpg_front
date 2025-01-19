import styles from './botaoRedondo.module.css';

export default function BotaoRedondo({url, texto}) {
    return (
        <a href={url} className={styles.botaoRedondo}>
            {texto}
        </a>
    );
}