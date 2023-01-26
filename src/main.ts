import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
//!TODO import { ValidationPipe } from './pipes/validation.pipe';
async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('MyShift App')
    .setDescription('Backend documentation')
    .setVersion('1.0.0')
    .addTag('NestJS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  //!TODO app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    console.log(`App is runnning on port: ${PORT}`);
  });
}

start();
