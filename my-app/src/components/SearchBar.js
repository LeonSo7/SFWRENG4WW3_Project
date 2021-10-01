import { Button, Form } from 'react-bootstrap';

const SearchBar = () => (
    <Form>
        {/* <label>
            <span></span>
        </label> */}
        {/* <input
            type="text"
            id="header-search"
            placeholder="Search for desserts"
            name="s" 
        /> */}
        <Form.Control placeholder = "Search for desserts..."/>
        <Button type="submit" variant="outline-primary">Search</Button>
    </Form>
);

export default SearchBar;