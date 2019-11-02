import 'dotenv/config';

import Queue from './lib/Queue';

// Roda as filas fora da aplicação.
Queue.processQueue();
