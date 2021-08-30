import React from 'react';
import { PartnerCard } from '.';
import partnerIcon from '../../assets/conf-episcopal.png';
import sponsorIcon from '../../assets/yolo-choice.png';

export default {
  title: 'Components/Partners Card',
  component: PartnerCard,
};

export const Alianza = (args) => <PartnerCard {...args} />;
Alianza.args = {
  path: partnerIcon,
};

export const Sponsor = (args) => <PartnerCard {...args} />;
Sponsor.args = {
  path: sponsorIcon,
};
