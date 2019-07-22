import getPostgresConfig from '../../src/getPostgresConfig';
import {Client} from 'pg';

describe('Unit test getPostgresConfig', () => {
    it(`Successfully connects to the db`, async () => {
        const config = await getPostgresConfig();
        const client = new Client(config);
        client.connect(err => {
            expect(err).toBeUndefined();
            client.end();
        });
    });
});
