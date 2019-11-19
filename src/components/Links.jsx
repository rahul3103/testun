/* eslint react/prop-types: 0 */

import Link from 'next/link';
import React from 'react';

const Links = ({ linkTo }) => {
  return (
    <Link href={linkTo}>
      <a>Navigate</a>
    </Link>
  );
};

// export default React.memo(Links);

export default Links;
