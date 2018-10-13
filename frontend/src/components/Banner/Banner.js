import React, { PureComponent } from 'react';
import styles from './styles'

import ContentLayout from "../ContentLayout";
import SVGIcon from "../SVGIcon";

import { RIGHT_ARROW } from "../SVGIcon/icons";
import { Link } from '../../../routes';

export default class extends PureComponent {
  render() {
    return (
      <div className="Banner">
        <ContentLayout>
          <div className="Banner_wrapper">
            <h1 className="Banner_title">Every item you donate, changes someone's life.</h1>
            <Link to="/donate">
              <a className="Banner_cta">DONATE NOW
                <SVGIcon
                  icon={RIGHT_ARROW}
                  style={{ marginLeft: '10px', fontSize: '18px' }}
                />
              </a>
            </Link>
          </div>
        </ContentLayout>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
