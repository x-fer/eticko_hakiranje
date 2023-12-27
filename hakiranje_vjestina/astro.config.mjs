import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Etičko hakiranje',
    social: {
      github: 'https://github.com/x-fer/eticko_hakiranje'
    },
    sidebar: [{
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