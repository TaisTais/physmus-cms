import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldAchievements extends Schema.Component {
  collectionName: 'components_field_achievements';
  info: {
    displayName: 'Achievements';
    icon: 'bulletList';
  };
  attributes: {
    year: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1800;
          max: 3000;
        },
        number
      >;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 700;
      }>;
  };
}

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
      'field.achievements': FieldAchievements;
      'main.main-category': MainMainCategory;
    }
  }
}
