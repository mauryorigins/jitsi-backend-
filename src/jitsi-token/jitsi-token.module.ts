import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JitsiTokenService } from './jitsi-token.service';
import { JitsiTokenController } from './jitsi-token.controller';
import { JwtStrategy } from './jwt.strategy';
import { JwtHeader } from 'jsonwebtoken';
import fs = require('fs');
import { JITSI_KID, KEY_DIR } from 'src/config';

const privateKey = fs.readFileSync(`${process.cwd()}/${KEY_DIR}`);

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
    JwtModule.register({
      secret: privateKey,
      signOptions: {
        // expiresIn: 3600,
        algorithm: 'RS256',
        header: { kid: JITSI_KID } as JwtHeader,
      },
    }),
  ],
  providers: [JitsiTokenService, JwtStrategy],
  controllers: [JitsiTokenController],
  exports: [JwtStrategy, PassportModule],
})
export class JitsiTokenModule {}
