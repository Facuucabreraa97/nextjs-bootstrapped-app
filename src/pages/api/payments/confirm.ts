import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Lógica de confirmación
  res.status(200).json({ success: true });
}
