import React from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default ({ title, body, previous, next, className, goBack }) => (
    <Modal show={ true } onHide={ goBack } className={ className }>
        <Modal.Header closeButton>
            <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { body }
        </Modal.Body>
        <Modal.Footer>
            <Grid fluid style={{ padding: 0 }}>
                <Row>
                    <Col sm={6} style={{ textAlign: 'left' }}>
                        <strong>&larr; { previous }</strong>
                    </Col>
                    <Col sm={6}>
                        <strong>{ next } &rarr;</strong>
                    </Col>
                </Row>
            </Grid>
        </Modal.Footer>
    </Modal>
)
