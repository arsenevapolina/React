export interface LinkProps {
  children?: React.ReactNode;
  count?: number;
  onCounterClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  img?: string;
  className?: string;
  to?: string;
  username?: string;
}
