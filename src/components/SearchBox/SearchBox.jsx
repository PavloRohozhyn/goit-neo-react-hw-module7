import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const qfn = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const id = useId();
  return (
    <div className={css.searchBlockWrapper}>
      <div>
        <label className={css.searchBoxLabel} htmlFor={id}>
          Find contacts by name
        </label>
        <input
          id={id}
          className={css.searchBoxInput}
          type="text"
          name="sbox"
          value={filter}
          onChange={qfn}
        />
      </div>
    </div>
  );
};

export default SearchBox;
