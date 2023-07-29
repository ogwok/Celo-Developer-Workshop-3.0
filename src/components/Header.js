import { useState } from 'react';
import {
  Button, Container, ModalHeader, Modal, ModalBody,
  ModalFooter, className, Input, Label, Spinner
} from 'reactstrap';
import banner from '../images/celo-1.jpg';

const Header = ({ modal, toggle, createRequest, balance, celo, loading }) => {

  // Declaring variables
  const [payeeFullName, setPayeeFullName] = useState('');
  const [payeeDescription, setPayeeDescription] = useState('');
  const [networkType, setNetworkType] = useState('')
  const [payeeGasFee, setPayeeGasFee] = useState(0);

  // Button that closes a modal.
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <>
      <header className='d-flex justify-content-between p-3'>
        <h6>CeloAssist</h6>
        <h6 className="shadow">
          {/* {celo} {" "} Celo */}
          {balance} {' '}cUSD
        </h6>

      </header>

      <br />

      <Container>
        <div className='row'>
          <div className='col-md-6 '>
            <h5>Celo Assist</h5>

            <p>celo-share is a decentralized web application platform where a 
              developer or user can assist another developer or user in paying for their gas fee, mint fee or 
              anything that might require a small of Celo or cUSD be it testnet or mainnet. </p>
            <Button color="success" onClick={toggle} disabled={loading}>Create a Request</Button>
          </div>


          <div className='col-md-6'>
            <img src={banner} alt='banner' className='br-2 rounded shadow' width="100%" />
          </div>

        </div>
      </Container>

      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={'static'}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Create a Request
        </ModalHeader>
        <ModalBody>
          <Label style={{ fontSize: "12px" }}>Fullname</Label>
          <Input type="text" placeholder="Fullname" required value={payeeFullName} onChange={(e) => setPayeeFullName(e.target.value)} />

          <br />

          <Label style={{ fontSize: "12px" }}>Description</Label>
          <Input type="textarea" placeholder="Description" required value={payeeDescription} onChange={(e) => setPayeeDescription(e.target.value)} />

          <br />

          <Label style={{ fontSize: "12px" }}>Amount</Label>
          <Input type="number" placeholder="Fee" required value={payeeGasFee} onChange={(e) => setPayeeGasFee(e.target.value)} />

          <br />

          <Label style={{ fontSize: "12px" }}>Network Type</Label>
          <Input type='select' value={networkType} required onChange={(e) => setNetworkType(e.target.value)}>
            <option value="">Select---</option>
            <option value="Testnet">Testnet</option>
            <option value="Mainnet">Mainnet</option>
          </Input>

        </ModalBody>
        <ModalFooter>
          <Button color="success"
            onClick={() => createRequest(payeeFullName, payeeDescription, payeeGasFee, networkType)}
            disabled={loading}
          >

            {!loading ?
              <span>Submit </span> :
              <>
                <Spinner size="sm">
                  Loading...
                </Spinner>
                <span>
                  {' '}Submitting
                </span>
              </>
            }
          </Button>
        </ModalFooter>
      </Modal>
    </>

  );
}

export default Header