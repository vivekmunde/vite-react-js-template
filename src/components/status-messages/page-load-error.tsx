import { AlertTriangleIcon } from 'lucide-react';
import { Translation } from '../translation';
import { Button } from '../ui/button';
import {
  Result,
  ResultFooter,
  ResultIcon,
  ResultMessage,
  ResultTitle,
} from '../ui/result';

const PageLoadError: React.FC = () => {
  const onReload = () => {
    window.location.reload();
  };

  return (
    <Result variant="destructive" size="lg" className="p-4 py-[5vh]">
      <ResultIcon>
        <AlertTriangleIcon />
      </ResultIcon>
      <ResultTitle>
        <Translation value="error/page.load.title" />
      </ResultTitle>
      <ResultMessage>
        <Translation value="error/page.load.message" />
      </ResultMessage>
      <ResultFooter>
        <Button onClick={onReload}>
          <Translation value="common/reload" />
        </Button>
      </ResultFooter>
    </Result>
  );
};

export { PageLoadError };
