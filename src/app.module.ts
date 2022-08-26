import { Module } from '@nestjs/common';
import { JitsiTokenModule } from './jitsi-token/jitsi-token.module';

@Module({
  imports: [JitsiTokenModule],
})
export class AppModule {}
