import type { ReactElement } from 'react';
import NextLink from 'next/link';
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
    <NextLink href={href} passHref>
      <Link {...rest}>{children}</Link>
    </NextLink>
  );
}
