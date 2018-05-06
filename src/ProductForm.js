import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {},
            errorState: false
        };
    }
    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product };
        });
    }
    handleSave(e) {
        let result = this.validForm(this.state.product.name);
        if (result) {
            this.props.onSave(this.state.product);
            this.setState({
                product: Object.assign({}, RESET_VALUES),
                errors: {}
            });
        }
        else {
            this.setState({
                errors: {},
                errorState: true
            });
        }
        e.preventDefault();
    }
    validForm(name) {
        return name !== '';
    }
    render() {
        return (
            <form className="m-5 text-center">
                <p className="h5 mb-4">Save a new album</p>
                {this.state.errorState === true &&
                    <div className="alert alert-danger">
                        <strong>Error!</strong> Name of album should not be empty
                    </div>
                }
                <p>
                    <label>
                        Name of album
                        <br />
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}/>
                    </label>
                </p>
                <p>
                    <label>
                        Category
                        <br />
                        <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} />
                    </label>
                </p>
                <p>
                    <label>
                        Price
                        <br />
                        <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price} />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked}/>
                        &nbsp;In stock?
                    </label>
                </p>
                <input className="btn btn-primary" type="submit" value="Save" onClick={this.handleSave}/>
            </form>
        );
    }
}

export default ProductForm;