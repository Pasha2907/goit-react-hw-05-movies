import { Menu, MenuItem, MenuLink } from './Navigation.styled';

export function Navigation() {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="movies">Movies</MenuLink>
        </MenuItem>
      </Menu>
    </nav>
  );
}
