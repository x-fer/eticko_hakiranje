import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kibsec.xfer.hr',
  integrations: [starlight({
    title: 'KibSec',
    customCss: [
      './src/styles/custom.css',
    ],
    social: {
      github: 'https://github.com/x-fer/eticko_hakiranje',
      discord: 'https://discord.com/invite/E7ad4UGbrG'
    },
    sidebar: [{
      label: 'O vještini',
      items: [{
        label: 'Sadržaj',
        link: '/lekcije/vjestina/o_vjestini'
      },{
        label: 'Predavanja',
        link: '/lekcije/vjestina/predavanja'
      }, {
        label: 'Bodovanje',
        link: '/lekcije/vjestina/bodovanje'
      }]
    },
      {
      label: 'O materijalima',
      items: [{
        label: 'Sadržaj',
        link: '/lekcije/uvod/o_materijalima'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind()]
});