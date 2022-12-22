const { Sequelize, Op } = require("sequelize");

class PersistenceSequelize {
  #parseLatin(params = [], query) {
    return {
      $or: params.map((e) =>
        Sequelize.where(
          Sequelize.col(e),
          Op.substring,
          Sequelize.literal(`N'%${query}%' COLLATE Latin1_general_CI_AI`)
        )
      ),
    };
  }

  searchFilter(search, params) {
    return search
      ? {
          ...this.#parseLatin(params, search),
        }
      : {};
  }

  filters(filters = "", params) {
    filters && (filters = filters.split("-"));
    return filters
      ? {
          $and: filters.map((filter) => ({
            ...this.#parseLatin(params, filter),
          })),
        }
      : {};
  }

  pagination({ limit = 100, page = 1 }) {
    return {
      limit: parseInt(limit),
      offset: (parseInt(page) - 1) * parseInt(limit),
    };
  }
}

module.exports = { PersistenceSequelize };
