import { Response } from 'express';
import * as fs from 'fs';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(filePath: string) {
    return fs.promises.readFile(filePath);
  }
}
