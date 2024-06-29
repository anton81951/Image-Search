import Modal from 'react-modal';
import styles from "./ImageModal.module.css";

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  altText: string;
  closeModal: () => void;
}

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
  },
  content: {
    top: '20px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0)',
    border: 'none',
    background: 'transparent',
    padding: '20px',
    maxHeight: '500px',
    maxWidth: '100%',
    boxSizing: 'border-box',
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
      style={customStyles as Modal.Styles}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      {imageUrl && <img className={styles.modalPicture} src={imageUrl} alt={altText} />}
    </Modal>
  );
};

export default ImageModal;