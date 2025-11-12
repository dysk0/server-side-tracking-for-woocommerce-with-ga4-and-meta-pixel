=== Server-Side Tracking with GA4 and Meta Pixel for WooCommerce ===
Contributors: dysko
Tags: google analytics, ga4, woocommerce, ecommerce tracking, server-side tracking
Requires at least: 5.0
Tested up to: 6.8
Stable tag: 1.3.0
Requires PHP: 7.2
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Server-side Google Analytics 4 tracking for WooCommerce stores with complete ecommerce event tracking and debug logging.

== Description ==

Server-Side Tracking with GA4 and Meta Pixel for WooCommerce provides comprehensive server-side tracking for your WooCommerce store using the Google Analytics 4 Measurement Protocol. This ensures accurate tracking that bypasses ad blockers and provides complete ecommerce insights.

= Key Features =

* **Complete Ecommerce Tracking** - Track all essential WooCommerce events server-side
* **Event Selection Control** - Choose which events to track via settings page
* **Debug Mode** - Comprehensive logging for troubleshooting tracking issues
* **Event Logs Viewer** - Built-in interface to view all tracked events and responses
* **Transaction Consistency** - Maintains transaction IDs across the entire checkout journey
* **User Tracking** - Includes WordPress user IDs and GA4 client IDs for better attribution
* **Currency Conversion** - Automatic conversion to USD/EUR for GA4 compatibility
* **Real-time Updates** - JavaScript integration for dynamic checkout events

= Tracked Events =

* **view_item** - Product page views
* **add_to_cart** - Product added to cart
* **view_cart** - Cart page views
* **begin_checkout** - Checkout process started
* **add_payment_info** - Payment method selected
* **add_shipping_info** - Shipping method selected
* **purchase** - Order completed
* **refund** - Order refunded
* **payment_failed** - Failed payment attempts

= Technical Features =

* Secure API credential storage
* WordPress coding standards compliant
* Prepared SQL statements for security
* Proper data escaping and sanitization
* Session-based duplicate prevention
* Comprehensive error handling
* AJAX-powered admin interface

== Installation ==

1. Upload the `server-side-tracking-for-woocommerce-with-ga4-and-meta-pixel` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go to WooCommerce > GA4 Tracking to configure your settings
4. Enter your GA4 Measurement ID and API Secret
5. Select which events you want to track
6. Optionally enable debug mode for troubleshooting

= Getting your GA4 Credentials =

**Measurement ID:**
1. Go to Google Analytics 4
2. Navigate to Admin > Data Streams
3. Select your web stream
4. Copy the Measurement ID (format: G-XXXXXXXXXX)

**API Secret:**
1. In the same data stream settings
2. Scroll to "Measurement Protocol API secrets"
3. Create a new secret
4. Copy the generated API secret

== External Services ==

This plugin connects to external services to provide server-side tracking functionality:

= Google Analytics 4 Measurement Protocol =

The plugin sends ecommerce event data to Google Analytics 4 servers to track user interactions and transactions.

* **Service Provider:** Google LLC
* **Service URL:** https://www.google-analytics.com/mp/collect
* **What data is sent:** Order information (products, quantities, prices), user identifiers (anonymized), session information, transaction details
* **When data is sent:** During WooCommerce events like product views, cart additions, checkout, and purchases (based on your settings)
* **Terms of Service:** https://marketingplatform.google.com/about/analytics/terms/us/
* **Privacy Policy:** https://policies.google.com/privacy

= Meta (Facebook) Conversions API =

The plugin sends conversion event data to Meta's servers for Facebook Pixel tracking.

* **Service Provider:** Meta Platforms, Inc.
* **Service URL:** https://graph.facebook.com/v13.0/{pixel_id}/events
* **What data is sent:** Event data, user information (hashed email, phone), order details, product information
* **When data is sent:** During WooCommerce events when Meta Pixel tracking is enabled
* **Terms of Service:** https://www.facebook.com/legal/terms
* **Privacy Policy:** https://www.facebook.com/privacy/policy

All data transmissions are done securely over HTTPS. You can control which events are tracked through the plugin settings. Users' personally identifiable information is hashed before being sent to Meta's servers.

== Frequently Asked Questions ==

= Why use server-side tracking? =

Server-side tracking provides more accurate data as it:
* Bypasses ad blockers and browser restrictions
* Ensures consistent tracking across all browsers
* Reduces client-side JavaScript load
* Provides better control over data sent to GA4

= Is this GDPR compliant? =

The plugin tracks standard ecommerce events. You should:
* Inform users about tracking in your privacy policy
* Implement appropriate consent mechanisms
* Consider using WordPress privacy tools for compliance

= Why are some events not showing in GA4? =

1. Check if debug mode is enabled to see API responses
2. Verify your Measurement ID and API Secret are correct
3. Ensure events are enabled in the settings
4. Note that GA4 can take 24-48 hours to show new data
5. Check the Event Logs to confirm events are being sent

= Can I track custom events? =

Currently, the plugin tracks standard WooCommerce ecommerce events. Custom event tracking would require code modifications.

= Does this work with caching plugins? =

Yes, server-side tracking is not affected by page caching as it runs on PHP hooks during actual WooCommerce actions.

== Screenshots ==

1. Main settings page with event selection
2. Event logs viewer showing tracked events
3. Debug mode with detailed API responses
4. Clear logs functionality

== Changelog ==

= 1.1.0 =
* Security improvements and code hardening
* Fixed all WordPress coding standards issues
* Added proper sanitization for all inputs
* Added nonce verification for forms
* Improved database query handling
* Replaced error_log with database logging
* Fixed all phpcs warnings

= 1.0.0 =
* Initial release
* Complete ecommerce event tracking
* Settings page with event selection
* Event logs viewer
* Debug mode
* Currency conversion support
* Transaction ID consistency
* User and session tracking
* Payment and shipping info tracking

== Upgrade Notice ==

= 1.1.0 =
Security improvements and WordPress coding standards compliance.

= 1.0.0 =
Initial release of Server-Side Tracking with GA4 and Meta Pixel for WooCommerce plugin.

== Privacy Policy ==

This plugin sends ecommerce transaction data to Google Analytics 4 using the Measurement Protocol. The data sent includes:

* Order information (products, quantities, prices)
* User identifiers (WordPress user ID for logged-in users)
* Session information (GA4 client ID from cookies)
* Transaction details (order ID, totals, tax, shipping)
* Product information (SKUs, names, categories)

No personal information (names, emails, addresses) is sent to Google Analytics unless explicitly configured.

== Support ==

For support, feature requests, or bug reports, please visit the plugin support forum or contact the developer.

== License & Attribution ==

This plugin is licensed under GPL v2 or later with additional attribution requirements under GPL Section 7.

If you distribute this plugin or create derivative works, you MUST retain the following attribution:

"Originally created by IO Data (https://iodata.work)
Original plugin: Server-Side Tracking with GA4 and Meta Pixel for WooCommerce
Source: https://github.com/dysk0/server-side-tracking-with-ga4-and-meta-pixel-for-woocommerce"

This attribution must appear in:
- The plugin header of any derivative work
- Any documentation or readme files
- Any user-facing credits or about sections

== Credits ==

Created by IO Data - https://iodata.work
Original Repository: https://github.com/dysk0/server-side-tracking-with-ga4-and-meta-pixel-for-woocommerce

This plugin uses the Google Analytics 4 Measurement Protocol for server-side tracking.