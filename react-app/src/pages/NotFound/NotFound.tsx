import styles from "./NotFound.module.css"; 

export function NotFound() {
  return (
      <div className={`${styles["wrapper"]}`}>
        <h2 className={`${styles["h2"]}`}>Упс... Ничего не найдено</h2>
        <p className={`${styles["p"]}`}>
          Попробуйте изменить запрос или ввести более точное название фильма
        </p>
      </div>
  );
}


