import React from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';

//здесь импорт mapDispathtoProps шоб перевать кнопке по клику создать сайт
//onclick="CREATE_NEW_SITE(siteName)"   это акшин в который передается пейлоад
//import { connect } from "react-redux";
// import { createSiteAction } from "../actions";

// function mapDispatchToProps(dispatch) {
//   return {
//     createSiteAction: siteName => dispatch(createSiteAction(siteName))
//   };
// }
//акшин просто обьект который принимает тип и пейлоад 
//а редюсеры уже все обрабатываютизходяиз типа акшина
// function createSiteAction(payload) {
// 	return { type: "ADD_ARTICLE", payload }

// }

export default function Start() {
    return (
        <>
         <Container fluid>
		    <Form>
			  <Row className="mb-3">
			    <Form.Group as={Col} controlId="form">
			      <Form.Label>Create New Site</Form.Label>
			      <Form.Control type="text" placeholder="Enter site name" />
			    </Form.Group>
			  </Row>

			  <Button variant="primary" type="submit">
			    Submit new site
			  </Button>
			</Form>
		 </Container>
        </>
    )
}