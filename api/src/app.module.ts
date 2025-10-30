import { Module } from '@nestjs/common';
import { SalesModule } from './modules/sales/sales.module';
import { DetailSalesModule } from './modules/detail_sales/detail_sales.module';
import { DatabaseModule } from './common/db/database.module';
import { ClientsModule } from './modules/clients/clients.module';
import { Category } from './common/models/category.entity';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { PhonesModule } from './modules/phones/phones.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';

@Module({
  imports: [
    DatabaseModule,
    SalesModule,
    DetailSalesModule,
    ClientsModule,
    CategoriesModule,
    ProductsModule,
    PhonesModule,
    SuppliersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
