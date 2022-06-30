import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../Components/NavBar';
import Quote from '../pages/Quote';
import Home from '../pages/Home';

describe('Navbar Test', () => {
  test('render nav bar', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText('Math Magicians')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<div
  class="header"
>
  <div
    class="logo"
  >
    <h2>
      Math Magicians
    </h2>
  </div>
  <div
    class="navHolder"
  >
    <nav>
      <a
        href="/"
      >
        Home
      </a>
      <a
        href="/quote"
      >
        Quote
      </a>
      <a
        href="/calc"
      >
        Calculator
      </a>
    </nav>
  </div>
</div>
`);
})

test('render Quote', () => {
    const { container} = render(
        <MemoryRouter>
          <Quote />
        </MemoryRouter>
      );
      expect(container.lastChild).toMatchInlineSnapshot(`
<div
  class="Quote"
>
  <blockquote>
    Mathematics is not about numbers, its about equations, computations
    <br />
    and algorithms: it is about understanding - William Paul Thurston
  </blockquote>
</div>
`)
})

test('render Home', () => {
    const {container, getByText} = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )
    expect(getByText('Need to Calculate something?')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<div
  class="Home"
>
  <h1>
    Welcome!
  </h1>
  <h5>
    Need to Calculate something?
  </h5>
  <p>
    Use our advanced web-based Calculator app. All you have to do:
    <ul>
      <li>
        Navigate to our calculator using the link above
      </li>
      <li>
        See your computations come to life!
      </li>
    </ul>
  </p>
</div>
`)
})
  })