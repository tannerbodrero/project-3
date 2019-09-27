import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./modal.css"



class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    
  }
  
  render() {
    return (
      <div className="modal-component">
        <Modal isOpen={this.props.newModal} toggle={this.props.newToggle} className={this.props.className}>
          <ModalHeader className="header-component" toggle={this.props.newToggle}>{this.props.item.name}</ModalHeader>
          <ModalBody className="body-component">
          
          <img className="item-image" src={this.props.item.img} alt="item-tile-thumbnail" />
          <h5>Posted by: {this.props.item.postedBy}</h5>
          <h5>Email: {this.props.item.email}</h5>
          <h5>Details: {this.props.item.details}</h5>
          <h5>Exchange for: {this.props.item.lookingFor}</h5>
        

          </ModalBody>
          <ModalFooter className="footer-component">
            <Button className="viewButton" href="/view" color="success" onClick={this.props.newToggle}>View more</Button>{' '}
            <Button className="exchangeButton" color="primary" onClick={this.props.newToggle}>Request exchange</Button>{' '}
            <Button color="secondary" onClick={this.props.newToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;