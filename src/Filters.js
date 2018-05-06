import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }
    render() {
        return (
            <form className="m-5 text-center">
                <ListGroup>
                    <ListGroupItem>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.props.filterText}
                            name="filterText"
                            onChange={this.handleChange}
                        />
                        <p>
                            <input
                                type="checkbox"
                                checked={this.props.inStockOnly}
                                name="inStockOnly"
                                onChange={this.handleChange}
                            />
                            &nbsp;
                            Only show Album in stock
                        </p>
                    </ListGroupItem>
                </ListGroup>
            </form>
        );
    }
}

export default Filters;