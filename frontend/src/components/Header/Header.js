import React, { PureComponent } from 'react';
import styles from './styles'

import ContentLayout from "../ContentLayout";

import { Link } from '../../../routes';

export default class extends PureComponent {
  render() {
    return (
      <div className="Header">
        <ContentLayout>
          <div className="Header_wrapper">
            <Link to="/">
              <a className="Brand">
                <img
                  className="Brand_logo"
                  alt="Logo"
                  src="/static/images/logo/logo-1x.png"
                  srcSet="/static/images/logo/logo-1x.png 1x, /static/images/logo/logo-2x.png 2x, /static/images/logo/logo-3x.png 3x"
                />
                <div className="Brand_name">
                  DONATE
                </div>
              </a>
            </Link>

            <p className="Header_info">Contact Us: 9876543210</p>
          </div>
        </ContentLayout>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
