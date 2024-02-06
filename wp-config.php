<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'taharicawiki' );  
// Ganti nama Database dengan Database yang ingin digunakan setelah di import di PHP myAdmin | Thanks - Ashabil
/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}




/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


define( 'AUTH_KEY',         'lIeZKrtkaX5oIpestsxo9FjduPFkjfy4svNIL8Uei8fV5qS86P5zvwj5iMjotesP' );
define( 'SECURE_AUTH_KEY',  '4asxyuWTbpZLgeh45txQ8KCCwiLbkEFPpjl862RlFInCA0i6JelPhUBd7DfVrGq5' );
define( 'LOGGED_IN_KEY',    'mPfbb9sIvjNnMdhxNckvbsgTn1Hvqq7aYPgPfIiT1EJSFWlvbBcUbAWKJS8btIm0' );
define( 'NONCE_KEY',        '0LvWb9rUGJTxDH11KqY5B0kQUT97Nrd8a7qMKrPmnkqhqXoQDyqBG5iXh2U6vkth' );
define( 'AUTH_SALT',        'H5291XHqqUQVkrSu6pcGQQGY7Gk4wQZg3uXC6DPSJ9W7RRrdAIsuTE9lRIKF3avn' );
define( 'SECURE_AUTH_SALT', 'fnxlPMWWb5Nj2bKXqoqi6y36juw2geLpVTvrpQOn6WtWhLuAxTum7eZIrqzfzZxt' );
define( 'LOGGED_IN_SALT',   '2us3q97ViQvR7rfOVdwvlnvcFeb2b4dDGGsSwC0JsfEMC1FO4Z5zGlEzK9KlUSgY' );
define( 'NONCE_SALT',       'XK552IsYHTap3OVMF5nylyVARFJWlS1uwTrUB7sHQlqs36eCglS0PgLch21pGnWC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
