import React, { Component } from "react";
import ReactPlayer from "react-player";
// import Modal from "react-responsive-modal";
import { Modal, Button, Form, Input, Tooltip } from "antd";

const Player = ({open, toggleModal, src}) => {      
    return (
      <Modal
        visible={open}
        onCancel={toggleModal}
        destroyOnClose={true}        
        center
        footer={[
          
        ]}
      >
        {/* <ReactPlayer
          url={src}
          playing={open}
          controls
          width="100%"
          height="calc(100vh - 100px)"          
        /> */}
        <embed
          src={src}
          height="800"
          width="100%"
        />
      </Modal>
    );
}

export default Player;
