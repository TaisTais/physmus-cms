import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentObject extends Schema.Component {
  collectionName: 'components_content_objects';
  info: {
    displayName: 'textBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ContentTableItem extends Schema.Component {
  collectionName: 'components_content_table_items';
  info: {
    displayName: 'tableItem';
    description: '';
  };
  attributes: {
    complex: Attribute.String;
    sport: Attribute.String;
  };
}

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'Place';
    icon: 'medium';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    title: Attribute.String;
    address: Attribute.String;
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
      'content.object': ContentObject;
      'content.table-item': ContentTableItem;
      'content.text': ContentText;
      'field.achievements': FieldAchievements;
      'main.main-category': MainMainCategory;
    }
  }
}
