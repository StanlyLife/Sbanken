import { render, screen } from '@testing-library/react';
import { AppHeader } from '../appHeader';

test('check if component renders header text', () => {
    render(<AppHeader />);
    const headerText = screen.getByText(/sbanken forbruk/i);
    expect(headerText).toBeInTheDocument();
});
