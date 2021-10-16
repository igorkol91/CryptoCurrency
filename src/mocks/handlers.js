import { rest } from 'msw';

const response = {
  data: [
    {
      circulating_supply: '18842468',
      currency: 'BTC',
      first_candle: '2011-08-18T00:00:00Z',
      first_order_book: '2017-01-06T00:00:00Z',
      first_trade: '2011-08-18T00:00:00Z',
      high: '63661.47450422',
      high_timestamp: '2021-04-13T00:00:00Z',
      id: 'BTC',
      logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
      market_cap: '1036275322705',
      market_cap_dominance: '0.4057',
      max_supply: '21000000',
      name: 'Bitcoin',
      num_exchanges: '392',
      num_pairs: '66099',
      num_pairs_unmapped: '5168',
      price: '54996.79355727',
      price_date: '2021-10-13T00:00:00Z',
      price_timestamp: '2021-10-13T11:35:00Z',
      rank: '1',
      rank_delta: '0',
      status: 'active',
      symbol: 'BTC',
    },
  ],
};

const handlers = [
  rest.get('https://api.coinlore.net/api/tickers/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(response),
  )),
];

export default handlers;
