"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.enableCors({
        origin: ['http://192.168.0.45:3000', 'http://localhost:3000']
    });
    await app.listen(process.env.PORT || 4000);
}
bootstrap().then(() => {
    console.log('group-lunch-server started successfully');
});
//# sourceMappingURL=main.js.map