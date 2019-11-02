import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

// Jobs
const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  // Inicializando as filas
  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  // Adiciona jobs na fila
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  // Processando as filas em tempo toda vez que entra um novo job na fila
  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
