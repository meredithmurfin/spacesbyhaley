import React from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import './Footer.scss';

const facebookLookup: IconLookup = {
  prefix: 'fa',
  iconName: 'facebook-square',
};
const facebookIconDefinition: IconDefinition = findIconDefinition(
  facebookLookup,
);

const AntFooter = Layout.Footer;

export function Footer() {
  return (
    <>
      <AntFooter className="footer">
        <FontAwesomeIcon icon={facebookIconDefinition} />
      </AntFooter>
    </>
  );
}
