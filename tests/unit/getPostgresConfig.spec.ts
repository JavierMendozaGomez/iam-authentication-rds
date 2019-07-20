import  getPostgresConfig from '../../src/getPostgresConfig';
import createToken from '../../src/util/createToken';
import getSSL from '../../src/util/getSSL';
jest.mock('../../src/util/createToken');
jest.mock('../../src/util/getSSL');

const db = {
    DB_REGION: process.env.DB_REGION,
    DB_HOSTNAME: process.env.DB_HOSTNAME,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
};

describe('Unit test getPostgresConfig', () => {
    beforeAll(() => {
        process.env.DB_REGION = 'mockedRegion';
        process.env.DB_HOSTNAME = 'mockedHostname';
        process.env.DB_PORT = '123456';
        process.env.DB_USER = 'mockedDBUser';
        process.env.DB_NAME = 'mockedDBName';
    });

    afterAll(() => {
        process.env.DB_REGION = db.DB_REGION;
        process.env.DB_HOSTNAME = db.DB_REGION;
        process.env.DB_PORT = db.DB_PORT;
        process.env.DB_USER = db.DB_USER;
        process.env.DB_NAME = db.DB_NAME;
    });

    it(`Successfully gets the info to connect the db`, async () => {
        //@ts-ignore
        createToken.mockResolvedValue('DummyToken');
        //@ts-ignore
        getSSL.mockResolvedValue('11 22 33 44');
        expect(await getPostgresConfig()).toMatchSnapshot();
    });
});
