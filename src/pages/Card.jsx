import React, { useState } from 'react';
import Modal from 'react-modal';

const Card = ({ templates }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const openModal = (doc) => {
    setSelectedDocument(doc);
  };

  const closeModal = () => {
    setSelectedDocument(null);
  };

  const handleDownload = async (doc) => {
    try {
      const response = await fetch(doc);
      const blob = await response.blob();

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'template_document';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL to free up resources
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading document:', error);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row row-cols-1 row-cols-md-3 mx-3 g-4'>
        {templates.map((item, index) => (
          <div key={index} className='card1'>
            {/* Use 'doc' instead of 'img' for the document URL */}
            <iframe src={item.doc} height="300px" width="100%" />
            <div className='button1 bg-success mx-auto'>
              <button className='btn btn-primary float-start' style={{background:"#198754"}} onClick={() => openModal(item.doc)}>
                Preview
              </button>
              <button className='btn btn-primary float-end'style={{background:"#198754"}} onClick={() => handleDownload(item.doc)}>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Document Preview */}
      <Modal isOpen={!!selectedDocument} onRequestClose={closeModal}>
        <iframe src={selectedDocument} title="Document Preview" height="550px" width="100%" />
        <button className='btn btn-primary' onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Card;