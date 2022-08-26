import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JITSI_SUB } from 'src/config';
@Injectable()
export class JitsiTokenService {
  constructor(private jwtService: JwtService) {}

  generate({ id, name, room, startDateToken, endDateToken }) {
    const jwt = this.jwtService.sign({
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
      sub: JITSI_SUB,
      exp: startDateToken,
      nbf: endDateToken,
    });
    return jwt;
  }
}
