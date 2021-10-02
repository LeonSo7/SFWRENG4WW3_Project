import { Button, Form } from 'react-bootstrap';
import '../styles/components/SearchBar.css'

const SearchBar = () => (
    <Form>
        <Form.Group>
            <div class="searchBarDiv">
                <Form.Control class="searchBarInput" type="search" placeholder="Search for desserts..."/>
                <Button type="submit" variant="outline-primary">Search</Button>
            </div>
        </Form.Group>
    </Form>
);

export default SearchBar;