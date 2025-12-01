import { Skeleton } from './skeleton';
import { useShowSkeleton } from './skeleton/hooks';

const Icon: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const showSkeleton = useShowSkeleton();

  return showSkeleton ? (
    <Skeleton className="--skeleton-icon">{children}</Skeleton>
  ) : (
    children
  );
};

export { Icon };
