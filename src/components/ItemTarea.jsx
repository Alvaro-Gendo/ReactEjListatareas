import {ListGroup, Button} from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <div className='my-2'>
            <ListGroup.Item className="d-flex justify-content-between">
                {props.nombreTarea}
                <Button variant='danger' onClick={() => props.borrarTarea(props.nombreTarea)}>Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;