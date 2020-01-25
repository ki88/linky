import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { links } from '../../../mockData/links';
import { Items } from './Items';

describe('Items', () => {
  afterEach(cleanup);

  const mockClick = jest.fn();

  const renderComponent = () =>
    render(<Items links={links} activeLink={links[0]} onDetails={mockClick} />);

  it('should call onDetails', async () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId(`item-${links[1].sid}`));
    expect(mockClick).toHaveBeenCalled();
  });
});
