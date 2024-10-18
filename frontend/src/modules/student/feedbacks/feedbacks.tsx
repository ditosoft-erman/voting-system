import { useState } from 'react';
import Modal from 'react-modal';

// Define the feedback structure
interface Feedback {
  subject: string;
  content: string;
}

const Feedbacks = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);

  // Example feedback data
  const feedbackData: Feedback[] = [
    {
      subject: 'No Uniform Policy',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      subject: 'Event Improvement',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      subject: 'Need Immediate Action',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

  // Open View Modal
  const openViewModal = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setIsViewModalOpen(true);
  };

  // Open Create Modal
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  // Close Modals
  const closeModals = () => {
    setIsViewModalOpen(false);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-blue-900 p-4 text-white">
          <h1 className="text-xl">Good Day!</h1>
        </div>

        {/* Feedback Section */}
        <div className="p-6">
          <div className="bg-white shadow-lg rounded-md p-4 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="bg-blue-900 text-white py-2 px-4 rounded-t-md">Feedbacks</h2>
              <div className="flex items-center">
                <button className="bg-yellow-400 px-4 py-2 text-black rounded mr-2" onClick={openCreateModal}>Create</button>
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-l-md px-2 py-1"
                />
                <button className="bg-yellow-400 text-black rounded-r-md px-4">Search</button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border px-4 py-2">Subject</th>
                  <th className="border px-4 py-2">Date Submitted</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((feedback: Feedback, index: number) => (
                  <tr key={index} className="border">
                    <td className="border px-4 py-2">{feedback.subject}</td>
                    <td className="border px-4 py-2">01/13/2024</td>
                    <td className="border px-4 py-2">
                      <button className="bg-yellow-400 px-4 py-1 rounded" onClick={() => openViewModal(feedback)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* View Feedback Modal */}
        <Modal isOpen={isViewModalOpen} onRequestClose={closeModals} contentLabel="View Feedback">
          <div className="p-6 bg-white rounded-md">
            <h2 className="bg-blue-900 text-white py-2 px-4 rounded-t-md">View Feedback</h2>
            <div className="mt-4">
              <h3 className="font-bold">Subject</h3>
              <p className="bg-gray-200 p-2 rounded-md">{selectedFeedback?.subject}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">Content</h3>
              <p className="bg-gray-200 p-2 rounded-md">{selectedFeedback?.content}</p>
            </div>
            <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded" onClick={closeModals}>Close</button>
          </div>
        </Modal>

        {/* Create Feedback Modal */}
        <Modal isOpen={isCreateModalOpen} onRequestClose={closeModals} contentLabel="Create Feedback">
          <div className="p-6 bg-white rounded-md">
            <h2 className="bg-blue-900 text-white py-2 px-4 rounded-t-md">Create Feedback</h2>
            <div className="mt-4">
              <label className="block font-bold">Subject</label>
              <input type="text" className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <div className="mt-4">
              <label className="block font-bold">Content</label>
              <textarea className="border border-gray-300 p-2 rounded-md w-full h-32"></textarea>
            </div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" onClick={closeModals}>Submit</button>
            <button className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded" onClick={closeModals}>Cancel</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Feedbacks;
