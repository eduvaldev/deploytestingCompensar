import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Controller('api')
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async loginUser(@Request() req: any) {
    const payload = await this.authService.payloadUser(req.body);
    return payload;
  }
}
