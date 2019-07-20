import {promisify} from 'util';
import * as fs from 'fs';

const getSSL = async () => {
    const readFileAsync = promisify(fs.readFile);
    return await readFileAsync(`${__dirname}/rds-ca-2015-eu-west-2.pem`);
};

export default getSSL;
