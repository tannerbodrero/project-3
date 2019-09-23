import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    
  }
  
  render() {
    return (
      <div>
        <Modal isOpen={this.props.newModal} toggle={this.props.newToggle} className={this.props.className}>
          <ModalHeader toggle={this.props.newToggle}>{this.props.item.name}</ModalHeader>
          <ModalBody>

         
          <img className="item-image" src={this.props.item.img} alt="item-image" />
        

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.newToggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.newToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;