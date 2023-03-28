// Service é apenas uma class normal, sem decorador
import { Injectable } from '@angular/core';
@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log('Um servidor teve seu status alterado, novo status: ' + status);
  }
}
