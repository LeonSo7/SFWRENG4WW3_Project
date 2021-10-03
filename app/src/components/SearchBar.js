import { Button, Form } from 'react-bootstrap';
import '../styles/components/SearchBar.css'

const SearchBar = () => (
    <Form>
        <Form.Group>
            <div id="searchBarDiv">
                <Form.Control id="searchBarInput" type="search" placeholder="Search for desserts..."/>
                <Button type="submit" variant="primary">Search</Button>
            </div>
        </Form.Group>
    </Form>
);

export default SearchBar;