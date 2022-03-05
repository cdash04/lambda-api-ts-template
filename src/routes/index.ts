import { Router } from 'express';
import * as controller from '../controllers';

export const index = Router();

index.get('/', controller.index);
