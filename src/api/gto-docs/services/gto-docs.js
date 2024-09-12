'use strict';

/**
 * gto-docs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gto-docs.gto-docs');
