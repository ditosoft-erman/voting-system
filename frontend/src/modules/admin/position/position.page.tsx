import React, { useState } from 'react';
import Modal from '../../../components/modal/add-position';

const PositionPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false); // Changed from isModalOpen to modalOpen
  const [position, setPosition] = useState('');
  const [maxVoteCount, setMaxVoteCount] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSave = () => {
    // Save the data logic here
    console.log('Position:', position);
    console.log('Max Vote Count:', maxVoteCount);
    closeModal();
  };

  return (
    <div>
      <h1>Position Page</h1>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Position
      </button>

      <Modal isOpen={modalOpen} title="Add Position" onClose={closeModal}>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded bg-gray-200"
              placeholder="Enter position"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Max Vote Count</label>
            <input
              type="number"
              value={maxVoteCount}
              onChange={(e) => setMaxVoteCount(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded bg-gray-200"
              placeholder="Enter max vote count"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PositionPage;
