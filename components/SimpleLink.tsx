import type { ReactElement } from 'react';
import { Link, LinkProps } from '@chakra-ui/react';

type SimpleLinkProps = LinkProps & {
  href: string | URL;
  children: ReactElement | string;
};

export default function SimpleLink({
  href,
  children,
  ...rest
}: SimpleLinkProps) {
  return (
    <Link {...rest} href={href}>
      {children}
    </Link>
  );
}
