import { forwardRef } from "react";
import styles from "./SearchInput.module.css";
import { SearchInputProps } from "./SearchInput.types"; 

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ img, placeholder, value, onChange, onKeyDown, onButtonClick }, ref) => {
    return (
      <form className={`${styles['form-wrapper']}`} onSubmit={(e) => e.preventDefault()}>
        {img && (
          <button type="button" className={`${styles['input-button']}`} onClick={onButtonClick}>
            <img src={img} alt="Картинка поиска" className={`${styles['input-img']}`} />
          </button>
        )}
        <input
          ref={ref}
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
);

export default SearchInput;

