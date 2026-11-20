import styles from "../styles/extra.module.css";

export default function Card({item}){
    const {text, title, src} = item;

    return (
        <div className = {"d-flex " + styles.card}>
            <img
            src={src}
            alt="Generic placeholder"
            />
            <div className="flex-grow-1 ms-3">
            <h5>{title}</h5>
            <p>
                {text}
            </p>
            </div>
        </div>
      );
}
