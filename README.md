# Vallore — latest cart drawer theme

## GitHub upload
Extract the ZIP. Upload its CONTENTS directly to your repository root, not a containing folder. Seven core theme directories are at root.

## Included design
Desktop: full-height right-side drawer, max width 560px.
Mobile: full-screen drawer, scrollable content, fixed footer.
Divider and exact headline: Stay Happy and Live In The Moment Forever.
Subscription switch updates subtotal, savings and recurring-charge disclosure. One-time purchases start with switch off; existing subscription selections start on.
Latest gallery order: Product, Strawberry lemonade, Daily ritual, Benefits, Ingredients.
Original review images; requested 1,200 reviews and names preserved.
Removed lower Start your steadier month offer section. Choose your bundle returns to selector beside product gallery.

## REQUIRED setup
Shopify theme editor > Theme settings > Vallore cart setup.
Enter all one-time bundle variant IDs, subscription bundle variant IDs and selling-plan IDs.
Each mapped variant represents one ENTIRE bundle; quantity sent is 1 bundle. Multi-pouch mappings must not point to a single-pouch SKU unless that SKU actually represents the whole bundle.
Create subscription plans using your subscription provider, attach plans to correct variants, and configure inventory, bundle fulfillment, shipping and cancellations.
Current displayed USD prices: one-time 29.99 / 44.99 / 69.99; subscription 23.99 / 39.99 / 63.99. Delivery intervals: 20 / 40 / 80 days. Configure selling plans to match these intervals; interval validation is manual.
Checkout verifies the variant's current price and selected plan allocation against the displayed price, blocking if mismatched. Multi-currency storefronts need currency-aware price rendering before use; current display is fixed USD.

## Commerce behavior and limitations
Add to cart opens a staged single-bundle drawer; it does NOT yet persist the item to Shopify. This keeps subscription changes from generating duplicate cart lines.
Checkout validates configuration and price, adds the selected bundle plus selling_plan when selected via Shopify AJAX, then redirects to Shopify checkout. No real billing occurs until Shopify checkout completes.
Existing Shopify cart items are retained and will also appear at checkout; the single-bundle drawer subtotal does not include those existing items. For a general multi-item store, replace this staged drawer with a full cart-state implementation before launch.
A standard /cart template is also included.
Missing IDs or unavailable plans show an inline error, never silently downgrade subscriptions.
This package has not been deployed, browser-tested or transaction-tested on your Shopify store. Test all six bundle/plan combinations, cancel/close actions, mobile layout and checkout before publishing.
Validate all review claims, reviewer names, verified-buyer labels, supplement claims, prices and shipping promises before publication.
No collection, search or customer templates. Storefront remains one section to preserve the original design.
