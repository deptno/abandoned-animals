import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import {const_site_title, const_site_url} from '../../constant'

export const Header: FunctionComponent<Props> = props => {
  return (
    <header className="flex f3 pa3">
      <h1 className="ph2 ph0-ns f5">{const_site_title}</h1>
      <div className="ml-auto flex items-center justify-between">
        <a className="link black mh3" href={const_site_url} target="_blank">
          <i className="fab fa-github black-70 "/>
        </a>
        <a className="link black-70" href="http://bglee.me#abandoned-animals" target="_blank">
        <span className="f6 db underline b">
          about
        </span>
        </a>
      </div>
    </header>
  )
}

type Props = {}
