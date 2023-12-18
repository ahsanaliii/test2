import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  loginDummyData,
  accountsTablePage1DummyData,
  accountsTablePage2DummyData,
} from './unit-test-data.ts';
const worker = setupServer(
  rest.post(
    'https://roojaa-admin-proxy.dev.follomy.com​/v1/authenticate',
    async (req, res, ctx) => {
      return res(ctx.json({ ...loginDummyData }));
    }
  ),
  // account
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/accounts',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...accountsTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...accountsTablePage2DummyData }));
      }
    }
  ),
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/accounts',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...accountsTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...accountsTablePage2DummyData }));
      }
    }
  )
);

export default worker;
