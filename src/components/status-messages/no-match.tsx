import { CookingPotIcon } from 'lucide-react';
import { Translation } from '../translation';
import { Result, ResultIcon, ResultMessage, ResultTitle } from '../ui/result';

const NoMatch: React.FC = () => {
  return (
    <Result className="p-4 py-[5vh]">
      <ResultIcon>
        <CookingPotIcon />
      </ResultIcon>
      <ResultTitle>
        <Translation value="no-result/noMatch.title" />
      </ResultTitle>
      <ResultMessage>
        <Translation value="no-result/noMatch.message" />
      </ResultMessage>
    </Result>
  );
};

export { NoMatch };
