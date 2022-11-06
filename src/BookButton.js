import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

class BookButton extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const MyLink = props => <Link to={`/books/${this.props.id}`} {...props} />
        return (
        <Button component={MyLink} color="primary">
        {this.props.name}
      </Button>);
    }
}

export default BookButton;