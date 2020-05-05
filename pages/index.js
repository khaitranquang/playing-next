import PropTypes from "prop-types";

import Head from 'next/head';
import Button from '@material-ui/core/Button';

const Index = ({user}) => (
    <div style={{ padding: '10px 45px' }}>
        <Head>
            <title>Index page</title>
            <meta name="description" content="This is a description of the Index page" />
        </Head>
        <p>Content on Index page</p>
        <p>Email: {user.email}</p>
    </div>
);

Index.getInitialProps = async (ctx) => ({user: ctx.query.user});

Index.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
    }),
};

Index.defaultProps = {
    user: null
};

export default Index;