import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = 'https://www.mig.kz/';

    // Отправляем GET-запрос на указанный URL
    const response = await axios.get(url);

    // Загружаем полученную HTML-страницу в Cheerio
    const $ = cheerio.load(response.data);

    // Ищем элементы с классом "sell delta-neutral" и ограничиваем выборку первыми двумя элементами
    const sellElements = $(".sell.delta-neutral").slice(0, 3);

    // Получаем текст из найденных элементов
    const usd = $(sellElements[0]).text().trim();
    const eur = $(sellElements[1]).text().trim();
    const rub = $(sellElements[2]).text().trim();

    // Получаем все данные
    const data = {
      usd,
      eur,
      rub
    };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error parsing the website:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
