import { App } from '@/app/App';
import { render, screen, act } from '@/test/utils';

test('Mount App without errors', async () => {
  await act(async () => render(<App />));
  expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /log in/i })).toBeInTheDocument();
});
