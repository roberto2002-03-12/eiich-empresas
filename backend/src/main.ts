import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // elimina los datos incorrectos
      whitelist: true,
      // bota error si no cumples las condicionales
      forbidUnknownValues: true,
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const configSwagger = new DocumentBuilder()
    .setTitle('Eiich Empresas')
    .setDescription('API de Eiich Empresas')
    .setVersion('1.0')
    .addTag('Eiich')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
