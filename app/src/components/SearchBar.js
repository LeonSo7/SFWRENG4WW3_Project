import { Button, Form } from 'react-bootstrap';
import '../styles/components/SearchBar.css';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => (
    <Form>
        <Form.Group>
            <div id="searchBarDiv">
                <Form.Control id="searchBarInput" type="search" placeholder="Search for scoops..."/>
                <Link
                    to={{
                        pathname: "/search-results",
                        /* For testing */
                        state: { currentLat: 43.2610, currentLng: null }
                    }}
                    tabIndex="-1">
                    <Button id="searchBarBtn" type="submit" variant="primary" aria-label="search"><FiSearch/></Button>
                </Link>
            </div>
        </Form.Group>
    </Form>
);

export default SearchBar;