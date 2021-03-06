import { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import { SpotifyLogo } from '../SpotifyLogo/SpotifyLogo'
import { Hamburguer } from '../Hamburger/Hamburger'

export const NavigationBar = () => {
  const classes = 'NavigationBar__nav__list__group__link spotify-bold'
  const [pathname, setPathname] = useState('')
  const [isCollapse, toggle] = useState(true)

  useEffect(() => setPathname(Router.pathname.toLowerCase()))

  const onClickHamburguer = () => toggle(!isCollapse)

  return (
    <div className={'NavigationBar ' + (isCollapse ? 'collapse' : '')}>
      <nav className={'NavigationBar__nav'}>
        <SpotifyLogo />
        <Hamburguer onClick={() => onClickHamburguer()} />
        <ul className={'NavigationBar__nav__list'}>
          <div className={'NavigationBar__nav__list__group'}>
            <li className={'NavigationBar__nav__list__group__item'}>
              <Link prefetch href="/">
                <a className={classes + (pathname === '/index' || pathname === '/' ? 'active' : '')}>
                  Search
                  <div className={'NavigationBar__nav__list__group__item__icon-search'}>
                    <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
                      <title>Search</title>
                      <path d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </Link>
            </li>
          </div>
          <div className={'NavigationBar__nav__list__group'}>
            <li className={'NavigationBar__nav__list__group__item'}>
              <Link prefetch href="/commands">
                <a className={classes + (pathname === '/commands' ? 'active' : '')}>Commands</a>
              </Link>
            </li>
            <li className={'NavigationBar__nav__list__group__item'}>
              <Link prefetch href="/about">
                <a className={classes + (pathname === '/about' ? 'active' : '')}>About</a>
              </Link>
            </li>
          </div>
        </ul>
        <div className={'NavigationBar__social-github-button'}>
          <a className="github-button"
            href="https://github.com/wzalazar/spotify"
            data-size="large"
            data-show-count="true"
            aria-label="Star wzalazar/spotify on GitHub">Star</a>
        </div>
      </nav>
    </div>
  )
}
