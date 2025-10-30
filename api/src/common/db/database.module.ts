
import { Global, Module } from '@nestjs/common';
import { databaseProviders } from '../providers/postgres.provider';
@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
