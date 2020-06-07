import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      const hostname = process.env.BACKEND_URL || '192.168.15.120';
      const port = process.env.BACKEND_PORT || '3000';
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${hostname}:${port}/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
