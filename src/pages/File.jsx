import React, { useState } from 'react'
import Modal from 'react-modal';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
function File() {
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
    const docs = [
        {
            uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
            fileType: "docx",
            fileName: "demo.docx"

        },
        {
            uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
            fileType: "docx",
            fileName: "demo2.docx"

        }, // Remote file
        //   { uri: require("") }, // Local File
    ];
    return (
        <div className='container-fluid'>
            <div className='row row-cols-1 row-cols-md-3 mx-3 g-4'>
                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
                    style={{ height: "700px" }} />
                <div className='button1 bg-success mx-auto'>
                    <button className='btn btn-primary float-start' style={{ background: "#198754" }} onClick={() => openModal(docs)}>
                        Preview
                    </button>
                    <button className='btn btn-primary float-end' style={{ background: "#198754" }} onClick={() => handleDownload(docs)}>
                        Download
                    </button>
                </div>
            </div>



            {/* Modal for Document Preview */}
            <Modal isOpen={!!selectedDocument} onRequestClose={closeModal}>
                <iframe src={selectedDocument} title="Document Preview" height="550px" width="100%" />
                <button className='btn btn-primary' onClick={closeModal}>
                    Close
                </button>
            </Modal>
        </div>
    )
}

export default File
