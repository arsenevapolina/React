import styles from "./SearchInput.module.css";

function SearchInput({
  img,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onButtonClick,
}) {
  return (
    <form className={`${styles['form-wrapper']}`} onSubmit={(e) => e.preventDefault()}>
      {img && (
        <button type="button" className={`${styles['input-button']}`} onClick={onButtonClick}>
          <img src={img} alt="Картинка поиска" className={`${styles['input-img']}`} />
        </button>
      )}
      <input
        type="text"
        name="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        onKeyDown={onKeyDown}
      />
    </form>
  );
}

export default SearchInput;
