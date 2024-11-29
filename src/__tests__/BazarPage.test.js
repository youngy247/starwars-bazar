import BazarPage from '@/app/home/page';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('fetches and displays starship data successfully', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      count: 2,
      next: null,
      previous: null,
      results: [
        {
          name: 'Naboo star skiff',
          model: 'J-type star skiff',
          manufacturer: 'Theed Palace Space Vessel Engineering Corps',
          cost_in_credits: 'unknown',
          passengers: '3',
          hyperdrive_rating: '0.5',
          created: '2014-12-20T19:55:15.396000Z',
        },
        {
          name: 'Jedi Interceptor',
          model: 'Eta-2 Actis-class light interceptor',
          manufacturer: 'Kuat Systems Engineering',
          cost_in_credits: '320000',
          passengers: '0',
          hyperdrive_rating: '1.0',
          created: '2014-12-20T19:56:57.468000Z',
        },
      ],
    })
  );

  await act(async () => {
    render(<BazarPage />);
  });

  // Wait for starships to load and check for data
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
  expect(screen.getByText('Naboo star skiff')).toBeInTheDocument();
  expect(screen.getByText('Jedi Interceptor')).toBeInTheDocument();
});
