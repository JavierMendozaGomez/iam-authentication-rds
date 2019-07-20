import createToken from './util/createToken';
import getSSL from './util/getSSL';
import {ClientConfig} from 'pg';

const getPostgresConnectionConfig = async (): Promise<ClientConfig> => {
    const ssl = await getSSL();
    const token = await createToken();
    return {
        host: process.env.DB_HOSTNAME,
        port: parseInt(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: token,
        database: process.env.DB_NAME,
        ssl: {
            ca: ssl,
        },
    };
};

export default getPostgresConnectionConfig;
