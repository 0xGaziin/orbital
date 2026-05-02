import styles from './Search.module.css';

function Search({ placeholder }) {
  return (
    <input type="text" placeholder={placeholder} />
  )
}

export default Search;