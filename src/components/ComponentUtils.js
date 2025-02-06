import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { CardWithImage } from "./Card";
import { Col } from 'react-bootstrap';
import Laravel from "../assets/img/skills/laravel.png";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    { 
                        Object.entries(props?.itemList)?.map(([category, items], categoryIndex) => (
                            <div>
                                <h3 className={categoryIndex === 0 ? '' : 'mt-4'}>{category}</h3>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                    {items.map(item => (
                                        <CardWithImage
                                            title={item.title}
                                            imgUrl={item.imageUrl}
                                            showDescription={item.showDescription}
                                            description={item.description}
                                            siteUrl={item.siteUrl}
                                            />
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                {/* </div> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export const IconModalButton = function (props) {
    const [modalShow, setModalShow] = React.useState(false);
    const { itemList } = props
    return (
        <>
            <MyVerticallyCenteredModal
                itemList={itemList}
                modalTitle={props.modalTitle}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div className="text-center">
            <button onClick={() => setModalShow(true)} type="button" className="btn btn-primary mx-auto">
                {props.btnTitle}
            </button>
            </div>
            {/* <button onClick={() => setModalShow(true)} type="button" className="btn btn-primary text-center">{props.btnTitle}</button> */}
        </>
    );
}

export const SimpleButton = function (prop) {
    return (
        <>
            <button type="button" className="btn btn-primary">Primary</button>
        </>
    )
}
