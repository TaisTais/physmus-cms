import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'Text';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.RichText & Attribute.Required;
    images: Attribute.Media<'images', true>;
  };
}

export interface FieldAchievements extends Schema.Component {
  collectionName: 'components_field_achievements';
  info: {
    displayName: 'Achievements';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    year: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MainMainCategory extends Schema.Component {
  collectionName: 'components_main_main_categories';
  info: {
    displayName: 'MainCategory';
    icon: 'apps';
    description: '';
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
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.text': ContentText;
      'field.achievements': FieldAchievements;
      'main.main-category': MainMainCategory;
    }
  }
}
