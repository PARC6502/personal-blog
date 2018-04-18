import React from 'react'
import Link from 'gatsby-link'
import { Menu, Image, Icon } from 'semantic-ui-react';

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <div className="ui container">
    <Menu>
      <Menu.Item as={Link} to="/">
        <Image src={logo} alt="Kaldi" style={{ width: '88px' }} />
      </Menu.Item>
      <Menu.Item as={Link} to="/about">
        About
      </Menu.Item>
      <Menu.Item as={Link} to="/products">
        Products
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Icon name="github" alt="Github" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
)

export default Navbar
