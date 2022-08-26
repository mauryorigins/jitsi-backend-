// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { env } = process;

export const KEY_DIR = env.KEY_DIR || '/src/jitsi-token/c2.pk';

export const JITSI_KID =
  env.JITSI_KID || 'vpaas-magic-cookie-751bd955a08f412894c18e82e318460f/98df57';

export const JITSI_SUB =
  env.JITSI_SUB || 'vpaas-magic-cookie-751bd955a08f412894c18e82e318460f';

export const JWT_TOKEN = {
  secret: 'secret',
  expiresIn: '60m',
};
