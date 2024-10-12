import { useState } from 'react';
import { VotingItem } from '../interfaces/Voting';

const useVoting = () => {
  const [votingItems, setVotingItems] = useState<VotingItem[]>([
    { id: 1, name: 'Item 1', votes: 0 },
    { id: 2, name: 'Item 2', votes: 0 },
  ]);

  const voteForItem = (id: number) => {
    setVotingItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  return { votingItems, voteForItem };
};

export default useVoting;
