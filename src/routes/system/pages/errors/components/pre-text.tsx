import { Translation } from '@/components/translation';
import { Button } from '@/components/ui/button';
import { If } from '@/components/ui/if';
import { ChevronsUpDownIcon } from 'lucide-react';
import React, { useState } from 'react';

const ExpandCollapseButton: React.FC<{
  labelI18nKey: string;
  onClick: () => void;
}> = ({ labelI18nKey, onClick }) => (
  <Button
    variant="secondary"
    size="sm"
    className="mt-1 min-w-min min-h-max"
    onClick={() => {
      onClick();
    }}
  >
    <Translation value={labelI18nKey} />
    <ChevronsUpDownIcon />
  </Button>
);

const PreText: React.FC<{ value?: string }> = ({ value }) => {
  const fullError = (value ?? '').trim();
  const showExpandCollapse = fullError.length > 800;
  const [expanded, setExpanded] = useState(false);
  const shortError = fullError.slice(0, 800);

  return (
    <If condition={expanded}>
      <If.True>
        <pre className="whitespace-pre-wrap text-sm">
          {fullError.length > 0 ? fullError : '-'}
        </pre>
        {showExpandCollapse && (
          <ExpandCollapseButton
            labelI18nKey="common/less"
            onClick={() => {
              setExpanded(false);
            }}
          />
        )}
      </If.True>
      <If.False>
        <pre className="whitespace-pre-wrap text-sm">
          {shortError.length > 0 ? shortError : '-'}
        </pre>
        {showExpandCollapse && (
          <ExpandCollapseButton
            labelI18nKey="common/more"
            onClick={() => {
              setExpanded(true);
            }}
          />
        )}
      </If.False>
    </If>
  );
};

export { PreText };
