import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Request submitted");
  };

  return (
    <>
      <header>
        <h1 className="page-title">MovieProbe</h1>
        <form
          className="request-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            className="request-input"
            placeholder="type &#8220;/&#8221; to search"
          ></input>
          <button className="request-submit">
            <FontAwesomeIcon icon={faSearch} />
            {/* <SearchIcon /> */}
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
