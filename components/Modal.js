import React from 'react'
import {Select, Button, Modal} from 'flowbite-react'



export default function ReactModal () {

    return (
        <>
        
        <React.Fragment>
  <div className="flex flex-wrap gap-4">
    <div className="w-40">
      <Select
        defaultValue="center"
        onChange={onChange}
      >
        <option value="center">
          Center
        </option>
        <option value="top-left">
          Top left
        </option>
        <option value="top-center">
          Top center
        </option>
        <option value="top-right">
          Top right
        </option>
        <option value="center-left">
          Center left
        </option>
        <option value="center-right">
          Center right
        </option>
        <option value="bottom-right">
          Bottom right
        </option>
        <option value="bottom-center">
          Bottom center
        </option>
        <option value="bottom-left">
          Bottom left
        </option>
      </Select>
    </div>
    <Button onClick={onClick}>
      Toggle modal
    </Button>
  </div>
  <Modal
    show={false}
    position="center"
    onClose={onClose}
  >
    <Modal.Header>
      Small modal
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6 p-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onClick}>
        I accept
      </Button>
      <Button
        color="gray"
        onClick={onClick}
      >
        Decline
      </Button>
    </Modal.Footer>
  </Modal>
</React.Fragment>
        </>
    )
}