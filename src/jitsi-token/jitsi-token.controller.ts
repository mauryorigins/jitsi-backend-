import { Body, Controller, Get } from '@nestjs/common';
import { JitsiTokenService } from './jitsi-token.service';
import { JwtPayload } from './jwt-payload.interface';

@Controller('jitsi-token')
export class JitsiTokenController {
  constructor(private jitsiTokenService: JitsiTokenService) {}

  @Get('/jitsiToken')
  generateJitisiToken(@Body() jwtPayload: JwtPayload): Promise<string> {
    return this.jitsiTokenService.generate(jwtPayload);
  }
}
