import { forwardRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const helmetContext = {};

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  return (
    <HelmetProvider context={helmetContext}>
      <div
        ref={ref}
        {...rest}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    </HelmetProvider>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
