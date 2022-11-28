import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { OffersModule } from './offers/offers.module';
import { OptionsModule } from './options/options.module';
import { OptionTypesModule } from './option_types/option_types.module';
import { OfferTypesModule } from './offer_types/offer_types.module';
import { User } from './users/entities/user.entity';
import { Order } from './orders/entities/order.entity';
import { OptionType } from './option_types/entities/option_type.entity';
import { Offer } from './offers/entities/offer.entity';
import { OfferType } from './offer_types/entities/offer_type.entity';
import { Delivery } from './deliveries/entities/delivery.entity';
import { Option } from './options/entities/option.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'comptoir',
      password: 'comptoir',
      database: 'comptoir',
      entities: [User, Order, Option, OptionType, Offer, OfferType, Delivery],
      synchronize: true,
    }),
    UsersModule,
    OrdersModule,
    DeliveriesModule,
    OffersModule,
    OptionsModule,
    OptionTypesModule,
    OfferTypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
