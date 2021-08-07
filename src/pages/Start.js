import React from 'react';
//import {Container, Form, Row, Col, Button} from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux'
import { createNewSite } from '../store/builderSlice'

export default function Start() {
    const dispatch = useDispatch()

    return (
        <>    
		    <div>
			  <button onClick={() => {
			  	dispatch(createNewSite('newSite'))
			  }}
			  >
			  create site
			  </button>  
			</div>
        </>
    )
}

//здесь главная проблема в том что не получается отпрвлять полььзовательский ввод т.е
//имя сайта в стор
//по большому счету остался красивый дизайн(заморочиться с бутстрап)
//роутеры тип кто куда раскидать
//интегрировать пресистент(локал сторедж) с стором т.е найти библиотеку для реакт
//ДнД библиотека для реакт
//пва воркеры

// <Form onSubmit={onFormSubmit}>
//             <Form.Control type="text" name='mama'/>
// 	        <Button type="submit">
// 	        Submit
// 	      </Button>
// 	    </Form>