import React, { Component, Fragment } from 'react';
import {
    Card, CardBody, CardFooter, ListGroup, ListGroupItem,
    Container
} from 'reactstrap';
import Gallery from './gallery'
import AppNavbar from '../AppNavbar';


class Diary extends Component {
    render() {
        const { id, item } = this.props;
        return (
            <div>
            <Fragment>
                <AppNavbar history={this.props.history} />
                <Container>
                <section className="jumbotron-header mb-3 mt-2">
                    <h1 className="title jumbotron-heading display-4 text-center">Today's Date is {id}</h1>
                    <p className="lead text-center">Add some pictures and comments~~~</p>
                </section>
                <Gallery item={item}></Gallery>
                <Card>
                    <CardBody>
                        <ListGroup>
                            {item.comments.map(comment => (
                                <ListGroupItem>{comment.body}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </CardBody>
                    <CardFooter>Author: Tiffany</CardFooter>
                </Card>
            </Container>
            </Fragment>

            </div>
        );
    }
}

export default Diary;