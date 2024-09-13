'use strict';

/**
 * universiade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::universiade.universiade');
