import { Response } from 'express';
import path from 'path';

import { Controller, Get, Res } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cefr/certificates/16e36c21b8d7487d8fdffa955ab1daca.pdf')
  async downloadFile(@Res() res: Response): Promise<void> {
    const filePath =
      process.cwd() + '/src/16e36c21b8d7487d8fdffa955ab1daca.pdf';
    try {
      const fileData = await this.appService.getHello(filePath);
      res.setHeader('Content-Disposition', `attachment; filename=${filePath}`);
      res.setHeader('Content-Type', 'application/octet-stream');
      res.send(fileData);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error downloading file');
    }
  }
}
