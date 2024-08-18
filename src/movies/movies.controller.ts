import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { MoviesService } from './movies.service';

@Controller()
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @MessagePattern('movies.add')
  add() {
    return this.moviesService.add();
  }
}
