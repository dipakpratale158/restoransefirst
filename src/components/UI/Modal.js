import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import classes from './Modal.module.css';
import CartContext from '../../store/cart-context';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      {/* /////////////////////////////////////////////////////////////////// */}
      {ReactDOM.createPortal(<Backdrop  onClose={cartCtx.hideCartHandler} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
