import { Button, Form } from 'react-bootstrap';
import '../styles/components/SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = () => (
    <Form>
        <Form.Group>
            <div id="searchBarDiv">
                <Form.Control id="searchBarInput" type="search" placeholder="Search for desserts..."/>
                <Link
                    to={{
                        pathname: "/search-results",
                    }}>
                    <Button type="submit" variant="primary">Search</Button>
                </Link>
            </div>
        </Form.Group>
    </Form>
);

export default SearchBar;