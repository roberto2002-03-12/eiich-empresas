import { Injectable, NestMiddleware } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { ValidationError, validateOrReject } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateObjectMiddleware<T> implements NestMiddleware {
  constructor(private readonly dtoType: ClassConstructor<T>) {}
  // estamos usando express
  // si alguna vez usamo fastify, se debe cambiar tipeados
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const dtoObject = plainToClass(this.dtoType, req.body);
      await validateOrReject(dtoObject as object);
      next();
    } catch (error) {
      if (error[0].constraints) {
        const validationErrors: ValidationError[] = error;
        // agarra los constraints y los añades en un array de mensajes de errores
        const message = validationErrors.reduce(
          (acc: string[], error: ValidationError) => {
            Object.values(error.constraints).forEach((constraint: string) => {
              acc.push(constraint);
            });
            return acc;
          },
          [],
        );
        return res.status(400).json({
          message,
          error: 'Bad Request',
          statusCode: 400,
        });
      }
      return res.status(500).json('Something wrong happend.');
    }
  }
}
