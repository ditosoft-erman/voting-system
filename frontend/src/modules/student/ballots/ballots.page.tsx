import { FC, useState } from 'react';
import Modal from 'react-modal';

// Define a Candidate type for the ballot details
interface Candidate {
  name: string;
  image: string;
  selected: boolean;
}

// Define a Ballot type
interface Ballot {
  name: string;
  candidatesPresident: Candidate[];
  candidatesVPresident: Candidate[];
  candidatesSecretary: Candidate[];
}

// Ballot detail modal component
const BallotDetailModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  ballot: Ballot | null;
}> = ({ isOpen, onClose, ballot }) => {
  if (!ballot) return null; // Return null if no ballot is selected

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ballot Details"
    >
      <div className="p-6 bg-white">
        <h2 className="text-blue-900 text-xl mb-4">View Ballot</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Ballot Name</label>
          <div className="bg-gray-200 p-2 rounded-md">{ballot.name}</div>
        </div>
        {/* President */}
        <div className="mb-4">
          <h3 className="font-bold">Position: President</h3>
          {ballot.candidatesPresident.map((candidate, index) => (
            <div
              key={index}
              className="flex items-center p-2 bg-gray-200 rounded-md mb-2"
            >
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-10 h-10 mr-2 rounded-full"
              />
              <span>{candidate.name}</span>
              <input
                type="radio"
                name="president"
                className="ml-auto"
                checked={candidate.selected}
              />
            </div>
          ))}
        </div>
        {/* Vice-President */}
        <div className="mb-4">
          <h3 className="font-bold">Position: V-President</h3>
          {ballot.candidatesVPresident.map((candidate, index) => (
            <div
              key={index}
              className="flex items-center p-2 bg-gray-200 rounded-md mb-2"
            >
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-10 h-10 mr-2 rounded-full"
              />
              <span>{candidate.name}</span>
              <input
                type="radio"
                name="vice-president"
                className="ml-auto"
                checked={candidate.selected}
              />
            </div>
          ))}
        </div>
        {/* Secretary */}
        <div className="mb-4">
          <h3 className="font-bold">Position: Secretary</h3>
          {ballot.candidatesSecretary.map((candidate, index) => (
            <div
              key={index}
              className="flex items-center p-2 bg-gray-200 rounded-md mb-2"
            >
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-10 h-10 mr-2 rounded-full"
              />
              <span>{candidate.name}</span>
              <input
                type="radio"
                name="secretary"
                className="ml-auto"
                checked={candidate.selected}
              />
            </div>
          ))}
        </div>
        <button
          className="mt-6 px-4 py-2 bg-blue-900 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

const BallotPage: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBallot, setSelectedBallot] = useState<Ballot | null>(null);

  const ballots: Ballot[] = [
    {
      name: '2024 SSLG Election',
      candidatesPresident: [
        {
          name: 'Emma Carter',
          image: 'https://via.placeholder.com/40',
          selected: true,
        },
        {
          name: 'Ava Mitchell',
          image: 'https://via.placeholder.com/40',
          selected: false,
        },
      ],
      candidatesVPresident: [
        {
          name: 'Emma Carter',
          image: 'https://via.placeholder.com/40',
          selected: false,
        },
        {
          name: 'Ava Mitchell',
          image: 'https://via.placeholder.com/40',
          selected: true,
        },
      ],
      candidatesSecretary: [
        {
          name: 'Emma Carter',
          image: 'https://via.placeholder.com/40',
          selected: false,
        },
        {
          name: 'Ava Mitchell',
          image: 'https://via.placeholder.com/40',
          selected: true,
        },
      ],
    },
    // Other ballot data
  ];

  const openModal = (ballot: Ballot) => {
    setSelectedBallot(ballot);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBallot(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 p-4 text-white">
        <h1 className="text-xl">Good Day!</h1>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="bg-blue-900 text-white py-2 px-4 rounded-t-md">
            Ballots
          </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-l-md px-2 py-1"
            />
            <button className="bg-yellow-400 text-black rounded-r-md px-4">
              Search
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border px-4 py-2">Ballot Name</th>
                <th className="border px-4 py-2">Opening Date</th>
                <th className="border px-4 py-2">Closing Date</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ballots.map((ballot, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2">{ballot.name}</td>
                  <td className="border px-4 py-2">01/16/2024 - 12:00 AM</td>
                  <td className="border px-4 py-2">01/18/2024 - 06:59 PM</td>
                  <td className="border px-4 py-2">Open</td>
                  <td className="border px-4 py-2 flex justify-center space-x-2">
                    <button
                      className="bg-yellow-400 px-2 py-1 rounded"
                      onClick={() => openModal(ballot)}
                    >
                      View
                    </button>
                    <button className="bg-green-500 px-2 py-1 text-white rounded">
                      Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 py-4">
          <button className="px-2 py-1 bg-gray-300 rounded">
            &laquo; Previous
          </button>
          <button className="px-2 py-1 bg-gray-300 rounded">1</button>
          <button className="px-2 py-1 bg-gray-300 rounded">2</button>
          <button className="px-2 py-1 bg-blue-900 text-white rounded">
            3
          </button>
          <button className="px-2 py-1 bg-gray-300 rounded">4</button>
          <button className="px-2 py-1 bg-gray-300 rounded">5</button>
          <button className="px-2 py-1 bg-gray-300 rounded">
            Next &raquo;
          </button>
        </div>
      </div>

      {/* Ballot Modal */}
      <BallotDetailModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        ballot={selectedBallot}
      />
    </div>
  );
};

export default BallotPage;
