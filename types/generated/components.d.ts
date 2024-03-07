import type { Schema, Attribute } from '@strapi/strapi';

export interface MainMainCategory extends Schema.Component {
  collectionName: 'components_main_main_categories';
  info: {
    displayName: 'MainCategory';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.main-category': MainMainCategory;
    }
  }
}
