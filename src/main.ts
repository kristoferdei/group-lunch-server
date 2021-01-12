import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.enableCors({
    origin: ['http://192.168.0.45:3000', 'http://localhost:3000']
  })
  await app.listen(process.env.PORT || 4000)
}
bootstrap().then(() => {
  console.log('group-lunch-server started successfully')
})
