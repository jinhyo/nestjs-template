import { LoginGuard } from '@base/guard/Login.guard';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

export function ForAdminUser() {
  return applyDecorators(
    SetMetadata('roles', ['admin']),
    UseGuards(LoginGuard),
  );
}
