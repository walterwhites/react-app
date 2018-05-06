import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
    }
    destroy() {
        this.props.onDestroy(this.props.product.id);
    }
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <ListGroup className="m-4 text-center">
                <ListGroupItem>
                <tr>
                    <td>{name}</td>
                    <td>{this.props.product.price}</td>
                    <td><button className="btn btn-danger" onClick={this.destroy}>DELETE</button></td>
                </tr>
                </ListGroupItem>
            </ListGroup>
        );
    }
}

export default ProductRow;