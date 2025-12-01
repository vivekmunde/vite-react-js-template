import { CookingPotIcon } from 'lucide-react';
import { Translation } from '../translation';
import { Result, ResultIcon, ResultMessage, ResultTitle } from '../ui/result';

const Empty: React.FC = () => {
  return (
    <Result className="p-4 py-[5vh]">
      <ResultIcon>
        <CookingPotIcon />
      </ResultIcon>
      <ResultTitle>
        <Translation value="no-result/empty.title" />
      </ResultTitle>
      <ResultMessage>
        <Translation value="no-result/empty.message" />
      </ResultMessage>
    </Result>
  );
};

export { Empty };
