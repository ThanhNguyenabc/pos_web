import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'products/products.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProductsModule,
    UserModule,
  ],
})
export class AppModule {}
