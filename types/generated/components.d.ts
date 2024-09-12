import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentFiles extends Schema.Component {
  collectionName: 'components_content_files';
  info: {
    displayName: 'Files';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    file: Attribute.Media<'files'> & Attribute.Required;
  };
}

export interface ContentImages extends Schema.Component {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Images';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentLinks extends Schema.Component {
  collectionName: 'components_content_links';
  info: {
    displayName: 'Links';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.Text & Attribute.Required;
  };
}

export interface ContentObject extends Schema.Component {
  collectionName: 'components_content_objects';
  info: {
    displayName: 'textBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentTableItem extends Schema.Component {
  collectionName: 'components_content_table_items';
  info: {
    displayName: 'tableItem';
    description: '';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
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

export interface FieldHistoryTimeLine extends Schema.Component {
  collectionName: 'components_field_history_time_lines';
  info: {
    displayName: 'HistoryTimeLine';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.RichText & Attribute.Required;
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

export interface UniEvent extends Schema.Component {
  collectionName: 'components_uni_events';
  info: {
    displayName: 'event';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.String;
    address: Attribute.String;
  };
}

export interface UniObject extends Schema.Component {
  collectionName: 'components_uni_objects';
  info: {
    displayName: 'object';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    objects: Attribute.Component<'content.text', true>;
  };
}

export interface UniSimpleList extends Schema.Component {
  collectionName: 'components_uni_simple_lists';
  info: {
    displayName: 'simpleList';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface UniSportObject extends Schema.Component {
  collectionName: 'components_uni_sport_objects';
  info: {
    displayName: 'sportObject';
  };
  attributes: {
    title: Attribute.String;
    sportComplex: Attribute.Component<'content.table-item', true>;
  };
}

export interface UniSymbolsItem extends Schema.Component {
  collectionName: 'components_uni_symbols_items';
  info: {
    displayName: 'SymbolsItem';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UniTextBlock extends Schema.Component {
  collectionName: 'components_uni_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface UniTextWithTable extends Schema.Component {
  collectionName: 'components_uni_text_with_tables';
  info: {
    displayName: 'textWithTable';
    description: '';
  };
  attributes: {
    countries: Attribute.Component<'uni.simple-list', true>;
    additionalText: Attribute.Text;
    text: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.files': ContentFiles;
      'content.images': ContentImages;
      'content.links': ContentLinks;
      'content.object': ContentObject;
      'content.table-item': ContentTableItem;
      'content.text': ContentText;
      'field.achievements': FieldAchievements;
      'field.history-time-line': FieldHistoryTimeLine;
      'main.main-category': MainMainCategory;
      'uni.event': UniEvent;
      'uni.object': UniObject;
      'uni.simple-list': UniSimpleList;
      'uni.sport-object': UniSportObject;
      'uni.symbols-item': UniSymbolsItem;
      'uni.text-block': UniTextBlock;
      'uni.text-with-table': UniTextWithTable;
    }
  }
}
