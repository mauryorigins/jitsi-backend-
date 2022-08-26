import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JitsiTokenService } from './jitsi-token.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JitsiTokenController } from './jitsi-token.controller';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: 3600,
        },
      }),
    }),
  ],
  providers: [JitsiTokenService],
  controllers: [JitsiTokenController],
})
export class JitsiTokenModule {}
