import Modal from 'react-modal';
import styles from "./ImageModal.module.css";
import { object } from 'prop-types';

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
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -20%)',
    border: 'none',
    background: 'transparent',
    padding: 0,
    width: '80%',
    maxWidth: '250px',
    maxHeight: '500px',
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