import React from 'react';
import Modal from 'react-modal';

interface Candidate {
  name: string;
  image: string;
  selected: boolean;
}

interface Ballot {
  name: string;
  candidatesPresident: Candidate[];
  candidatesVPresident: Candidate[];
  candidatesSecretary: Candidate[];
}

interface BallotDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  ballot: Ballot;
}

const BallotDetailModal: React.FC<BallotDetailModalProps> = ({ isOpen, onClose, ballot }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Ballot Details">
      <div className="p-6 bg-white">
        <h2 className="text-blue-900 text-xl mb-4">View Ballot</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Ballot Name</label>
          <div className="bg-gray-200 p-2 rounded-md">{ballot.name}</div>
        </div>
        {/* Rest of the content */}
      </div>
    </Modal>
  );
};

export default BallotDetailModal;
