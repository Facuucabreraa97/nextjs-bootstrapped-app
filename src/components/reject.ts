import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Implementa la lógica de rechazo de pago aquí
  res.status(200).json({ success: true });
}