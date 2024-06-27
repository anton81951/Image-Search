import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  altText: string;
  closeModal: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    padding: 0,
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  altText,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      {imageUrl && <img src={imageUrl} alt={altText} />}
    </Modal>
  );
};

export default ImageModal;