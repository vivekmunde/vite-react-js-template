import { BanIcon } from 'lucide-react';
import { Translation } from '../translation';
import { Button } from '../ui/button';
import {
  Result,
  ResultFooter,
  ResultIcon,
  ResultMessage,
  ResultTitle,
} from '../ui/result';

const PageNotFound: React.FC = () => {
  const onReload = () => {
    window.location.reload();
  };

  return (
    <Result variant="destructive" size="lg" className="p-4 py-[5vh]">
      <ResultIcon>
        <BanIcon />
      </ResultIcon>
      <ResultTitle>
        <Translation value="error/page.404.title" />
      </ResultTitle>
      <ResultMessage>
        <Translation value="error/page.404.message" />
      </ResultMessage>
      <ResultFooter>
        <Button onClick={onReload}>
          <Translation value="common/reload" />
        </Button>
      </ResultFooter>
    </Result>
  );
};

export { PageNotFound };
