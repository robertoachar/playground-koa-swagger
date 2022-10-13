import { app } from './app';
import { config } from './config';
import { logger } from './logger';

app.listen(config.PORT, () => {
  logger.info(`Server is running on port: ${config.PORT}`);
});
