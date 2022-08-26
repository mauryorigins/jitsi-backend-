import { Injectable } from '@nestjs/common';
import fs = require('fs');

console.log('hola', process.cwd());

const privateKey = fs.readFileSync(`${process.cwd()}${process.env.KEY_DIR}`);

import jsonwebtoken, { JwtHeader } from 'jsonwebtoken';

@Injectable()
export class JitsiTokenService {
  async generate({ id, name, room, startDateToken, endDateToken }) {
    const jwt = jsonwebtoken.sign(
      {
        aud: 'jitsi',
        context: {
          user: {
            id,
            name,
            avatar: 'null',
            moderator: 'true',
          },
          features: {
            livestreaming: 'true',
            recording: 'true',
            transcription: 'true',
            'outbound-call': 'true',
          },
        },
        iss: 'chat',
        room,
        sub: process.env.JITSI_SUB,
        exp: startDateToken,
        nbf: endDateToken,
      },
      privateKey,
      {
        algorithm: 'RS256',
        header: { kid: process.env.JITSI_KID } as JwtHeader,
      },
    );
    return jwt;
  }
}
