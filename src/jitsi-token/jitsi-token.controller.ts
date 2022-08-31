import { Body, Controller, Post } from '@nestjs/common';
import { JitsiTokenService } from './jitsi-token.service';
import { JwtPayload } from './jwt-payload.interface';

@Controller('jitsi-token')
export class JitsiTokenController {
  constructor(private jitsiTokenService: JitsiTokenService) {}

  @Post('/jitsiToken')
  generateJitisiToken(@Body() jwtPayload: JwtPayload): {
    token: string;
    tokenGuest: string;
  } {
    return {
      token: this.jitsiTokenService.generate(jwtPayload),
      tokenGuest: this.jitsiTokenService.generateGuest(jwtPayload),
    };
  }
}
