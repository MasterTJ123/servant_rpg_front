import styles from './botaoRedondoSubmit.module.css';

export default function BotaoRedondoSubmit({handleSubmit, texto}) {
    return (
        <button type="submit" onClick={handleSubmit} className={styles.botaoRedondoSubmit}>
            {texto}
        </button>
    );
}