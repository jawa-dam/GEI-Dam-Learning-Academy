GEI Academy v12.1.0 — $25 Blueprint Sales Screen

Presentation-only redesign of the GEI Blueprint purchase section.

PAYPAL PROTECTION:
- Existing PayPal bridge was preserved byte-for-byte.
- Existing element IDs were preserved: paypalCheckout, paypalProduct, paypalPrice, paypalStatus, checkAccess, paypalNote.
- Existing checkoutPath (/sandbox-checkout), sessionPath (/api/access/session), productId (GEI_BLUEPRINT), amount (25.00), and currency (USD) were preserved.
- No PayPal secrets were added to the frontend.

VALIDATION:
- HTML parser check passed.
- PayPal bridge exact-match check passed.
- Required checkout/access IDs present.
- Mobile responsive styles included.
