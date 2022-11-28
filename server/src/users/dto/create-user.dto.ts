import { ApiProperty } from '@nestjs/swagger';
import { ClientType } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phoneCode: number;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  whatsApp: boolean;

  @ApiProperty({ nullable: true })
  adress?: string;

  @ApiProperty({ nullable: true })
  postCode?: number;

  @ApiProperty({ nullable: true })
  city?: string;

  @ApiProperty()
  clientType: ClientType;

  @ApiProperty()
  publicity: boolean;
}
