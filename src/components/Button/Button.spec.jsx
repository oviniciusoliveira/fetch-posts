import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

const fn = jest.fn();

describe('<Button />', () => {
  it('should render the button with the text Load More', () => {
    render(<Button text="Load More" onClick={fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    render(<Button text="Load More" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    // fireEvent.click(button);
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load More" onClick={fn} disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="Load More" onClick={fn} disabled={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
