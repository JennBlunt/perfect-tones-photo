<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'L95+A6uYbyRwH7fTSG8S5MfSt11fMK6yDD2ya9qf5vee0DMwjv/XHpQFLnWNYNY+eEi9vtBwgTsrUoZEUezIyQ==');
define('SECURE_AUTH_KEY',  'DGwoVhwC6SAzYMuVB6cfvVsX9kUyHzhyuyUuNmAH/9RYTQ5qorJLZ8sENdsDJN/DCXPBLGPqmX383aW3IIafvg==');
define('LOGGED_IN_KEY',    '3SMGfKiKMyw6ltr4Nj7GgNOVFvmAT+Sw2I6hDQW7LveVfEwpa7ob5+F5ME+AtagOBDpe3ukMh0f+PdnrQIVhMg==');
define('NONCE_KEY',        '2BHUYtudj8iummciP36+JElyCch+5wCM2PkPsqtfqGOL1UWHI9JXwAnGwa9a6+bz2RRvbv/ibtrOXNJXdlTYQA==');
define('AUTH_SALT',        'l9aLcXLUAVdlBD3NfS4zVznyk9/8san7Nr5mSAMtAH+ygEeBmfjuxnJtVluXbRjj+WOlNHhKzBR6WZU8oyxZcA==');
define('SECURE_AUTH_SALT', '+Yg3+OK1s0qiVgZ1WmsIdXzu6A7qwQQr2h8bG2a3F1SYE09mGR8e9J9mnESn/DbomSOtBH7hl/Fn/avpl0gmKQ==');
define('LOGGED_IN_SALT',   'd+qIz3wBu0VtIHj8OVibPZ8Hr47bn0FA/dzaDN6rrRfRnxpCDuCi/zyL0h9SkzR6IbUJluAC0QoZHvwxPwBDGw==');
define('NONCE_SALT',       'OWzdxm8/rFrSUVAGv+RJf89gUEgmAYSyH39HKS8bv9Wj21yOAOfI2x65nd619SV3IE3W0U5J8G7GtuhaVN/O2Q==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
