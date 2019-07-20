
import {RDS} from 'aws-sdk';
import * as util from 'util';

const createToken = async (): Promise<string> => {
    const signer = new RDS.Signer({
        region: process.env.DB_REGION,
        hostname: process.env.DB_HOSTNAME,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
    });
    const getAuthTokenAsync = util.promisify(signer.getAuthToken).bind(signer);
    return await getAuthTokenAsync({username: process.env.DB_AURORA_USER});
};

export default createToken;
