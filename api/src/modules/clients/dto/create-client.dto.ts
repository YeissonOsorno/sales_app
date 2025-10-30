
import { IsString, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsString()
  rut: string;
  
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  address?: string;

}