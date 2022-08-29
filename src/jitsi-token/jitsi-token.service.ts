import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JITSI_SUB } from 'src/config';
@Injectable()
export class JitsiTokenService {
  constructor(private jwtService: JwtService) {}

  generate({ id, name, room, startDateToken, endDateToken }) {
    const jwt = this.jwtService.sign(
{
      aud: 'jitsi',
      iss: 'chat',
      iat: 1661545415,
      exp: 1661552615,
      nbf: 1661545410,
      sub: 'vpaas-magic-cookie-751bd955a08f412894c18e82e318460f',
      context: {
        features: {
          livestreaming: true,
          'outbound-call': true,
          'sip-outbound-call': false,
          transcription: true,
          recording: true,
        },
        user: {
          'hidden-from-recorder': false,
          moderator: true,
          name: 'mauryorigins',
          id: 'google-oauth2|110449920273957498947',
          avatar: '',
          email: 'mauryorigins@gmail.com',
        },
      },
      room: '*',
    });
    return jwt;
  }
}
