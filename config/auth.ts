/**
 * Config source: https://git.io/JY0mp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { AuthConfig } from '@ioc:Adonis/Addons/Auth'

/*
|--------------------------------------------------------------------------
| Authentication Mapping
|--------------------------------------------------------------------------
|
| List of available authentication mapping. You must first define them
| inside the `contracts/auth.ts` file before mentioning them here.
|
*/
const authConfig: AuthConfig = {
  guard: 'user',
  guards: {
    admin: {
      driver: 'session',

      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['email'],
        model: () => import('App/Models/Admin'),
      },
    },

    user: {
      driver: 'session',

      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['phone'],
        model: () => import('App/Models/User'),
      },
    },
    seller: {
      driver: 'session',

      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['phone'],
        model: () => import('App/Models/Seller'),
      },
    },

    api: {
      driver: 'oat',
      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'api_tokens',
        foreignKey: 'user_id',
      },

      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['email'],
        model: () => import('App/Models/User'),
      },
    },
  },
}

export default authConfig
