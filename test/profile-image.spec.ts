import fs from 'fs';
import path from 'path';
import { createRingCentral } from './utils';

describe('Profile image', () => {
  test('download', async () => {
    const rc = await createRingCentral();
    const buffer = await rc.restapi().account().extension().profileImage().list();
    expect(buffer.constructor.name).toBe('Buffer');
    fs.writeFileSync(path.join(__dirname, 'temp.png'), buffer);
    await rc.revoke();
  });

  test('upload', async () => {
    const rc = await createRingCentral();
    await rc
      .restapi()
      .account()
      .extension()
      .profileImage()
      .post({
        image: {
          filename: 'rc.png',
          contentType: 'image/png',
          content: fs.readFileSync('./test.png'),
        },
      });
    await rc.revoke();
  });

  test('download others', async () => {
    // const rc = new RingCentral({
    //   clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    //   clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    //   server: process.env.RINGCENTRAL_SERVER_URL!,
    // });
    // await rc.login({
    //   username: process.env.RINGCENTRAL_USERNAME!,
    //   extension: process.env.RINGCENTRAL_EXTENSION!,
    //   password: process.env.RINGCENTRAL_PASSWORD!,
    // });
    // const rc2 = new RingCentral({
    //   clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    //   clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    //   server: process.env.RINGCENTRAL_SERVER_URL!,
    // });
    // await rc2.login({
    //   username: process.env.RINGCENTRAL_USERNAME2!,
    //   extension: process.env.RINGCENTRAL_EXTENSION2!,
    //   password: process.env.RINGCENTRAL_PASSWORD2!,
    // });
    // const buffer = await rc
    //   .restapi()
    //   .account()
    //   .extension(rc2.token?.owner_id)
    //   .profileImage()
    //   .list();
    // expect(buffer.constructor.name).toBe('Buffer');
    // fs.writeFileSync(path.join(__dirname, 'temp.png'), buffer);
    // await rc.revoke();
  });
});
