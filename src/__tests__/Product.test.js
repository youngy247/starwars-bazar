import Starship from '@/app/home/Product/Product';
import { ToastNotification } from '@carbon/react';
import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

// Mock the ToastNotification component
jest.mock('@carbon/react', () => ({
  ToastNotification: jest.fn(() => <div>Mock Toast Notification</div>),
}));

const mockStarship = {
  name: 'Jedi Interceptor',
  model: 'Eta-2 Actis-class light interceptor',
  manufacturer: 'Kuat Systems Engineering',
  cost_in_credits: '320000',
  length: '5.47',
  max_atmosphering_speed: '1500',
  crew: '1',
  passengers: '0',
  cargo_capacity: '60',
  consumables: '2 days',
  hyperdrive_rating: '1.0',
  MGLT: 'unknown',
  starship_class: 'starfighter',
  pilots: [
    'https://swapi.dev/api/people/10/',
    'https://swapi.dev/api/people/11/',
  ],
  films: ['https://swapi.dev/api/films/6/'],
  created: '2014-12-20T19:56:57.468000Z',
  edited: '2014-12-20T21:23:49.951000Z',
  url: 'https://swapi.dev/api/starships/65/',
};

describe('Starship Component', () => {
  test('renders starship details correctly', () => {
    render(<Starship starship={mockStarship} />);

    expect(screen.getByText('Jedi Interceptor')).toBeInTheDocument();
    expect(screen.getByText('Hyperdrive Rating:')).toBeInTheDocument();
    expect(screen.getByText('1.0')).toBeInTheDocument();
    expect(screen.getByText('Passengers:')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Cost In Credits:')).toBeInTheDocument();
    expect(screen.getByText('320000')).toBeInTheDocument();
    expect(screen.getByText('Manufacturer:')).toBeInTheDocument();
    expect(screen.getByText('Kuat Systems Engineering')).toBeInTheDocument();
  });

  test('handles quantity increment and decrement', () => {
    render(<Starship starship={mockStarship} />);

    const minusButton = screen.getByRole('button', { name: '-' });
    const plusButton = screen.getByRole('button', { name: '+' });
    const quantityDisplay = screen.getByText('1');

    expect(quantityDisplay).toHaveTextContent('1');

    act(() => {
      fireEvent.click(plusButton);
    });

    expect(screen.getByText('2')).toBeInTheDocument();

    act(() => {
      fireEvent.click(minusButton);
    });

    expect(screen.getByText('1')).toBeInTheDocument();

    act(() => {
      fireEvent.click(minusButton);
    });

    expect(minusButton).toBeDisabled();
  });

  test('displays toast notification when adding to basket', async () => {
    render(<Starship starship={mockStarship} />);

    const buyButton = screen.getByText('BUY');

    act(() => {
      fireEvent.click(buyButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Mock Toast Notification')).toBeInTheDocument();
    });

    expect(ToastNotification).toHaveBeenCalledWith(
      expect.objectContaining({
        subtitle: 'Added 1 Jedi Interceptor(s) to your basket',
        title: 'Success',
      }),
      {}
    );
  });

  test('hides toast notification after timeout', async () => {
    jest.useFakeTimers();
    render(<Starship starship={mockStarship} />);

    act(() => {
      fireEvent.click(screen.getByText('BUY'));
    });

    expect(screen.getByText('Mock Toast Notification')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(
        screen.queryByText('Mock Toast Notification')
      ).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });
});