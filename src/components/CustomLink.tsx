import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'>;

const CustomLink = ({ href, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {' '}
        tests
      </a>
    );
  }

  return (
    <a target="_blank" rel="noreferrer" href={href} {...rest}>
      {' '}
      test
    </a>
  );
};
export default CustomLink;
